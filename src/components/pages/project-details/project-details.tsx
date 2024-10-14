import React, { FC } from "react";

import "./project-details.scss";
import { BadgeProps } from "@/components/molecules/badge/badge";

interface ProjectDetailsProps {
  title: string;
  description: string;
  badges: BadgeProps[];
  nbPeople: number;
  time: string;
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
  return <div>project-details</div>;
};

export default ProjectDetails;
