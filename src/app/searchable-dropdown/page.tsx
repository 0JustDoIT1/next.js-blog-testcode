"use client";

import SearchableDropdown from "@/components/searchableDropdown";
import { useState } from "react";

const TestData = [
  { _id: "1", name: "김치찌개" },
  { _id: "2", name: "된장찌개" },
  { _id: "3", name: "불고기" },
  { _id: "4", name: "김치" },
  { _id: "5", name: "비빔밥" },
  { _id: "6", name: "잡채" },
  { _id: "7", name: "삼겹살" },
  { _id: "8", name: "갈비찜" },
  { _id: "9", name: "청국장" },
  { _id: "10", name: "떡볶이" },
];

const SearchableDropdownPage = () => {
  const [name, setName] = useState<string>("");

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <SearchableDropdown
        list={TestData}
        keyName="name"
        placeholder="음식을 입력해 주세요."
        value={name}
        onChange={setName}
      />
    </div>
  );
};

export default SearchableDropdownPage;
