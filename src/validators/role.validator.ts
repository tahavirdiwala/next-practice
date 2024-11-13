import { z } from "zod";
import mongoose from "mongoose";

const RoleValidator = z.object({
  role: z.string(),
  description: z.string().optional(),
  users: z.instanceof(Array<mongoose.Types.ObjectId>).optional(),
});

export { RoleValidator };
