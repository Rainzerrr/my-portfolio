import data from "@/app/data";
import ProjectDetails from "@/components/pages/project-details/project-details";
import { redirect } from "next/navigation";

const page = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;

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
