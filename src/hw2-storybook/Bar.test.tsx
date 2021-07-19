import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Bar } from "./Bar";
import { BarDto } from "./model/BarDto";

afterEach(cleanup);

describe("Bar", () => {
  it("Handle click", () => {
    const handleClick = jest.fn();
    const bar: BarDto = {
      timestamp: 1,
      open: 20,
      high: 80,
      low: 10,
      close: 60,
    };

    const { container } = render(
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <Bar bar={bar} click={handleClick} />
      </svg>
    );

    fireEvent.click(container.getElementsByTagName("path")[0]);

    expect(handleClick).toBeCalledTimes(1);
    expect(handleClick).toBeCalledWith(bar);
  });
});
