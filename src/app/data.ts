import { ProjectDetailsProps } from "@/components/pages/project-details/project-details";

interface DataProps {
  projectDetails: ProjectDetailsProps[];
}
const data: DataProps = {
  projectDetails: [
    {
      title: "Fruit&Go",
      description:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
      badges: [
        { label: "Frontend", variant: "tertiary", color: "green" },
        { label: "Backend", variant: "tertiary", color: "purple" },
      ],
      imageUrl: "/image_fruitandgo.png",
      imageAlt: "Image de présentation du projet fruit and go",
      nbPeople: 0,
      time: "2 mois",
      technologies: [
        { icon: "react", label: "React.js" },
        { icon: "next-js", label: "Next.js" },
        { icon: "css_3", label: "CSS 3" },
      ],
      features: [
        {
          title: "Introduction.",
          desc: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
          imageUrl: "/image_fruitandgo.png",
          imageAlt: "Image de présentation du projet fruit and go",
          variant: "default",
        },
        {
          title: "Introduction.",
          desc: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
          imageUrl: "/image_fruitandgo.png",
          imageAlt: "Image de présentation du projet fruit and go",
          variant: "left",
        },
        {
          title: "Introduction.",
          desc: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
          imageUrl: "/image_fruitandgo.png",
          imageAlt: "Image de présentation du projet fruit and go",
          variant: "right",
        },
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
      features: [],
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
      features: [],
    },
  ],
};

export default data;
