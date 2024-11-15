import mongoose from "mongoose";
import { z } from "zod";
import { UserType } from "@/types/user";

const RoleValidator = z.object({
  _id: z.string().optional(),
  role: z.string(),
  description: z.string().optional(),
  users: z
    .intersection(
      z.instanceof(Array<UserType>),
      z.instanceof(Array<mongoose.Types.ObjectId>)
    )
    .optional(),
});

export { RoleValidator };
