import mongoose from "mongoose";
import UserRole from "./userRoles.model";

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
    index: true,
  },
});

userSchema.pre("save", async function (next) {
  try {
      const userRole = await UserRole.findOne({ roleId: this?.roleId });
      
        userRole?.userId?.push(this?._id);
        await userRole?.save();
  } catch (error) {
  }
});

const User =
  mongoose.models.User<UserType> ||
  mongoose.model<UserType>("User", userSchema);

export default User;
