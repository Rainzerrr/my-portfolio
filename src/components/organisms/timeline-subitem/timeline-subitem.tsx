import { FC } from "react";
import { useTranslations } from "next-intl";
import List from "../list/list";
import Icon from "@/components/atoms/icon/icon";
import "./timeline-subitem.scss";

interface TimelineSubitemProps {
  title: string;
  icon: string;
  isIconImage?: boolean;
  date: string;
  listItems: string[];
}

const TimelineSubitem: FC<TimelineSubitemProps> = ({
  title,
  icon,
  isIconImage,
  date,
  listItems,
}) => {
  const t = useTranslations();
  return (
    <div className="timeline-subitem">
      <Icon
        className="hide-desktop"
        name={icon}
        isIconImage={isIconImage}
        size="S"
      />
      <Icon
        className="hide-mobile"
        name={icon}
        isIconImage={isIconImage}
        size="L"
      />
      <div className="timeline-subitem__content">
        <div className="timeline-subitem__header">
          <p className="timeline-subitem__header__title">{t(title)}</p>
          <p className="timeline-subitem__header__date">{t(date)}</p>
        </div>
        <div className="timeline-item__content">
          <List items={listItems} />
        </div>
      </div>
    </div>
  );
};

export default TimelineSubitem;
export type { TimelineSubitemProps };
