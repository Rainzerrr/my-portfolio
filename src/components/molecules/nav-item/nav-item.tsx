"use client";

import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import Icon from "@/components/atoms/icon/icon";
import "./nav-item.scss";

interface NavItemProps {
  className?: string;
  size: "S" | "M" | "L" | "XL";
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  redirectUrl: string;
  onClick?: () => void;
}

const NavItem: FC<NavItemProps> = ({
  className,
  size,
  label,
  leftIcon,
  rightIcon,
  redirectUrl,
  onClick = () => null,
}) => {
  const currentPath = usePathname();

  const isNavItemActive = () => {
    if (redirectUrl === "/") {
      return currentPath === "/";
    }
    return currentPath.includes(redirectUrl) && redirectUrl !== "/";
  };

  return (
    <Link
      onClick={() => {
        window.scrollTo(0, 0);
        onClick();
      }}
      className={classNames("nav-item", className)}
      href={redirectUrl}
    >
      <button
        className={classNames(
          "nav-item__button",
          `nav-item--${size}`,
          isNavItemActive() && "nav-item--active"
        )}
      >
        {leftIcon && <Icon name={leftIcon} />}
        {label && <p className="nav-item__label">{label}</p>}
        {rightIcon && <Icon name={rightIcon} />}
      </button>
    </Link>
  );
};

export default NavItem;
export type { NavItemProps };
