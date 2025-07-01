"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { TestFetchApi } from "../api/test";

const ReactQueryPage = () => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["test"],
    queryFn: TestFetchApi,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생</div>;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 bg-white text-black dark:bg-black dark:text-white">
      {isSuccess && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default ReactQueryPage;
