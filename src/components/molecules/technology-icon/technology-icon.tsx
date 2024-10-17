"use client";
import React, { FC } from "react";
import Icon from "@/components/atoms/icon/icon";
import useWidth from "@/hooks/useWidth";
import "./technology-icon.scss";

interface TechnologyIconTextProps {
  icon: string;
  label: string;
}

const TechnologyIconText: FC<TechnologyIconTextProps> = ({ icon, label }) => {
  const { isOnDesktop } = useWidth();
  return (
    <div className="technology-icon">
      <Icon
        className="technology-icon__icon"
        name={icon}
        size={isOnDesktop ? "2XL" : "S"}
      />
      <p className="technology-icon__label">{label}</p>
    </div>
  );
};

export default TechnologyIconText;
export type { TechnologyIconTextProps };
