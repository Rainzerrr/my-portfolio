"use client";
import React, { Dispatch, FC } from "react";
import DropdownItem, {
  DropdownItemProps,
} from "@/components/molecules/dropdown-item/dropdown-item";
import Icon from "@/components/atoms/icon/icon";
import "./dropdown.scss";
import classNames from "classnames";

interface DropdownProps {
  className?: string;
  items: DropdownItemProps[];
  activeOption: DropdownItemProps;
  showOptions: boolean;
  setShowOptions: Dispatch<React.SetStateAction<boolean>>;
  handleSelectOption: (option: DropdownItemProps) => void;
}

const Dropdown: FC<DropdownProps> = ({
  className,
  items,
  activeOption,
  showOptions,
  setShowOptions,
  handleSelectOption,
}) => {
  const renderDropdownItems = (item: DropdownItemProps) => (
    <DropdownItem
      key={item.value}
      {...item}
      onClick={() => {
        handleSelectOption(item);
        showDropdownOptions();
      }}
    />
  );

  const showDropdownOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={classNames("dropdown", className)}>
      <div
        className="dropdown__active-option"
        onClick={() => showDropdownOptions()}
      >
        <Icon name={activeOption.iconName} size="M" />
        <p className="dropdown__active-option__label">{activeOption.label}</p>
      </div>
      {showOptions && (
        <div className="dropdown__options">
          {items.map(renderDropdownItems)}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
