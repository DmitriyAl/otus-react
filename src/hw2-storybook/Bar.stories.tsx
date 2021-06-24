import React from "react";
import { Bar } from "./Bar";
import { BarDto } from "./model/BarDto";
import { action } from "@storybook/addon-actions";

export default {
  component: Bar,
  title: "Bar",
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

export const barExample = (args: any) => {
  const { timestamp, open, high, low, close } = args;
  const bar: BarDto = { timestamp, open, high, low, close };
  return (
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <Bar bar={bar} click={action("clicked")} />
    </svg>
  );
};

export const threeBarsExample = (args: any) => {
  const { open, high, low, close, click } = args;
  const bar1: BarDto = { timestamp: 1, open: 20, high: 80, low: 10, close: 60 };
  const bar2: BarDto = { timestamp: 2, open, high, low, close };
  const bar3: BarDto = { timestamp: 3, open: 70, high: 85, low: 5, close: 10 };
  return (
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <Bar bar={bar1} click={click} />
      <Bar bar={bar2} click={click} />
      <Bar bar={bar3} click={click} />
    </svg>
  );
};
