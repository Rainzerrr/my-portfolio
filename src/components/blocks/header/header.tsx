"use client";
import React, { FC, useCallback, useMemo, useState } from "react";
import classNames from "classnames";
import NavItem, {
  NavItemProps,
} from "@/components/molecules/nav-item/nav-item";
import LanguageSwitch from "@/components/organisms/language-switch/language-switch";
import { DropdownItemProps } from "@/components/molecules/dropdown-item/dropdown-item";
import Icon from "@/components/atoms/icon/icon";
import "./header.scss";

interface HeaderProps {
  navItems: Omit<NavItemProps, "size">[];
}

const options: DropdownItemProps[] = [
  {
    iconName: "french",
    label: "Français",
    value: "fr",
    onClick: () => null,
  },
  {
    iconName: "england",
    label: "Anglais",
    value: "en",
    onClick: () => null,
  },
];

const Header: FC<HeaderProps> = ({ navItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLanguageSwitchOptions, setShowLanguageSwitchOptions] =
    useState(false);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    if (showLanguageSwitchOptions) {
      setTimeout(() => {
        setShowLanguageSwitchOptions(false);
      }, 500);
    }
  }, [showLanguageSwitchOptions]);

  const renderNavItems = useMemo(() => {
    return navItems.map((navItem: Omit<NavItemProps, "size">) => {
      return (
        <NavItem
          key={navItem.label}
          label={navItem.label}
          size="XL"
          redirectUrl={navItem.redirectUrl}
          onClick={() => closeMobileMenu()}
        />
      );
    });
  }, [closeMobileMenu, navItems]);

  return (
    <div className="header">
      <div
        className={classNames(
          "mobile-overlay",
          "hide-desktop",
          isMobileMenuOpen && "mobile-overlay--visible"
        )}
        onClick={() => closeMobileMenu()}
      />

      <div className="header__settings">
        <LanguageSwitch
          className="hide-mobile"
          options={options}
          showOptions={showLanguageSwitchOptions}
          setShowOptions={setShowLanguageSwitchOptions}
        />
        <Icon
          className="header__settings__icon"
          name="moon-star"
          size="L"
          onClick={() => alert("theme changed !")}
        />
        <Icon
          className="header__settings__icon hide-desktop"
          name="menu"
          size="L"
          onClick={() => setIsMobileMenuOpen(true)}
        />
      </div>

      <div className="header__nav-items hide-mobile">{renderNavItems}</div>

      <div
        className={classNames(
          "header__mobile-menu",
          isMobileMenuOpen && "header__mobile-menu--visible",
          "hide-desktop"
        )}
      >
        <Icon
          className="header__mobile-menu__close"
          name="cross"
          size="L"
          onClick={() => closeMobileMenu()}
        />
        <div className="header__mobile-menu__content">
          <div className="header__nav-items">{renderNavItems}</div>
          <LanguageSwitch
            className="header-mobile-menu__language-switch"
            options={options}
            showOptions={showLanguageSwitchOptions}
            setShowOptions={setShowLanguageSwitchOptions}
          />
        </div>
      </div>

      <div className="header__left-space hide-mobile"></div>
    </div>
  );
};

export default Header;
