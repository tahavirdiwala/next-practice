import { appRouter } from "@/app/(server)";
import connectDb from "@/dbConfig";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => await connectDb(),
  });
}

export { handler as POST, handler as GET, handler as PUT, handler as DELETE };
