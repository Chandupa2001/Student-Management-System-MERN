import mongoose from "mongoose";

export const connectDB = async() => {
    try {
      await mongoose.connect('mongodb://localhost:27017/student-management-system');
      console.log("DB Connected");
    } catch (err) {
      console.error("Connection error", err);
    }
  }
  