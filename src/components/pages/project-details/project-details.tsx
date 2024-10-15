"use client";
import React, { FC } from "react";
import Badge, { BadgeProps } from "@/components/molecules/badge/badge";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";
import Button from "@/components/molecules/button/button";
import MainProjects from "@/components/blocks/main-projects/main-projects";
import Image from "next/image";
import Icon from "@/components/atoms/icon/icon";
import TechnologyIconText, {
  TechnologyIconTextProps,
} from "@/components/molecules/technology-icon/technology-icon";
import ProjectFeature, {
  ProjectFeatureProps,
} from "@/components/blocks/project-feature/project-feature";
import { redirect } from "next/navigation";
import "./project-details.scss";

interface ProjectDetailsProps {
  title: string;
  description: string;
  badges: BadgeProps[];
  nbPeople: number;
  time: string;
  imageUrl: string;
  imageAlt: string;
  technologies: { icon: string; label: string }[];
  deployedUrl?: string;
  repoUrl?: string;
  features: ProjectFeatureProps[];
}

const ProjectDetails: FC<ProjectDetailsProps> = ({
  title,
  description,
  badges,
  nbPeople,
  time,
  imageUrl,
  imageAlt,
  technologies,
  deployedUrl,
  repoUrl,
  features,
}) => {
  const renderBadges = (badge: BadgeProps) => {
    return <Badge key={badge.label} {...badge} />;
  };
  const renderTechnologies = (tech: TechnologyIconTextProps) => {
    return <TechnologyIconText key={tech.label} {...tech} />;
  };
  const renderProjectFeature = (feature: ProjectFeatureProps) => {
    return (
      <>
        <div className="project-details__separator" />
        <ProjectFeature key={feature.title} {...feature} />
      </>
    );
  };
  return (
    <div className="project-details">
      <PortfolioPage>
        <Button
          className="project-details__return-btn"
          theme="primary"
          isGhost
          label="Retour"
          size="XL"
          shape="rounded"
          leftIcon="chevron-left"
        />
        <div className="project-details__content">
          <div className="project-details__infos">
            <div className="project-details__infos__top">
              <div className="project-details__infos__text">
                <div className="project-details__infos__title-link">
                  <p className="project-details__title">{title}</p>
                  <Button
                    className="project-details__infos__link-button"
                    size="L"
                    shape="circle"
                    leftIcon="link"
                    theme="secondary"
                  />
                </div>
                <div className="project-details__separator" />
                <div className="project-details__infos__properties-desc">
                  <div className="project-details__infos__properties">
                    <div className="project-details__infos__badges-context">
                      <div className="project-details__infos__badges">
                        {badges.map(renderBadges)}
                      </div>
                      <div className="project-details__infos__context">
                        <div className="project-details__nb-persons">
                          <Icon name="trash" size="XS" />
                          <p className="project-details__context-label">
                            {nbPeople}
                          </p>
                        </div>

                        <div className="project-details__time">
                          <Icon name="time" size="XS" />
                          <p className="project-details__context-label">
                            {time}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="project-details__technologies">
                      {technologies.map(renderTechnologies)}
                    </div>
                  </div>
                  <p className="project-details__desc">{description}</p>
                </div>
              </div>
              <div className="project-details__infos__buttons">
                <Button
                  label="Projet déployé"
                  rightIcon="link"
                  theme="primary"
                  shape="rounded"
                  size="L"
                  fullWidth
                  onClick={() => deployedUrl && redirect(deployedUrl)}
                />
                <Button
                  label="Repository"
                  rightIcon="github"
                  theme="secondary"
                  shape="rounded"
                  size="L"
                  fullWidth
                  onClick={() => repoUrl && redirect(repoUrl)}
                />
              </div>
            </div>
            <div className="project-details__main-image-wrapper">
              <Image
                className="project-details__main-image"
                src={imageUrl}
                alt={imageAlt}
                fill
              />
            </div>
          </div>
          {features.map(renderProjectFeature)}
        </div>
        <div className="project-details__separator" />
        <MainProjects title="Autres projets" />
      </PortfolioPage>
    </div>
  );
};

export default ProjectDetails;
export type { ProjectDetailsProps };
