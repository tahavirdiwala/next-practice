import { z } from "zod";

const UserValidator = z.object({
  _id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  role: z.string(),
});

export { UserValidator };
