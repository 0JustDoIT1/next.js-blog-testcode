"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModePage = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // SSR에서는 렌더 안 함

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 bg-white text-black dark:bg-black dark:text-white">
      <p className="text-3xl text-black dark:text-white">현재 테마 : {theme}</p>
      <button
        type="button"
        className="p-4 ring ring-gray-400 rounded-lg"
        onClick={toggleTheme}
      >
        테마변경
      </button>
    </div>
  );
};

export default DarkModePage;
