import mongoose from "mongoose";

interface RoleInterFace {
  _id?: string;
  role: string;
  description?: string;
  users?: mongoose.Types.ObjectId[];
}
