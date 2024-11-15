import mongoose from "mongoose";
import UserRole from "./userRoles.model";

const rolesSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      index: true,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

rolesSchema.pre("save", async function (next) {
  try {
    await UserRole.create({ roleId: this._id });
  } catch (error) {
    next(error as undefined);
  }
});

const Role =
  mongoose.models.Role<RoleType> ||
  mongoose.model<RoleType>("Role", rolesSchema);

export default Role;
