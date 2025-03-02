import mongoose from "mongoose";

const FieldSchema = new mongoose.Schema({
    name: String
});

const Field = mongoose.models.Field || mongoose.model("Field", FieldSchema);

export default Field;
