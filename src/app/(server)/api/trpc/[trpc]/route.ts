import { appRouter } from "@/app/(server)";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

async function POST(req: Request) {
  return trpcFetchHandler(req);
}

async function GET(req: Request) {
  return trpcFetchHandler(req);
}

async function PUT(req: Request) {
  return trpcFetchHandler(req);
}

async function DELETE(req: Request) {
  return trpcFetchHandler(req);
}

function trpcFetchHandler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });
}

export { POST, GET, PUT, DELETE };
