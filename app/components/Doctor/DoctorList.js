import { DoctorCell } from "./DoctorCell";
import styles from "./styles.module.scss";

export const DoctorList = ({ doctors}) => {
    if(!doctors) return null;
    return <>
        <div className={styles.doctorList}>
            {doctors.map(doctor => <DoctorCell key={doctor._id} doctor={doctor} />)}
        </div>
    </>
}