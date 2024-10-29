import React, { Fragment } from "react";
import Separator from "@/components/atoms/separator/separator";
import TimelineItem, {
  TimelineItemProps,
} from "@/components/organisms/timeline-item/timeline-item";
import "./presentation-formation.scss";

const PresentationFormation = ({
  timelineItems,
}: {
  timelineItems: TimelineItemProps[];
}) => {
  const renderTimelineItems = (item: TimelineItemProps, index: number) => {
    return (
      <Fragment key={item.title}>
        <TimelineItem key={item.title} {...item} />
        {index < timelineItems.length - 1 && <Separator />}
      </Fragment>
    );
  };
  return (
    <div className="timeline-formation">
      {timelineItems.map(renderTimelineItems)}
    </div>
  );
};

export default PresentationFormation;
