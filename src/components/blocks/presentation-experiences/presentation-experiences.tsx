import { FC, Fragment } from "react";
import TimelineItem, {
  TimelineItemProps,
} from "@/components/organisms/timeline-item/timeline-item";
import Separator from "@/components/atoms/separator/separator";
import TimelineSubitem, {
  TimelineSubitemProps,
} from "@/components/organisms/timeline-subitem/timeline-subitem";
import "./presentation-experiences.scss";
import List from "@/components/organisms/list/list";

interface ExperienceProps {
  timelineItem: TimelineItemProps;
  timelineItemList?: string[];
  timelineSubitems?: TimelineSubitemProps[];
}

interface PresentationExperiencesProps {
  experiences: ExperienceProps[];
}

const PresentationExperiences: FC<PresentationExperiencesProps> = ({
  experiences,
}) => {
  const renderTimelineSubitems = (
    item: TimelineSubitemProps,
    index: number,
    timelineSubitems?: TimelineSubitemProps[]
  ) => {
    return (
      <Fragment key={item.title}>
        <TimelineSubitem {...item} />
        {index < (timelineSubitems?.length ?? 0) - 1 && <Separator />}
      </Fragment>
    );
  };
  return (
    <div className="presentation-experiences">
      {experiences.map((experience, index) => (
        <Fragment key={experience.timelineItem.title}>
          <div className="presentation-experience">
            <TimelineItem {...experience.timelineItem} />
            {experience.timelineItemList && (
              <div className="presentation-experience_item__content">
                <List items={experience.timelineItemList} />
              </div>
            )}
            {experience.timelineSubitems && (
              <div className="presentation-experiences__subitems">
                {experience.timelineSubitems.map((item, index) =>
                  renderTimelineSubitems(
                    item,
                    index,
                    experience.timelineSubitems
                  )
                )}
              </div>
            )}
          </div>
          {index < experiences.length - 1 && <Separator />}
        </Fragment>
      ))}
    </div>
  );
};

export default PresentationExperiences;
export type { PresentationExperiencesProps };
