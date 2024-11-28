import mongoose from "mongoose";
import { RoleType } from "@/types/role";

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
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});

const Role =
  mongoose.models.Role<RoleType> ||
  mongoose.model<RoleType>("Role", rolesSchema);

export default Role;
