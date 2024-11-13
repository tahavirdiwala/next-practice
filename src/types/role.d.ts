import mongoose from "mongoose";
import { UserInterFace } from "./user";

interface RoleInterFace {
  _id?: string;
  role: string;
  description?: string;
  users?: mongoose.Types.ObjectId[] & UserInterFace[];
}
