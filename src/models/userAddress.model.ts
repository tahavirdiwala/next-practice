import mongoose from "mongoose";

const userAddresses = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
});

const UserAddresse =
  mongoose.models.UserAddresse<UserAddress> ||
  mongoose.model<UserAddress>("UserAddresse", userAddresses);

export default UserAddresse;
