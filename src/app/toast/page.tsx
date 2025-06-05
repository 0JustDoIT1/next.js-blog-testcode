"use client";

import ToastList from "@/components/toast";
import { useToast } from "@/context/toastContext";

const TestPage = () => {
  const { showToast } = useToast();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <p>Toast Message 테스트 페이지</p>
      <button
        type="button"
        className="bg-black py-3 px-4 text-white rounded-lg"
        onClick={() => showToast("success", "성공입니다!")}
      >
        Toast
      </button>
      <ToastList />
    </div>
  );
};

export default TestPage;
