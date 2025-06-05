"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 bg-white">
      <Link
        className="p-4 border border-gray-400 rounded-lg"
        href="/pop?modal=true"
        scroll={false}
      >
        모달띄우기
      </Link>
    </div>
  );
}
