import mongoose from "mongoose";
import { UserDetailType } from "@/types/userDetail";

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
      name: {
        type: String,
      },
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
