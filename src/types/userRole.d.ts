import mongoose from "mongoose";

type UserRoleType = {
  _id?: string;
  userId: mongoose.Types.ObjectId[];
  roleId: mongoose.Types.ObjectId;
};
