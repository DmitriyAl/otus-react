import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { BarDto } from "./model/BarDto";
import { Plot } from "./Plot";

afterEach(cleanup);

describe("Plot", () => {
  it("Handle click", () => {
    const handleClick = jest.fn();
    const bars: BarDto[] = [
      { timestamp: 1, open: 30, high: 90, low: 20, close: 70 },
      { timestamp: 2, open: 20, high: 80, low: 10, close: 60 },
      { timestamp: 3, open: 70, high: 85, low: 5, close: 10 },
    ];

    const { container } = render(
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <Plot bars={bars} click={handleClick} />
      </svg>
    );

    fireEvent.click(container.getElementsByTagName("path")[0]);
    expect(handleClick).toBeCalledTimes(1);
    expect(handleClick).toBeCalledWith(bars[0]);

    fireEvent.click(container.getElementsByTagName("path")[1]);
    expect(handleClick).toBeCalledTimes(2);
    expect(handleClick).toBeCalledWith(bars[1]);

    fireEvent.click(container.getElementsByTagName("path")[2]);
    expect(handleClick).toBeCalledTimes(3);
    expect(handleClick).toBeCalledWith(bars[2]);
  });
});
