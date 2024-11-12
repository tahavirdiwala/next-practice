import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../../..";

async function GET(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });
}

export { GET };

//commenting for review
