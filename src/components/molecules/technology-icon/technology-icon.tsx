"use client";
import React, { FC } from "react";
import Icon from "@/components/atoms/icon/icon";
import useWidth from "@/hooks/useWidth";
import "./technology-icon.scss";
import classNames from "classnames";

interface TechnologyIconTextProps {
  icon: string;
  label: string;
  variant?: "presentation" | "project-details";
}

const TechnologyIconText: FC<TechnologyIconTextProps> = ({
  icon,
  label,
  variant = "project-details",
}) => {
  const { isOnDesktop } = useWidth();
  return (
    <div
      className={classNames("technology-icon", `technology-icon--${variant}`)}
    >
      <Icon
        className="technology-icon__icon"
        name={icon}
        size={isOnDesktop && variant === "project-details" ? "2XL" : "S"}
      />
      <p className="technology-icon__label">{label}</p>
    </div>
  );
};

export default TechnologyIconText;
export type { TechnologyIconTextProps };
