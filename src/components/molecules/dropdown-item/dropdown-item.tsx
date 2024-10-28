"use client";
import React, { FC } from "react";
import Icon from "@/components/atoms/icon/icon";
import { Link, usePathname } from "@/i18n/routing";
import "./dropdown-item.scss";
import { useTranslations } from "next-intl";

interface DropdownItemProps {
  iconName: string;
  labelKey: string;
  value: string;
  onClick: () => void;
}

const DropdownItem: FC<DropdownItemProps> = ({
  iconName,
  labelKey,
  value,
  onClick,
}) => {
  const pathname = usePathname();
  const t = useTranslations();
  return (
    <Link
      className="dropdown-item"
      href={pathname}
      locale={value}
      onClick={() => onClick()}
    >
      <Icon name={iconName} size="S" />
      <p className="dropdown-item__label">{t(labelKey)}</p>
    </Link>
  );
};

export default DropdownItem;
export type { DropdownItemProps };
