import data from "@/app/data";
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
      console.log(project.title, params.projectId);
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
  console.log(projectId);

  const retrieveProjectDetailsProps = (projectTitle: string | undefined) => {
    return data.projectDetails.find((project) => {
      console.log(project.title, projectTitle);
      return project.title == projectTitle;
    });
  };

  const projectData = retrieveProjectDetailsProps(
    decodeURIComponent(projectId || "")
  );
  console.log(data);
  if (projectData) return <ProjectDetails {...projectData} />;
  redirect("/404");
};

export default page;
