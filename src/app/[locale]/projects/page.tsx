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
    canonical: `https://mon-eportfolio.vercel.app/projects`,
  },
};

const page = () => {
  return <ProjectHub projectCards={[...data.projectDetails.slice(0, 3)]} />;
};

export default page;