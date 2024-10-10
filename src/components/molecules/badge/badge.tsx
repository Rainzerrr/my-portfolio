import React, { FC } from "react";
import "./badge.scss";
import Chip, { ChipColors } from "@/components/atoms/chip/chip";
import classNames from "classnames";

interface BadgeProps {
  className?: string;
  label: string;
  color: ChipColors;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success";
}

const Badge: FC<BadgeProps> = ({
  className,
  label,
  color,
  variant = "primary",
}) => {
  return (
    <div
      className={classNames(
        "badge",
        `badge--${variant}`,
        `badge--${color}`,
        className
      )}
    >
      <Chip color={color} />
      <p className={"badge__label"}>{label}</p>
    </div>
  );
};

export default Badge;
export type { BadgeProps };
