import { z } from "zod";
import { RoleValidator } from "./role.validator";

const UserValidator = z.object({
  _id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  role: RoleValidator,
});

export { UserValidator };
