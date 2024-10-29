import { ProjectFeatureProps } from "@/components/blocks/project-feature/project-feature";
import { BadgeProps } from "@/components/molecules/badge/badge";

export interface ProjectProps {
  title: string;
  details: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  badges: BadgeProps[];
  nbPeople: number;
  time: string;
  technologies: { icon: string; label: string }[];
  deployedUrl?: string;
  repoUrl?: string;
  variant: "emphasized" | "default";
  features: ProjectFeatureProps[];
}
interface DataProps {
  projectDetails: ProjectProps[];
}
const data: DataProps = {
  projectDetails: [
    {
      title: "Fruit&Go",
      details: "projects.fruit&go.details",
      description: "projects.fruit&go.description",
      badges: [
        { label: "Frontend", variant: "tertiary", color: "green" },
        { label: "Backend", variant: "tertiary", color: "purple" },
      ],
      imageUrl: "/image_fruitandgo.png",
      imageAlt: "Image de présentation du projet fruit and go",
      nbPeople: 1,
      time: "projects.fruit&go.time",
      technologies: [
        { icon: "next-js", label: "Next.js" },
        { icon: "css_3", label: "SCSS" },
      ],
      variant: "emphasized",
      repoUrl: "https://github.com/Rainzerrr/fruit-and-go-demo",
      deployedUrl: "https://fruit-and-go.vercel.app/",
      features: [
        {
          title: "projects.fruit&go.feature1.title",
          desc: "projects.fruit&go.feature1.desc",
          imageUrl: "/fruit&go/intro-image.png",
          imageAlt: "projects.fruit&go.feature1.imageAlt",
          variant: "default",
        },
        {
          title: "projects.fruit&go.feature2.title",
          desc: "projects.fruit&go.feature2.desc",
          imageUrl: "/fruit&go/feature-panier.png",
          imageAlt: "projects.fruit&go.feature2.imageAlt",
          variant: "left",
        },
        {
          title: "projects.fruit&go.feature3.title",
          desc: "projects.fruit&go.feature3.desc",
          imageUrl: "/fruit&go/feature-filters.png",
          imageAlt: "projects.fruit&go.feature3.imageAlt",
          variant: "right",
        },
        {
          title: "projects.fruit&go.feature4.title",
          desc: "projects.fruit&go.feature4.desc",
          imageUrl: "/fruit&go/feature-stripe.png",
          imageAlt: "projects.fruit&go.feature4.imageAlt",
          variant: "left",
        },
        {
          title: "projects.fruit&go.feature5.title",
          desc: "projects.fruit&go.feature5.desc",
          imageUrl: "/fruit&go/feature-admin.png",
          imageAlt: "projects.fruit&go.feature5.imageAlt",
          variant: "right",
        },
        {
          title: "projects.fruit&go.feature6.title",
          desc: "projects.fruit&go.feature6.desc",
          imageUrl: "/fruit&go/feature-strapi.png",
          imageAlt: "projects.fruit&go.feature6.imageAlt",
          variant: "left",
        },
      ],
    },
    {
      title: "Fountain Finder",
      details: "projects.fountain_finder.details",
      description: "projects.fountain_finder.description",
      badges: [
        { label: "Frontend", variant: "tertiary", color: "green" },
        { label: "Backend", variant: "tertiary", color: "purple" },
        { label: "UX/UI Design", variant: "tertiary", color: "blue" },
      ],
      imageUrl: "/fountain_finder_background_image.png",
      imageAlt: "Image de présentation du projet Fountain Finder",
      nbPeople: 1,
      time: "projects.fountain_finder.time",
      technologies: [
        { icon: "react", label: "React.js" },
        { icon: "css_3", label: "SCSS" },
      ],
      repoUrl: "https://github.com/Rainzerrr/fountain-finder",
      deployedUrl: "https://fountain-finder.vercel.app/",
      variant: "default",
      features: [
        {
          title: "projects.fountain_finder.feature1.title",
          desc: "projects.fountain_finder.feature1.desc",
          imageUrl: "/fountain_finder/intro-image.jpg",
          imageAlt: "projects.fountain_finder.feature1.imageAlt",
          variant: "default",
        },
        {
          title: "projects.fountain_finder.feature2.title",
          desc: "projects.fountain_finder.feature2.desc",
          imageUrl: "/fountain_finder/feature-map.png",
          imageAlt: "projects.fountain_finder.feature2.imageAlt",
          variant: "left",
        },
        {
          title: "projects.fountain_finder.feature3.title",
          desc: "projects.fountain_finder.feature3.desc",
          imageUrl: "/fountain_finder/feature-fountains.png",
          imageAlt: "projects.fountain_finder.feature3.imageAlt",
          variant: "right",
        },
        {
          title: "projects.fountain_finder.feature4.title",
          desc: "projects.fountain_finder.feature4.desc",
          imageUrl: "/fountain_finder/feature-clusters.png",
          imageAlt: "projects.fountain_finder.feature4.imageAlt",
          variant: "left",
        },
        {
          title: "projects.fountain_finder.feature5.title",
          desc: "projects.fountain_finder.feature5.desc",
          imageUrl: "/fountain_finder/feature-markers.png",
          imageAlt: "projects.fountain_finder.feature5.imageAlt",
          variant: "right",
        },
        {
          title: "projects.fountain_finder.feature6.title",
          desc: "projects.fountain_finder.feature6.desc",
          imageUrl: "/fountain_finder/feature-filters.png",
          imageAlt: "projects.fountain_finder.feature6.imageAlt",
          variant: "left",
        },
      ],
    },
    {
      title: "VIBE.",
      details: "projects.vibe.details",
      description: "projects.vibe.description",
      badges: [
        { label: "Frontend", variant: "tertiary", color: "green" },
        { label: "UX/UI Design", variant: "tertiary", color: "blue" },
      ],
      imageUrl: "/vibe_background_image.png",
      imageAlt: "projects.vibe.imageAlt",
      variant: "default",
      nbPeople: 6,
      time: "projects.vibe.time",
      technologies: [
        { icon: "next-js", label: "Next.js" },
        { icon: "css_3", label: "SCSS" },
      ],
      features: [
        {
          title: "projects.vibe.feature1.title",
          desc: "projects.vibe.feature1.desc",
          imageUrl: "/vibe_background_image.png",
          imageAlt: "projects.vibe.feature1.imageAlt",
          variant: "default",
        },
      ],
    },
  ],
};

export default data;
