import { router } from "./trpc";
import { rolesRouter } from "./trpc-routers/roles";

export const appRouter = router({
  roles: rolesRouter,
});

export type AppRouter = typeof appRouter;
