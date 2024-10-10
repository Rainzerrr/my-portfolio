"use client";
import React, { FC } from "react";
import classNames from "classnames";
import Icon from "@/components/atoms/icon/icon";
import "./button.scss";

interface ButtonProps {
  className?: string;
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  theme: "primary" | "secondary";
  isGhost?: boolean;
  shape: "rounded" | "square-rounded";
  size: "S" | "M" | "L" | "XL";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  className,
  label,
  leftIcon,
  rightIcon,
  shape,
  theme,
  isGhost,
  size = "M",
  onClick = () => null,
}) => {
  return (
    <button
      className={classNames(
        "button",
        `button-${size}`,
        `button-${theme}`,
        `button-${shape}`,
        isGhost && `button-ghost`,
        className
      )}
      onClick={() => onClick()}
    >
      {leftIcon && <Icon name={leftIcon} size={size === "S" ? "XS" : size} />}
      {label && <p className="button__label">{label}</p>}
      {rightIcon && <Icon name={rightIcon} size={size === "S" ? "XS" : size} />}
    </button>
  );
};

export default Button;
export type { ButtonProps };
