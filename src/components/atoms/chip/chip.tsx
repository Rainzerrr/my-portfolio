import React from "react";
import classNames from "classnames";
import "./chip.scss";

type ChipColors =
  | "gray"
  | "white"
  | "black"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "blue"
  | "green";

const Chip = ({ color }: { color: ChipColors }) => {
  return <div className={classNames("chip", `chip--${color}`)}></div>;
};

export default Chip;
export type { ChipColors };
