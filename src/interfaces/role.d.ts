import mongoose from "mongoose";

interface RoleInterFace {
  role: string;
  description?: string;
  users?: mongoose.Types.ObjectId[];
}
