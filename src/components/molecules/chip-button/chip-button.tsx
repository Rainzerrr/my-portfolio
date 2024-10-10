"use client";
import React, { FC } from "react";
import "./chip-button.scss";
import classNames from "classnames";
import Icon from "@/components/atoms/icon/icon";

interface ChipButtonProps {
  className?: string;
  label: string;
  leftIcon?: string;
  rightIcon?: string;
  size?: "S" | "M" | "L";
  onClick: () => void;
  isActive: boolean;
}

const ChipButton: FC<ChipButtonProps> = ({
  className,
  label,
  leftIcon,
  rightIcon,
  size = "M",
  onClick,
  isActive,
}) => {
  return (
    <button
      className={classNames(
        "chip-button",
        `chip-button--${size}`,
        isActive && "chip-button--active",
        className
      )}
      onClick={() => onClick()}
    >
      {leftIcon && <Icon name={leftIcon} size={size} />}
      {label && <p className="chip-button__label">{label}</p>}
      {rightIcon && <Icon name={rightIcon} size={size} />}
    </button>
  );
};

export default ChipButton;
