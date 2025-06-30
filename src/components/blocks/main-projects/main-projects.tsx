"use client";
import ProjectCard from "@/components/organisms/project-card/project-card";
import ProjectDetailsModal from "@/components/pages/project-details-modal/project-details-modal";
import useProjectModal from "@/hooks/useProjectModal";
import { useTranslations } from "next-intl";
import data from "@/app/[locale]/data";
import "./main-projects.scss";

const MainProjects = () => {
  const {
    currentProject,
    isProjectDetailsModalOpen,
    setIsProjectDetailsModalOpen,
    openProjectDetails,
    findProjectDetailsData,
  } = useProjectModal();
  const t = useTranslations();
  return (
    <div className="homepage__featured-projects">
      <p className="homepage__featured-projects__title">
        {t("homepage.projects-title")}
      </p>
      <div className="homepage__featured-projects__list">
        <ProjectCard
          {...data.projectDetails[2]}
          button={{
            shape: "rounded",
            size: "M",
            theme: "secondary",
            rightIcon: "arrow-right",
            label: "projects.card.redirect-button",
          }}
          redirectUrl={`/project-details/${data.projectDetails[2].title}`}
          variant="emphasized"
          onClick={() => {
            const projectData = findProjectDetailsData(
              data.projectDetails[2].title
            );
            if (projectData !== undefined) {
              openProjectDetails(projectData);
            }
          }}
        />
        <ProjectCard
          {...data.projectDetails[3]}
          redirectUrl={`/project-details/${data.projectDetails[3].title}`}
          button={{
            shape: "circle",
            size: "M",
            theme: "secondary",

            rightIcon: "arrow-right",
          }}
          variant="default"
          onClick={() => {
            const projectData = findProjectDetailsData(
              data.projectDetails[3].title
            );
            if (projectData !== undefined) {
              openProjectDetails(projectData);
            }
          }}
        />

        <ProjectCard
          {...data.projectDetails[4]}
          redirectUrl={`/project-details/${data.projectDetails[4].title}`}
          button={{
            shape: "circle",
            size: "M",
            theme: "secondary",
            leftIcon: "arrow-right",
          }}
          variant="default"
          onClick={() => {
            const projectData = findProjectDetailsData(
              data.projectDetails[4].title
            );
            if (projectData !== undefined) {
              openProjectDetails(projectData);
            }
          }}
        />
      </div>
      {currentProject !== null && isProjectDetailsModalOpen && (
        <ProjectDetailsModal
          {...currentProject}
          setIsModalOpen={setIsProjectDetailsModalOpen}
        />
      )}
    </div>
  );
};

export default MainProjects;
