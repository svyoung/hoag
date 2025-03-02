"use client";
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_FIELDS, ADD_DOCTOR } from '@/app/api/graphql/queries';
import { useRouter } from 'next/navigation';

import styles from "./styles.module.scss";

const AddDoctorPage = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        field: "",
        acceptingPatients: true,
        image: ""
    }
    const [doctorFields, setDoctorFields] = useState(initialState);
    const { data: fieldsData } = useQuery(GET_FIELDS);
    const [ addDoctor, { loading}] = useMutation(ADD_DOCTOR);
    const router = useRouter();

    const handleChanges = (event) => {
        const { target: { name, value }} = event;
        setDoctorFields({
            ...doctorFields,
            [name]: value
        });
    }

    const handleRadioChanges = (event) => {
        const { target: { name, value }} = event;
        setDoctorFields({
            [name]: value.toLowerCase() === "true"
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addDoctor({
                variables: doctorFields
            });
            setDoctorFields(initialState);
            router.push("/");
        } catch(e) {
            console.log("error adding a doctor.", e);
        }
    }
    console.log(doctorFields);
    return (
        <div className={`wrapper ${styles.addDoctorWrapper}`}>
            <h1>Add a doctor</h1>
            <form onSubmit={handleSubmit} className={styles.addDoctorForm}>
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" value={doctorFields.firstName} onChange={handleChanges} />
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" value={doctorFields.lastName} onChange={handleChanges} />
                <label for="email">Email</label>
                <input type="text" name="email" value={doctorFields.email} onChange={handleChanges} />
                <label for="phone">Phone</label>
                <input type="text" name="phone" value={doctorFields.phone} onChange={handleChanges} />
                <label for="gender">Gender</label>
                <div className={styles.radioGroup}>        
                    <input type="radio" name="gender" value="Female" onChange={handleChanges} />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" value="Male" onChange={handleChanges} />
                    <label for="female">Male</label>
                </div>
                <label for="field">Field</label>
                <select name="field" onChange={handleChanges}>
                    <option value="">Select Field</option>
                    {fieldsData?.fields?.map(field => <option key={field._id} value={field.name}>{field.name}</option>)}
                </select>
                <label for="acceptingPatients">Accepting Patients?</label>
                <div className={styles.radioGroup}>        
                    <input type="radio" name="acceptingPatients" defaultChecked={doctorFields.acceptingPatients === true} value={true} onChange={handleRadioChanges} />
                    <label for="acceptingPatients">Yes</label>
                    <input type="radio" name="acceptingPatients" value={false} onChange={handleRadioChanges} />
                    <label for="acceptingPatients">No</label>
                </div>
                <label for="image">Image</label>
                <input type="text" name="image" value={doctorFields.image} onChange={handleChanges} />
                <button className={styles.submit} type="submit">Add Doctor</button>
            </form>
        </div>
    )
}

export default AddDoctorPage;