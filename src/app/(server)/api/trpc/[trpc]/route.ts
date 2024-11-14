import { appRouter } from "@/app/(server)";
import connectDb from "@/dbConfig";
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
    createContext: async () => {
      await connectDb();
    },
    // allowBatching: true,
  });
}

export { POST, GET, PUT, DELETE };
