import mongoose from "mongoose";

type RoleType = {
  _id?: string;
  role: string;
  description?: string;
  users?: mongoose.Types.ObjectId[];
};
