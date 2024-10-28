"use client";
import Icon from "@/components/atoms/icon/icon";
import useWidth from "@/hooks/useWidth";
import classNames from "classnames";
import { FC } from "react";
import "./snackbar.scss";

interface SnackbarProps {
  text: string;
  isSnackbarOpen: boolean;
}

const Snackbar: FC<SnackbarProps> = ({ text, isSnackbarOpen }) => {
  const { isOnDesktop } = useWidth();

  return (
    <div
      className={classNames(
        "snackbar-wrapper",
        isSnackbarOpen && "snackbar--open"
      )}
    >
      <div className="snackbar">
        <p className="snackbar__text">{text}</p>
        <Icon
          className="snackbar__icon"
          name="check"
          size={isOnDesktop ? "M" : "S"}
        />
      </div>
    </div>
  );
};

export default Snackbar;
