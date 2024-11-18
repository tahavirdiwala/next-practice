import mongoose from "mongoose";

type UserDetailType = {
  userId: mongoose.Types.ObjectId;
  state: string;
  city: string;
  address: Array<UserAddress>;
  designation: string;
};

type UserAddress = {
  name: string;
};
