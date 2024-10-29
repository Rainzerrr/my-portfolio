import React, { FC } from "react";
import classNames from "classnames";
import "./icon.scss";
import Image from "next/image";

interface IconProps {
  className?: string;
  name: string;
  isIconImage?: boolean;
  stroke?: string;
  fill?: string;
  size?: "XS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL";
  onClick?: () => void;
}

const Icon: FC<IconProps> = ({
  className,
  name,
  isIconImage,
  stroke,
  fill,
  size = "2XL",
  onClick,
}) => {
  return (
    <div className={classNames("icon-wrapper", className)}>
      {!isIconImage && (
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
      )}
      {isIconImage && (
        <div className="icon-image-wrapper">
          <Image src={name} alt="icon" fill sizes="40px" quality={100} />
        </div>
      )}
    </div>
  );
};

export default Icon;
