import { useAsPath } from "@/context/asPathContext";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";

const Modal = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("modal");

  const { previousAsPath } = useAsPath();

  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <div className="fixed inset-0 w-screen h-screen bg-black opacity-60 z-10"></div>
          <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50">
            <div className="w-1/2 h-2/3 max-h-[756px] py-4 bg-white rounded-lg">
              <div className="flex items-center justify-end px-4">
                <button
                  onClick={() => {
                    router.push(previousAsPath!);
                  }}
                >
                  <p>닫기</p>
                </button>
              </div>
              {children}
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
