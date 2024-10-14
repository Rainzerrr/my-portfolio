import React, { FC } from "react";

import "./project-hub.scss";
import ProjectCard, {
  ProjectCardProps,
} from "@/components/organisms/project-card/project-card";
import Button from "@/components/molecules/button/button";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";

interface ProjectHubProps {
  projectCards: ProjectCardProps[];
}

const ProjectHub: FC<ProjectHubProps> = ({ projectCards }) => {
  const renderProjectCard = (projectCard: ProjectCardProps, index: number) => (
    <ProjectCard
      key={projectCard.title + projectCard.variant}
      {...projectCard}
      className={`order-${(index % 3) + 1}`}
    />
  );
  return (
    <PortfolioPage>
      <div className="project-hub">
        <Button
          label="Filtrer"
          rightIcon="arrow-right"
          shape="rounded"
          theme="secondary"
          size="L"
        />
        <div className="project-hub__cards">
          {projectCards.map(renderProjectCard)}
        </div>
      </div>
    </PortfolioPage>
  );
};
export default ProjectHub;
