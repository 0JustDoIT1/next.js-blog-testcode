"use client";

import TiptapEditor from "@/components/tiptapEditor";
import { useState } from "react";

const TiptapPage = () => {
  const [text, setText] = useState<string>("");

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <TiptapEditor text={text} setText={setText} />
    </div>
  );
};

export default TiptapPage;
