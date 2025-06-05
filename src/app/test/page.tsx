"use client";

import { useThemeStore } from "@/lib/providers/theme-provider";

const TestPage = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <p className="text-3xl text-black">현재 테마 : {theme}</p>
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

export default TestPage;
