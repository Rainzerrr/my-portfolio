"use client";
import ProjectCard from "@/components/organisms/project-card/project-card";
import React, { FC } from "react";
import ProjectDetailsModal from "@/components/pages/project-details-modal/project-details-modal";
import useProjectModal from "@/hooks/useProjectModal";
import "./main-projects.scss";

interface MainProjectsProps {
  title: string;
}

const MainProjects: FC<MainProjectsProps> = ({ title }) => {
  const {
    currentProject,
    isProjectDetailsModalOpen,
    setIsProjectDetailsModalOpen,
    openProjectDetails,
    findProjectDetailsData,
  } = useProjectModal();

  return (
    <div className="homepage__featured-projects">
      <p className="homepage__featured-projects__title">{title}</p>
      <div className="homepage__featured-projects__list">
        <ProjectCard
          title="Fruit&Go"
          details="E-commerce"
          badges={[
            { label: "Frontend", variant: "tertiary", color: "green" },
            { label: "Backend", variant: "tertiary", color: "purple" },
          ]}
          imageUrl="/image_fruitandgo.png"
          imageAlt="Image de présentation du projet fruit and go"
          redirectUrl="/project-details/Fruit&Go"
          button={{
            shape: "rounded",
            size: "M",
            theme: "secondary",
            rightIcon: "arrow-right",
            label: "Voir le projet",
          }}
          variant="emphasized"
          onClick={() => {
            const projectData = findProjectDetailsData("Fruit&Go");
            if (projectData !== undefined) {
              openProjectDetails(projectData);
            }
          }}
        />
        <ProjectCard
          title="Fountain Finder"
          details="Carte des fontaines de Paris"
          badges={[
            { label: "Frontend", variant: "tertiary", color: "green" },
            { label: "Backend", variant: "tertiary", color: "purple" },
            { label: "UX/UI Design", variant: "tertiary", color: "blue" },
          ]}
          imageUrl="/fountain_finder_background_image.png"
          imageAlt="Image de présentation du projet fruit and go"
          redirectUrl="www.youtube.com"
          button={{
            shape: "circle",
            size: "M",
            theme: "secondary",

            rightIcon: "arrow-right",
          }}
          variant="default"
          onClick={() => {
            const projectData = findProjectDetailsData("Fountain Finder");
            if (projectData !== undefined) {
              openProjectDetails(projectData);
            }
          }}
        />

        <ProjectCard
          title="VIBE."
          details="Diffusion de vidéo en direct"
          badges={[
            { label: "Frontend", variant: "tertiary", color: "green" },
            { label: "UX/UI Design", variant: "tertiary", color: "blue" },
          ]}
          imageUrl="/vibe_background_image.png"
          imageAlt="Image de présentation du projet fruit and go"
          redirectUrl="www.youtube.com"
          button={{
            shape: "circle",
            size: "M",
            theme: "secondary",
            leftIcon: "arrow-right",
          }}
          variant="default"
          onClick={() => {
            const projectData = findProjectDetailsData("VIBE.");
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
