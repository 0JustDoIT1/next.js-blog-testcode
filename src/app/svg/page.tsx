"use client";

import Image from "next/image";
import AngleLeftIcon from "~/public/assets/svg/angle-left";
import AngleLeftSvg from "~/public/assets/svg/angle-left.svg";

const SvgPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <AngleLeftIcon className="w-6 h-6 text-gray-600" />
      <Image src={AngleLeftSvg} alt="angle-left" width={24} />
    </div>
  );
};

export default SvgPage;
