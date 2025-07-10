import { TestFetchApi2 } from "@/app/api/test-api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface IProductLayout {
  children: React.ReactNode;
  params: { id: string };
}

export default async function ProductLayout({
  children,
  params,
}: IProductLayout) {
  const { id } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["test2", id],
    queryFn: () => TestFetchApi2(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
