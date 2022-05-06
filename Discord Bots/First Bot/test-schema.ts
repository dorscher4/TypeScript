import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
    name: String,
    num1: String,
    level: String
})

export default mongoose.model('testing', TestSchema, 'testing')