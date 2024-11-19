import mongoose from "mongoose";

const userAddresses = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
});

const UserAddresse =
  mongoose.models.UserAddresse<UserAddressType> ||
  mongoose.model<UserAddressType>("UserAddresse", userAddresses);

export default UserAddresse;
