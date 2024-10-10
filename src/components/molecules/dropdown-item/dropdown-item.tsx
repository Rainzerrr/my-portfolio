"use client";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Icon from "@/components/atoms/icon/icon";
import Link from "next/link";
import "./dropdown-item.scss";

interface DropdownItemProps {
  iconName: string;
  label: string;
  value: string;
  onClick: () => void;
}

const DropdownItem: FC<DropdownItemProps> = ({
  iconName,
  label,
  value,
  onClick,
}) => {
  const pathname = usePathname();
  console.log(value);
  return (
    <Link
      href={pathname}
      locale={value}
      className="dropdown-item"
      onClick={() => onClick()}
    >
      <Icon name={iconName} size="S" />
      <p className="dropdown-item__label">{label}</p>
    </Link>
  );
};

export default DropdownItem;
export type { DropdownItemProps };
