
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";
import styles from "./styles.module.scss";

export const DoctorCell = ({ doctor }) => {
    return (
        <div className={styles.doctorCell}>
            <Grid container>
                <Grid item size={{ xs: 12, sm: 6, md: 3, xl: 3 }} padding={2} justifyContent="center" alignItems="center">
                    <Image src={doctor.image} alt={`${doctor.firstName} ${doctor.lastName}`} width={150} height={150} className={styles.doctorImage} />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 9, xl: 9 }}>
                    <Grid container>
                        <Grid item padding={2} size={{ xs: 12, md: 6 }}>
                            <Stack justifyContent={"flex-start"}>
                                <div className={styles.doctorName}>
                                    {doctor.firstName} {doctor.lastName}, MD
                                </div>
                                {doctor.field && <div className={styles.doctorField}>
                                    <label>{doctor.field}</label>
                                </div>}
                            </Stack>
                        </Grid>
                        <Grid item padding={2} size={{ xs: 12, md: 6 }}>
                            sfsdf
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}