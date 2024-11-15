import mongoose from "mongoose";

type UserType = {
  _id?: string;
  name: string;
  email: string;
  roleId: mongoose.Types.ObjectId;
};
