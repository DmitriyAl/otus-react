import React, { FC } from "react";

interface Props {
  name: string;
  clickMe: () => void;
}

export const Bar: FC<Props> = ({ name, clickMe }) => (
  <div>
    <h3>{name}</h3>
    <button onClick={clickMe}>Click me</button>
  </div>
);
