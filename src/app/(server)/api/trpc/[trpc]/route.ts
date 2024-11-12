import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../../..";

async function POST(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext:()=>({})
  })
}

async function GET(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });
}

export { POST, GET };

//commenting for review
