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

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DateButton from "../DateButton";

const TEST_ID = "_dateButton";

test("DateButton renders without errors", () => {
  render(<DateButton />);

  const result = screen.getByTestId(TEST_ID);
  expect(result).toBeInTheDocument();
});

test("DateButton has class", () => {
  render(<DateButton />);
  const result = screen.getByTestId(TEST_ID);
  expect(result).toHaveClass("dateButton");
});

test("DateButton displays the set date", () => {
  let date = new Date("July 1, 2001 00:00:00"); // Sunday
  render(<DateButton date={date} />);
  const result = screen.getByTestId(TEST_ID);
  expect(result).toHaveTextContent(/7\/01/);
});

test("DateButton fires onDateSelected event", () => {
  let date = new Date("July 1, 2001 00:00:00"); //
  const handleClick = jest.fn();

  render(<DateButton date={date} onDateSelected={handleClick} />);
  const result = screen.getByTestId(TEST_ID);
  userEvent.click(result);
  expect(handleClick).toBeCalledWith(date);
});
