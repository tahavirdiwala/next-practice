import mongoose from "mongoose";
import { UserInterFace } from "./user";

type RoleInterFace = {
  _id?: string;
  role: string;
  description?: string;
  users?: mongoose.Types.ObjectId[] & UserInterFace[];
};
