"use client";
import React, { FC } from "react";
import classNames from "classnames";
import Icon from "@/components/atoms/icon/icon";
import "./button.scss";
import { useTranslations } from "next-intl";

interface ButtonProps {
  className?: string;
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  theme: "primary" | "secondary";
  isGhost?: boolean;
  shape: "circle" | "rounded" | "square-rounded";
  size: "S" | "M" | "L" | "XL";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

type SizeKey = "S" | "M" | "L" | "XL";
type SizeValue = "XS" | "S" | "M" | "XL";

const Button: FC<ButtonProps> = ({
  className,
  label,
  leftIcon,
  rightIcon,
  shape,
  theme,
  isGhost,
  disabled,
  size = "M",
  fullWidth,
  onClick = () => null,
}) => {
  const t = useTranslations();
  const sizes: Record<SizeKey, SizeValue> = {
    S: "XS",
    M: "S",
    L: "M",
    XL: "XL",
  };

  return (
    <button
      className={classNames(
        "button",
        `button-${size}`,
        `button-${theme}`,
        `button-${shape}`,
        disabled && "button--disabled",
        fullWidth && `button--full_width`,
        isGhost && `button-ghost`,
        className
      )}
      onClick={() => onClick()}
    >
      {leftIcon && <Icon name={leftIcon} size={sizes[size]} />}
      {label && <p className="button__label">{t(label)}</p>}
      {rightIcon && <Icon name={rightIcon} size={sizes[size]} />}
    </button>
  );
};

export default Button;
export type { ButtonProps };
