import React, { FC } from "react";
import List from "../list/list";
import { useTranslations } from "next-intl";
import Badge from "@/components/molecules/badge/badge";
import { ChipColors } from "@/components/atoms/chip/chip";
import Icon from "@/components/atoms/icon/icon";
import "./timeline-item.scss";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  badgeColor: ChipColors;
  icon: string;
  isIconImage?: boolean;
  date: string;
  description?: string;
  listItems?: string[];
}
const TimelineItem: FC<TimelineItemProps> = ({
  title,
  subtitle,
  badgeColor,
  icon,
  isIconImage,
  date,
  description,
  listItems,
}) => {
  const t = useTranslations();
  return (
    <div className="timeline-item">
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
      <div className="timeline-item__infos">
        <div className="timeline-item__header">
          <div className="timeline-item__header__title-subtitle">
            <p className="timeline-item__header__title">{t(title)}</p>
            <Badge color={badgeColor} label={t(subtitle)} variant="tertiary" />
          </div>
          <p className="timeline-item__header__date">{t(date)}</p>
        </div>
        {(listItems || description) && (
          <div className="timeline-item__content">
            {listItems && <List items={listItems} />}
            {description && (
              <p className="timeline-item__content__description">
                {t(description)}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
export type { TimelineItemProps };
