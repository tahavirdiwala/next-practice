import { RoleType } from "@/types/role";
import mongoose from "mongoose";

const rolesSchema = new mongoose.Schema({
  role: {
    type: String,
    index: true,
    required: true,
  },
  description: {
    type: String,
  },
  users: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Role =
  mongoose.models.Role<RoleType> ||
  mongoose.model<RoleType>("Role", rolesSchema);

export default Role;
