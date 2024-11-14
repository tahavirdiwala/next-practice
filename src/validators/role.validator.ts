import mongoose from "mongoose";
import { z } from "zod";
import { UserInterFace } from "@/types/user";

const RoleValidator = z.object({
  _id: z.string().optional(),
  role: z.string().optional(),
  description: z.string().optional(),
  users: z
    .intersection(
      z.instanceof(Array<UserInterFace>),
      z.instanceof(Array<mongoose.Types.ObjectId>)
    )
    .optional(),
});

export { RoleValidator };
