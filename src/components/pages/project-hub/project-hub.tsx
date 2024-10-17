"use client";
import React, { FC } from "react";
import ProjectCard, {
  ProjectCardProps,
} from "@/components/organisms/project-card/project-card";
// import Button from "@/components/molecules/button/button";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";
import useWidth from "@/hooks/useWidth";
import "./project-hub.scss";
import useProjectModal from "@/hooks/useProjectModal";
import ProjectDetailsModal from "../project-details-modal/project-details-modal";

interface ProjectHubProps {
  projectCards: ProjectCardProps[];
}

const ProjectHub: FC<ProjectHubProps> = ({ projectCards }) => {
  const { isOnDesktop } = useWidth();
  const {
    currentProject,
    isProjectDetailsModalOpen,
    setIsProjectDetailsModalOpen,
    openProjectDetails,
    findProjectDetailsData,
  } = useProjectModal();
  const cardOrderDisplayForDesktop = (index: number) => {
    if (Math.floor(index / 3) % 3 === 0) {
      return index;
    } else if (Math.floor(index / 3) % 3 === 1) {
      if (index % 3 === 0) {
        return index + 1;
      } else if (index % 3 === 1) {
        return index - 1;
      } else {
        return index;
      }
    } else if (Math.floor(index / 3) % 3 === 2) {
      if (index % 3 === 0) {
        return index + 2;
      } else if (index % 3 === 1) {
        return index - 1;
      } else {
        return index - 1;
      }
    }
  };
  const renderProjectCard = (projectCard: ProjectCardProps, index: number) => {
    return (
      <ProjectCard
        key={projectCard.title + projectCard.variant}
        {...projectCard}
        style={{
          order: isOnDesktop ? cardOrderDisplayForDesktop(index) : index,
        }}
        onClick={() => {
          const projectData = findProjectDetailsData(projectCard.title);
          if (projectData !== undefined) {
            openProjectDetails(projectData);
          }
        }}
      />
    );
  };

  return (
    <PortfolioPage>
      <div className="project-hub">
        {/* <Button
          label="Filtrer"
          rightIcon="arrow-right"
          shape="rounded"
          theme="secondary"
          size="L"
        /> */}
        <p className="project-hub__title">Mes réalisations</p>
        <div className="project-hub__cards">
          {projectCards.map(renderProjectCard)}
        </div>
        {currentProject !== null && isProjectDetailsModalOpen && (
          <ProjectDetailsModal
            {...currentProject}
            setIsModalOpen={setIsProjectDetailsModalOpen}
          />
        )}
      </div>
    </PortfolioPage>
  );
};
export default ProjectHub;
