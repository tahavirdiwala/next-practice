import mongoose from "mongoose";

interface UserInterFace {
  _id?: string;
  name: string;
  email: string;
  role: mongoose.Types.ObjectId & RoleInterFace;
}
