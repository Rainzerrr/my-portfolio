import { ProjectDetailsProps } from "@/components/pages/project-details/project-details";

interface DataProps {
  projectDetails: ProjectDetailsProps[];
}
const data: DataProps = {
  projectDetails: [
    {
      title: "Fruit&Go",
      description: "E-commerce",
      badges: [
        { label: "Frontend", variant: "tertiary", color: "green" },
        { label: "Backend", variant: "tertiary", color: "purple" },
      ],
      imageUrl: "/image_fruitandgo.png",
      imageAlt: "Image de présentation du projet fruit and go",
      nbPeople: 0,
      time: "2 mois",
      technologies: [
        { icon: "linkedin", label: "React.js" },
        { icon: "linkedin", label: "Next.js" },
        { icon: "linkedin", label: "SCSS" },
      ],
    },
    {
      title: "Fountain Finder",
      description: "Carte des fontaines de Paris",
      badges: [
        { label: "Frontend", variant: "tertiary", color: "green" },
        { label: "Backend", variant: "tertiary", color: "purple" },
        { label: "UX/UI Design", variant: "tertiary", color: "blue" },
      ],
      imageUrl: "/fountain_finder_background_image.png",
      imageAlt: "Image de présentation du projet fountain finder",
      nbPeople: 0,
      time: "2 mois",
      technologies: [
        { icon: "linkedin", label: "React.js" },
        { icon: "linkedin", label: "Next.js" },
        { icon: "linkedin", label: "SCSS" },
      ],
    },
    {
      title: "VIBE.",
      description: "Diffusion de vidéo en direct",
      badges: [
        { label: "Frontend", variant: "tertiary", color: "green" },
        { label: "UX/UI Design", variant: "tertiary", color: "blue" },
      ],
      imageUrl: "/vibe_background_image.png",
      imageAlt: "Image de présentation du projet vibe",
      nbPeople: 0,
      time: "2 mois",
      technologies: [
        { icon: "linkedin", label: "React.js" },
        { icon: "linkedin", label: "Next.js" },
        { icon: "linkedin", label: "SCSS" },
      ],
    },
  ],
};

export default data;
