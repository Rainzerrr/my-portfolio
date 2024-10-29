import classNames from "classnames";
import "./separator.scss";

const Separator = ({ className }: { className?: string }) => {
  return <div className={classNames("separator", className)} />;
};

export default Separator;
