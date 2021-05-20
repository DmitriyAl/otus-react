import React from "react";
import { Bar } from "./Bar";
import { action } from "@storybook/addon-actions";

export default {
  component: Bar,
  title: "Bar",
  argTypes: {
    name: {
      control: { type: "text" },
      defaultValue: "Test",
    },
  },
};

export const barExample = (args: any) => (
  <Bar clickMe={action("Clicked")} {...args} />
);
