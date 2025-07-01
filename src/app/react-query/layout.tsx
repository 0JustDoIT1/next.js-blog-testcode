import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { TestFetchApi } from "../api/test";

export default async function ReactQueryLayout({
  children,
}: PropsWithChildren) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["test"],
    queryFn: TestFetchApi,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
