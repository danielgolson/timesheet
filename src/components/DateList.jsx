/**
 * MIT License
 *
 * Copyright (c) 2021 Daniel G. Olson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from "react";
import DateButton from "./DateButton";

const DateList = (props) => {
  // Generate the list of date buttons
  let dateList = [];
  if (props.startDate && props.endDate) {
    let start = new Date(props.startDate.toDateString());
    let end = new Date(props.endDate.toDateString());
    const millisecondsInDay = 86400000; // milliseconds in a day = 24 * 60 * 60 * 1000
    for (let i = start.getTime(); i <= end.getTime(); i += millisecondsInDay) {
      dateList.push(i);
    }
  }

  const onClick = (date) => {
    console.log(date);
    if (props.onDateSelected) {
      props.onDateSelected(date);
    }
  };

  return (
    <div data-testid="_dateList" className="dateList">
      {dateList.map((time) => (
        <DateButton key={time} date={new Date(time)} onDateSelected={onClick} />
      ))}
    </div>
  );
};

export default DateList;
