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
});

const Role =
  mongoose.models.Role<RoleType> ||
  mongoose.model<RoleType>("Role", rolesSchema);

export default Role;
