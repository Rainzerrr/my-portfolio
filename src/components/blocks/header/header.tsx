"use client";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import NavItem, {
  NavItemProps,
} from "@/components/molecules/nav-item/nav-item";
import LanguageSwitch from "@/components/organisms/language-switch/language-switch";
import { DropdownItemProps } from "@/components/molecules/dropdown-item/dropdown-item";
import Icon from "@/components/atoms/icon/icon";
import "./header.scss";
import { useTheme } from "next-themes";

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
  const { setTheme } = useTheme();
  const [isDarkThemeActive, setIsDarkThemeActive] = useState<boolean>(false);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    if (showLanguageSwitchOptions) {
      setTimeout(() => {
        setShowLanguageSwitchOptions(false);
      }, 500);
    }
  }, [showLanguageSwitchOptions]);

  const handleThemeSwitch = () => {
    console.log("theme dark : ", isDarkThemeActive);
    setTheme(isDarkThemeActive ? "dark" : "light");
    setIsDarkThemeActive(!isDarkThemeActive);
    if (!isDarkThemeActive) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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

  useEffect(() => {
    setIsDarkThemeActive(localStorage.getItem("theme") === "dark");
    // Obtenir la balise <html>
    const htmlElement = document.documentElement;

    // Lire le thème actuel depuis localStorage
    const theme = localStorage.getItem("theme");

    // Suppression de toutes les classes existantes (ou spécifiées)
    htmlElement.classList.remove("light"); // Exemple de classe à retirer
    htmlElement.classList.remove("dark"); // Autre exemple de classe à retirer

    // Ajouter la classe basée sur le thème actuel
    if (theme) {
      htmlElement.classList.add(theme); // "light" ou "dark" selon la valeur du thème
    } else {
      htmlElement.classList.add("light"); // Valeur par défaut
    }
  });

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
        {/* <LanguageSwitch
          className="hide-mobile"
          options={options}
          showOptions={showLanguageSwitchOptions}
          setShowOptions={setShowLanguageSwitchOptions}
        /> */}
        <Icon
          className="header__settings__icon"
          name={isDarkThemeActive ? "sun" : "moon-star"}
          size="L"
          onClick={() => handleThemeSwitch()}
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
