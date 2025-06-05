import useSearchableDropdown from "@/hooks/useSearchable";
import type { StringIndexable } from "@/types/indexableType";
import React from "react";
import ChevronUpIcon from "~/public/assets/svg/chevron-up";
import ChevronDownIcon from "~/public/assets/svg/chevron-down";
// import { RefCallBack } from "react-hook-form";

interface ISearchableDropdown<T> {
  list: T[];
  keyName: string;
  placeholder: string;
  //   ref?: RefCallBack;
  value: string;
  onChange: (...event: any[]) => void;
}

const SearchableDropdown = <T extends StringIndexable>({
  list,
  keyName,
  placeholder,
  //   ref,
  value,
  onChange,
}: ISearchableDropdown<T>) => {
  const {
    inputRef,
    itemRef,
    setQuery,
    filterList,
    isOpen,
    setIsOpen,
    selectIndex,
    setSelectIndex,
    toggleDropdown,
    onKeyPress,
    setKeyboardScroll,
    selectItem,
    displayValue,
  } = useSearchableDropdown(list, keyName, value, onChange);

  return (
    <div className="relative cursor-default">
      <input
        id={keyName}
        className="w-full rounded-md bg-white p-2 text-sm text-gray-800 box-border ring-1 ring-gray-800 focus:ring-green-600 shadow-xs outline-none hover:bg-gray-200"
        name={keyName}
        // ref={(e) => {
        //   inputRef.current = e;
        //   ref?.(e);
        // }}
        ref={inputRef}
        type="text"
        value={displayValue()}
        placeholder={placeholder}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange("");
          setIsOpen(true);
          setSelectIndex(0);
        }}
        onClick={toggleDropdown}
        onKeyDown={onKeyPress}
      />
      {isOpen && filterList.length > 0 ? (
        <ChevronUpIcon className="absolute top-1.5 right-0 w-6 h-6 text-gray-800 pointer-events-none" />
      ) : (
        <ChevronDownIcon className="absolute top-1.5 right-0 w-6 h-6 text-gray-800 pointer-events-none" />
      )}

      {isOpen && filterList.length > 0 && (
        <ul
          ref={itemRef}
          className="absolute start-0 z-10 w-full max-h-64 overflow-y-auto box-border rounded-md bg-white text-sm ring-1 shadow-lg ring-gray-200 "
        >
          {filterList.map((item, index) => {
            let background = "";
            let hover = "";

            if (value === item[keyName]) {
              hover = "hover:bg-green-300";
              background = "bg-green-200";
              if (index === selectIndex) {
                background = "bg-green-300";
              }
            } else {
              hover = "hover:bg-gray-100";
              background = "bg-white";
              if (index === selectIndex) {
                background = "bg-gray-100";
              }
            }
            setTimeout(() => {
              setKeyboardScroll();
            }, 100);

            return (
              <li
                key={item._id}
                className={`p-2 box-border cursor-pointer truncate ${background} ${hover}`}
                onClick={() => {
                  selectItem(item);
                  onChange(item[keyName]);
                }}
              >
                {item[keyName]}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
