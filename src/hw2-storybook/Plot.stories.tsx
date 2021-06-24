import React from "react";
import { BarDto } from "./model/BarDto";
import { Plot } from "./Plot";

export default {
  component: Plot,
  title: "Plot",
  argTypes: {
    timestamp: {
      control: { type: "number", min: 0, max: 100, step: 1 },
      defaultValue: 1,
    },
    open: {
      control: { type: "number", min: 0, step: 10 },
      defaultValue: 50,
    },
    high: {
      control: { type: "number", min: 0, step: 10 },
      defaultValue: 60,
    },
    low: {
      control: { type: "number", min: 0, step: 10 },
      defaultValue: 10,
    },
    close: {
      control: { type: "number", min: 0, step: 10 },
      defaultValue: 40,
    },
    click: { action: "clicked" },
  },
};

export const plotExample = (args: any) => {
  const { timestamp, open, high, low, close, click } = args;
  const bar: BarDto = { timestamp, open, high, low, close };
  const bars: BarDto[] = [
    { timestamp: 2, open: 20, high: 80, low: 10, close: 60 },
    { timestamp: 3, open: 70, high: 85, low: 5, close: 10 },
  ];
  bars.push(bar);
  return (
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <Plot bars={bars} click={click} />
    </svg>
  );
};
