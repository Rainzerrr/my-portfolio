"use client";
import React, { Dispatch, FC, useState } from "react";
import Dropdown from "../dropdown/dropdown";
import { DropdownItemProps } from "@/components/molecules/dropdown-item/dropdown-item";

interface LanguageSwitchProps {
  className?: string;
  options: DropdownItemProps[];
  showOptions: boolean;
  setShowOptions: Dispatch<React.SetStateAction<boolean>>;
}

const LanguageSwitch: FC<LanguageSwitchProps> = ({
  className,
  options,
  showOptions,
  setShowOptions,
}) => {
  const [activeLanguage, setActiveLanguage] = useState<DropdownItemProps>(
    options[0]
  );
  const handleSelectLanguage = (item: DropdownItemProps) => {
    setActiveLanguage(item);
  };
  return (
    <Dropdown
      className={className}
      items={options}
      activeOption={activeLanguage}
      handleSelectOption={handleSelectLanguage}
      showOptions={showOptions}
      setShowOptions={setShowOptions}
    />
  );
};

export default LanguageSwitch;
