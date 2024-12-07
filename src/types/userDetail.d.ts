import mongoose from "mongoose";

type UserDetailType = {
  userId: mongoose.Types.ObjectId;
  state: string;
  city: string;
  address: UserAddressType[];
  designation: string;
};
