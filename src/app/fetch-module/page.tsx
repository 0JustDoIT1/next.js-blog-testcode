import React from "react";
import { FetchModuleApi } from "../api/test-api";

const FetchModulPage = async () => {
  const data = await FetchModuleApi("1");

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 bg-white text-black dark:bg-black dark:text-white">
      {<pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default FetchModulPage;
