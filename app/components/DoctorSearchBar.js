import { useEffect, useState } from "react";
import { useDebounce } from "../utils/useDebounce";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_DOCTORS, SEARCH_FIELDS } from "../api/graphql/queries";
import styles from "../page.module.scss"

const DoctorSearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState();
    const debouncedSearchVal = useDebounce(searchValue, 2000);
    const [searchDoctors, { data: doctorData }] = useLazyQuery(SEARCH_DOCTORS, {
        fetchPolicy: "network-only",
    });
    const [filterFields, { data: fieldData }] = useLazyQuery(SEARCH_FIELDS, {
        fetchPolicy: "network-only",
    });

    console.log("doctorData", doctorData);
    console.log("fieldData", fieldData);

    useEffect(() => {
        if(debouncedSearchVal) {
            console.log("search val is", debouncedSearchVal);
            searchDoctors({ variables: { query: debouncedSearchVal }});
            filterFields({ variables: { name: debouncedSearchVal }});
        }
    }, [debouncedSearchVal, searchDoctors, filterFields]); 

    const onType = (e) => setSearchValue(e.target.value);

    return(
        <div className={styles.doctorSearchBar}>
            <form onSubmit={onSearch}>
                <div className={styles.searchInput}>
                    <input type="text" name="searchValue" placeholder="Search doctor name or specialty" value={searchValue} onChange={onType} />
                </div>
                <div className={styles.searchSubmit} >
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}
export default DoctorSearchBar;