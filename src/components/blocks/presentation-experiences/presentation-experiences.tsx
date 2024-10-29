import { FC, Fragment } from "react";
import TimelineItem, {
  TimelineItemProps,
} from "@/components/organisms/timeline-item/timeline-item";
import Separator from "@/components/atoms/separator/separator";
import TimelineSubitem, {
  TimelineSubitemProps,
} from "@/components/organisms/timeline-subitem/timeline-subitem";
import "./presentation-experiences.scss";

interface PresentationExperiencesProps {
  timelineItem: TimelineItemProps;
  timelineSubitems: TimelineSubitemProps[];
}

const PresentationExperiences: FC<PresentationExperiencesProps> = ({
  timelineItem,
  timelineSubitems,
}) => {
  const renderTimelineSubitems = (
    item: TimelineSubitemProps,
    index: number
  ) => {
    return (
      <Fragment key={item.title}>
        <TimelineSubitem {...item} />
        {index < timelineSubitems.length - 1 && <Separator />}
      </Fragment>
    );
  };
  return (
    <div className="presentation-experiences">
      <TimelineItem {...timelineItem} />
      <div className="presentation-experiences__subitems">
        {timelineSubitems.map(renderTimelineSubitems)}
      </div>
    </div>
  );
};

export default PresentationExperiences;
export type { PresentationExperiencesProps };
