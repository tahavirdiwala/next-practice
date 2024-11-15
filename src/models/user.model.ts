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

userSchema.post("save", async function (doc: any) {
  try {
    const userRole: any = await UserRole.findOne({ roleId: doc?.roleId });
    userRole?.userId?.push(doc?.id);
    await userRole?.save();
  } catch (error) {
    console.log(error);
  }
});

const User =
  mongoose.models.User<UserType> ||
  mongoose.model<UserType>("User", userSchema);

export default User;
