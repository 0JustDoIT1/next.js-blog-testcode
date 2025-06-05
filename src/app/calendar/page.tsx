"use client";

import CustomCalendar from "@/components/calendar";
import useCalendar from "@/hooks/useCalendar";
import { dateToFormatString } from "@/utils/dateFormat";
import React from "react";
import AngleLeftIcon from "~/public/assets/svg/angle-left";
import AngleRightIcon from "~/public/assets/svg/angle-right";

const CalendarPage = () => {
  const { today, week, dayArray, setPreMonth, setNextMonth, setPresentMonth } =
    useCalendar();

  return (
    <div className="w-full mx-auto lg:max-w-6xl">
      <div className="flex items-center justify-between w-full py-4">
        <div className="flex items-center justify-center w-full">
          <button type="button" onClick={setPreMonth}>
            <AngleLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          <p className="mx-2 mt-1 text-gray-600">
            {dateToFormatString(today, "YYYY년 MM월")}
          </p>
          <button type="button" onClick={setNextMonth}>
            <AngleRightIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center w-full">
          <button
            type="button"
            className="mr-2 w-16 text-gray-600"
            onClick={setPresentMonth}
          >
            오늘
          </button>
        </div>
      </div>
      <CustomCalendar
        today={today}
        week={week}
        dayArray={dayArray}
        isHasSchedule={true}
      />
    </div>
  );
};

export default CalendarPage;
