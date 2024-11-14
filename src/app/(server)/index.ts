import { router } from "./trpc";
import { rolesRouter } from "./trpc-routers/roles";
import { userRouter } from "./trpc-routers/users";

export const appRouter = router({
  roles: rolesRouter,
  users: userRouter,
});

export type AppRouter = typeof appRouter;
