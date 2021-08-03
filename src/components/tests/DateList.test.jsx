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

import { fireEvent, render, screen } from "@testing-library/react";
import DateList from "../DateList";

const TEST_ID = "_dateList";

test("DateList renders without errors", () => {
  render(<DateList />);

  const result = screen.getByTestId(TEST_ID);
  expect(result).toBeInTheDocument();
});

test("DateList has class", () => {
  render(<DateList />);
  const result = screen.getByTestId(TEST_ID);
  expect(result).toHaveClass("dateList");
});

test("DateList contains list of 5 date buttons", () => {
  let startDate = new Date("July 1, 2001 00:00:00"); // Sunday
  let endDate = new Date("July 5, 2001 00:00:00"); // Thursday

  render(<DateList startDate={startDate} endDate={endDate} />);
  const result = screen.getAllByRole("button");
  expect(result).toHaveLength(5);
});

test("DateList returns expected date when list item is clicked", () => {
  let startDate = new Date("July 1, 2001 00:00:00"); // Sunday
  let endDate = new Date("July 5, 2001 00:00:00"); // Thursday
  const handleClick = jest.fn();

  render(
    <DateList
      startDate={startDate}
      endDate={endDate}
      onDateSelected={handleClick}
    />
  );
  const result = screen.getAllByRole("button");
  fireEvent.click(result[0]);
  fireEvent.click(result[4]);
  expect(handleClick).toBeCalledTimes(2);
});
