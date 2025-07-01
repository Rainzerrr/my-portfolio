import ProjectHub from "@/components/pages/project-hub/project-hub";
import { Metadata } from "next";
import React from "react";
import data from "../data";

export const metadata: Metadata = {
  title: "Mes projets - Mon E-portfolio",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `https://rayan-ainouche.dev/projects`,
  },
};

const page = () => {
  return <ProjectHub projectCards={[...data.projectDetails]} />;
};

export default page;
