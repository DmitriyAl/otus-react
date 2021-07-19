import React, { FC } from "react";
import { BarDto } from "./model/BarDto";
import { Bar } from "./Bar";

interface Props {
  bars: BarDto[];
  click?: () => void;
}

export const Plot: FC<Props> = ({ bars, click }) => {
  return (
    <g>
      {bars.map((value, index) => (
        <Bar bar={value} click={click} key={index} />
      ))}
    </g>
  );
};
