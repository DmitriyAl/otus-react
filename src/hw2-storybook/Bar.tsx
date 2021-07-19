import React, { FC } from "react";
import { BarDto } from "./model/BarDto";

interface Props {
  bar: BarDto;
  click?: (bar: BarDto) => void;
}

export const Bar: FC<Props> = ({ bar, click }) => {
  let highestBody;
  let lowestBody;
  let color;

  if (bar.open < bar.close) {
    highestBody = bar.close;
    lowestBody = bar.open;
    color = "green";
  } else if (bar.open > bar.close) {
    highestBody = bar.open;
    lowestBody = bar.close;
    color = "red";
  } else {
    highestBody = bar.close;
    lowestBody = bar.open;
    color = "blue";
  }
  const invert = (value: number) => 100 - value;

  const path = `M ${bar.timestamp * 20} ${invert(highestBody)} h 4 V ${invert(
    bar.high
  )} V ${invert(highestBody)} h 4 V ${invert(lowestBody)} h -4 V ${invert(
    bar.low
  )} V ${invert(lowestBody)} h -4 V ${invert(highestBody)}`;

  return (
    <path
      stroke={color}
      fill={color}
      opacity="1"
      strokeWidth="1"
      d={path}
      onClick={() => click && click(bar)}
    />
  );
};
