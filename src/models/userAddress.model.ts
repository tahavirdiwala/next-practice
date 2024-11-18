import mongoose from "mongoose";

const userAddressSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
});

const UserAddresse =
  mongoose.models.UserAddresse<UserAddress> ||
  mongoose.model<UserAddress>("UserAddresse", userAddressSchema);

export default UserAddresse;
