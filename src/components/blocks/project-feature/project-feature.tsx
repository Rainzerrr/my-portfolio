import classNames from "classnames";
import Image from "next/image";
import React, { FC } from "react";
import "./project-feature.scss";
import { useTranslations } from "next-intl";

interface ProjectFeatureProps {
  title: string;
  desc: string;
  imageUrl: string;
  imageAlt: string;
  variant?: "default" | "left" | "right";
}

const ProjectFeature: FC<ProjectFeatureProps> = ({
  title,
  desc,
  imageUrl,
  imageAlt,
  variant = "default",
}) => {
  const t = useTranslations();
  return (
    <div
      className={classNames("project-feature", `project-feature--${variant}`)}
    >
      <div className="project-feature__title-desc">
        <p className="project-feature__title">{t(title)}</p>
        <p className="project-feature__desc">{t(desc)}</p>
      </div>
      <div className="project-feature__image-wrapper">
        <Image
          className="project-feature__image"
          src={imageUrl}
          alt={imageAlt}
          fill
        />
      </div>
    </div>
  );
};

export default ProjectFeature;
export type { ProjectFeatureProps };
