import data from "@/app/[locale]/data";
import ProjectDetails, {
  ProjectDetailsProps,
} from "@/components/pages/project-details/project-details";

import { redirect } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: { projectId: string };
}) => {
  const projectData: ProjectDetailsProps | undefined = data.projectDetails.find(
    (project) => {
      return project.title == decodeURIComponent(params.projectId);
    }
  );
  if (!projectData) redirect("/404");
  return {
    title: `${projectData.title} - Mon E-portfolio`,
    description: projectData.description,
  };
};

const page = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;

  const retrieveProjectDetailsProps = (projectTitle: string | undefined) => {
    return data.projectDetails.find((project) => {
      return project.title == projectTitle;
    });
  };

  const projectData = retrieveProjectDetailsProps(
    decodeURIComponent(projectId || "")
  );
  if (projectData) return <ProjectDetails {...projectData} />;
  redirect("/404");
};

export default page;
