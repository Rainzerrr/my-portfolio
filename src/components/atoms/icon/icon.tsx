import React, { FC } from "react";
import classNames from "classnames";
import "./icon.scss";

interface IconProps {
  className?: string;
  name: string;
  stroke?: string;
  fill?: string;
  size?: "XS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL";
  onClick?: () => void;
}

const Icon: FC<IconProps> = ({
  className,
  name,
  stroke,
  fill,
  size = "2XL",
  onClick,
}) => {
  return (
    <div className={classNames("icon-wrapper", className)}>
      <svg
        className={classNames(
          "icon",
          `icon-${name}`,
          `icon--${size}`,
          onClick && "icon--clickable"
        )}
        stroke={stroke}
        fill={fill}
        onClick={onClick}
      >
        <use xlinkHref={`/symbol-defs.svg#icon-${name}`}></use>
      </svg>
    </div>
  );
};

export default Icon;
