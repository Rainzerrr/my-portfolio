import data from "@/app/data";
import ProjectDetails from "@/components/pages/project-details/project-details";

const page = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;
  return <ProjectDetails {...data.projectDetails[0]} />;
};

export default page;
