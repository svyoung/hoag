import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    image: String,
    field: String,
    gender: String,
    address: String,
    phone: String,
    affiliates: String,
    acceptingPatients: Boolean
});

const Doctor = mongoose.models.Doctor || mongoose.model("Doctor", DoctorSchema);

export default Doctor;
