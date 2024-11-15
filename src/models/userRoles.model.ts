import { UserRoleType } from "@/types/userRole";
import mongoose, { Schema } from "mongoose";

const userRolesSchema = new mongoose.Schema(
  {
    userId: [
      {
        type: Schema.Types.ObjectId,
        index: true,
        default: [],
      },
    ],
    roleId: {
      type: Schema.Types.ObjectId,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserRole =
  mongoose.models.UserRole<UserRoleType> ||
  mongoose.model<UserRoleType>("UserRole", userRolesSchema);

export default UserRole;
