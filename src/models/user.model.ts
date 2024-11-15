import { UserType } from "@/types/user";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  email: {
    type: String,
    index: true,
  },
  roleId: {
    type: mongoose.Schema.ObjectId,
    ref: "Role",
    index: true,
  },
});

const User =
  mongoose.models.User<UserType> ||
  mongoose.model<UserType>("User", userSchema);

export default User;
