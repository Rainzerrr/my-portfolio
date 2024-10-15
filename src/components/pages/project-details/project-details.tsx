import React, { FC } from "react";
import { BadgeProps } from "@/components/molecules/badge/badge";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";
import Button from "@/components/molecules/button/button";
import ProjectFeatured from "@/components/blocks/project-featured/project-featured";
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
}

const ProjectDetails: FC<ProjectDetailsProps> = ({
  title,
  description,
  badges,
  nbPeople,
  time,
  technologies,
  deployedUrl,
  repoUrl,
}) => {
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
          leftIcon="arrow-right"
        />
        <div className="project-details__content">
          <div className=""></div>
          <div />
          <ProjectFeatured title="Autres projets" />
        </div>
      </PortfolioPage>
    </div>
  );
};

export default ProjectDetails;
export type { ProjectDetailsProps };
