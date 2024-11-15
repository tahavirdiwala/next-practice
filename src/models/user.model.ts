import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User<UserType> ||
  mongoose.model<UserType>("User", userSchema);

export default User;
