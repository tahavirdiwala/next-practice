import { appRouter } from "@/app/(server)";
import connectDb from "@/dbConfig";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

function fetchHandler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => await connectDb(),
  });
}

export {
  fetchHandler as POST,
  fetchHandler as GET,
  fetchHandler as PUT,
  fetchHandler as DELETE,
};
