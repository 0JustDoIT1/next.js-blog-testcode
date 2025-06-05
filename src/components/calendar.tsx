import { dateToFormatString, dayjsType, getToday } from "@/utils/dateFormat";
import React from "react";

interface CustomCalendar {
  today: dayjsType;
  week: string[];
  dayArray: { [x: number]: dayjsType[] }[];
  isHasSchedule?: boolean;
  schedule?: any;
}

const CustomCalendar = ({
  today,
  week,
  dayArray,
  isHasSchedule = false,
  schedule,
}: CustomCalendar) => {
  schedule = isHasSchedule ? schedule : null;

  return (
    <div className="w-full">
      <div className="box-border w-full border border-gray-400 divide-y divide-gray-400">
        <div className="grid grid-cols-7 divide-x divide-gray-400 bg-gray-100">
          {week.map((item) => (
            <div key={item}>
              <p
                className={`h-8 leading-8 text-center text-sm ${
                  item === "일"
                    ? "text-red-600"
                    : item === "토"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
        {dayArray.map((week, row) => (
          <div key={row} className="grid grid-cols-7 divide-x divide-gray-400">
            {week[row].map((day, column) => {
              const todayCheck =
                dateToFormatString(getToday(), "YYYY-MM-DD") ===
                dateToFormatString(day, "YYYY-MM-DD");
              const monthCheck =
                dateToFormatString(today, "YYYY-MM") ===
                dateToFormatString(day, "YYYY-MM");

              return (
                <div key={day.unix()} className="relative h-36">
                  <div
                    className={`pl-1 py-1 text-left text-xs ${
                      monthCheck ? "font-normal" : "font-light"
                    } ${
                      monthCheck && column === 0
                        ? "text-red-600"
                        : monthCheck && column === 6
                        ? "text-blue-600"
                        : monthCheck
                        ? "text-gray-600"
                        : "text-gray-400"
                    }`}
                  >
                    {todayCheck ? (
                      <p className="flex items-center justify-center w-6 h-6 bg-green-600 rounded-full text-white">
                        {dateToFormatString(day, "D")}
                      </p>
                    ) : (
                      <p className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
                        {dateToFormatString(day, "D")}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCalendar;
