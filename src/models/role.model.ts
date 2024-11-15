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

rolesSchema.post("save", async function (doc) {
  try {
    await UserRole.create({ roleId: doc._id });
  } catch (error) {
    console.log(error);
  }
});

const Role =
  mongoose.models.Role<RoleType> ||
  mongoose.model<RoleType>("Role", rolesSchema);

export default Role;
