import mongoose, { Schema } from "mongoose";

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
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Role = mongoose.model("Role", rolesSchema);

export default Role;
