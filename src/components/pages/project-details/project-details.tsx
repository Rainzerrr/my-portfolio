import React, { FC } from "react";

import "./project-details.scss";
import { BadgeProps } from "@/components/molecules/badge/badge";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";
import Button from "@/components/molecules/button/button";

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
      </PortfolioPage>
    </div>
  );
};

export default ProjectDetails;
export type { ProjectDetailsProps };
