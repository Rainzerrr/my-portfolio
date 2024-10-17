"use client";
import data from "@/app/data";
import { ProjectDetailsProps } from "@/components/pages/project-details/project-details";
import { useState } from "react";

const useProjectModal = () => {
  const [currentProject, setCurrentProject] =
    useState<ProjectDetailsProps | null>(null);
  const [isProjectDetailsModalOpen, setIsProjectDetailsModalOpen] =
    useState(false);

  const openProjectDetails = (data: ProjectDetailsProps) => {
    setCurrentProject(data);
    setIsProjectDetailsModalOpen(true);
  };

  const findProjectDetailsData = (projectTitle: string) => {
    return data.projectDetails.find((project) => {
      return project.title == projectTitle;
    });
  };

  return {
    currentProject,
    setCurrentProject,
    isProjectDetailsModalOpen,
    setIsProjectDetailsModalOpen,
    openProjectDetails,
    findProjectDetailsData,
  };
};

export default useProjectModal;
