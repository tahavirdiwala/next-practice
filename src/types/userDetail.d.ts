import mongoose from "mongoose";

type UserDetailType = {
  userId: mongoose.Schema.ObjectId;
  state: string;
  city: string;
  address: UserAddressType[];
  designation: string;
};
