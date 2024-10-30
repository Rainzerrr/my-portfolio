import classNames from "classnames";
import "./separator.scss";
import { FC } from "react";

interface SeparatorProps {
  className?: string;
  width?: number;
}

const Separator: FC<SeparatorProps> = ({ className, width }) => {
  return (
    <div
      style={{ width: width }}
      className={classNames(
        "separator",
        !width && "separator--full-width",
        className
      )}
    />
  );
};

export default Separator;
