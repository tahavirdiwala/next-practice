"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import { type AppRouter } from "@/app/(server)";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const trpc = createTRPCReact<AppRouter>({});

const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: `http://localhost:3000/api/trpc`,
      }),
    ],
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default ReactQueryClientProvider;
