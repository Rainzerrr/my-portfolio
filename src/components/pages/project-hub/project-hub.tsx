"use client";
import React, { FC } from "react";
import ProjectCard from "@/components/organisms/project-card/project-card";
// import Button from "@/components/molecules/button/button";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";
import useWidth from "@/hooks/useWidth";
import useProjectModal from "@/hooks/useProjectModal";
import ProjectDetailsModal from "../project-details-modal/project-details-modal";
import { useTranslations } from "next-intl";
import { ProjectProps } from "@/app/[locale]/data";
import "./project-hub.scss";

interface ProjectHubProps {
  projectCards: ProjectProps[];
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
  const t = useTranslations();
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
    return 0;
  };
  const renderProjectCard = (projectCard: ProjectProps, index: number) => {
    const cardIndex = cardOrderDisplayForDesktop(index);
    const order = isOnDesktop ? cardIndex : index;
    return (
      <ProjectCard
        key={projectCard.title + projectCard.variant}
        {...projectCard}
        redirectUrl={`/project-details/${projectCard.title}`}
        style={{
          order: order,
          animationDelay: `${0.4 * order}s`,
        }}
        button={{
          shape: projectCard.variant === "emphasized" ? "rounded" : "circle",
          size: "M",
          theme: "secondary",
          rightIcon: "arrow-right",
          label:
            projectCard.variant === "emphasized"
              ? "projects.card.redirect-button"
              : undefined,
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
        <p className="project-hub__title">{t("hub-projects.title")}</p>
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
