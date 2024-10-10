import classNames from "classnames";
import React, { FC } from "react";

interface BackgroundLineCodeProps {
  className?: string;
  label: string;
  color: string;
}

const BackgroundLineCode: FC<BackgroundLineCodeProps> = ({
  className,
  label,
  color,
}) => {
  return (
    <p className={classNames("line-code", `line-code-${color}`, className)}>
      {label}
    </p>
  );
};

export default BackgroundLineCode;
