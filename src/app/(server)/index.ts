import { router } from "./trpc";
import { rolesRouter } from "./trpc-routers/roles";
import { userRouter } from "./trpc-routers/users";

export const appRouter = router({
  role: rolesRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
