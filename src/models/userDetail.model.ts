import { UserDetailType } from "@/types/userDetail";
import mongoose from "mongoose";

const userDetailsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    index: true,
    required: true,
  },
  state: {
    type: String,
    index: true,
    required: true,
  },
  city: {
    type: String,
    index: true,
  },
  address: [
    {
      type: mongoose.Types.ObjectId,
      ref: "UserAddresse",
    },
  ],
  designation: {
    type: String,
    index: true,
  },
});

const UserDetail =
  mongoose.models.UserDetail<UserDetailType> ||
  mongoose.model<UserDetailType>("UserDetail", userDetailsSchema);

export default UserDetail;
