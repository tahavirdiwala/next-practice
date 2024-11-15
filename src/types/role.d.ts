import mongoose from "mongoose";
import { UserType } from "./user";

type RoleType = {
  _id?: string;
  role: string;
  description?: string;
  users?: mongoose.Types.ObjectId[] & UserType[];
};
