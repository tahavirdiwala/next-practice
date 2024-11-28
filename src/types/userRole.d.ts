import mongoose from "mongoose";

type UserRoleType = {
  _id?: string;
  userId: mongoose.Schema.ObjectId;
  roleId: mongoose.Schema.ObjectId;
};
