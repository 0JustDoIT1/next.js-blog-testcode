import { TestFetchApi2 } from "@/app/api/test-api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";

interface IProductLayout {
  children: React.ReactNode;
  params: { id: string };
}

export async function generateMetadata({
  params,
}: IProductLayout): Promise<Metadata> {
  const { id } = await params;

  return {
    title: id,
    description: `${id} 입니다.`,
  };
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
