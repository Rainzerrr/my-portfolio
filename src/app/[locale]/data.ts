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
      imageUrl: "/mockups/fruitandgo_mockup.png",
      imageAlt: "Image de présentation du projet fruit and go",
      nbPeople: 1,
      time: "projects.fruit&go.time",
      technologies: [
        { icon: "next-js", label: "Next.js" },
        { icon: "css_3", label: "SCSS" },
      ],
      variant: "emphasized",
      repoUrl: "https://github.com/Rainzerrr/fruit-and-go-demo",
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
      imageUrl: "/mockups/fountain_finder_mockup.png",
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
      imageUrl: "/mockups/vibe_mockup.png",
      imageAlt: "projects.vibe.imageAlt",
      variant: "default",
      nbPeople: 6,
      time: "projects.vibe.time",
      repoUrl: "https://github.com/Rainzerrr/vibe",
      technologies: [
        { icon: "next-js", label: "Next.js" },
        { icon: "css_3", label: "SCSS" },
      ],
      features: [
        {
          title: "projects.vibe.feature1.title",
          desc: "projects.vibe.feature1.desc",
          imageUrl: "/vibe/image-intro.png",
          imageAlt: "projects.vibe.feature1.imageAlt",
          variant: "default",
        },
        {
          title: "projects.vibe.feature2.title",
          desc: "projects.vibe.feature2.desc",
          imageUrl: "/vibe/feature-homepage.png",
          imageAlt: "projects.vibe.feature2.imageAlt",
          variant: "right",
        },
        {
          title: "projects.vibe.feature3.title",
          desc: "projects.vibe.feature3.desc",
          imageUrl: "/vibe/feature-user-profile.png",
          imageAlt: "projects.vibe.feature3.imageAlt",
          variant: "left",
        },
        {
          title: "projects.vibe.feature4.title",
          desc: "projects.vibe.feature4.desc",
          imageUrl: "/vibe/feature-dashboard.png",
          imageAlt: "projects.vibe.feature4.imageAlt",
          variant: "right",
        },
        {
          title: "projects.vibe.feature5.title",
          desc: "projects.vibe.feature5.desc",
          imageUrl: "/vibe/feature-live-page.png",
          imageAlt: "projects.vibe.feature5.imageAlt",
          variant: "left",
        },
        {
          title: "projects.vibe.feature6.title",
          desc: "projects.vibe.feature6.desc",
          imageUrl: "/vibe/feature-community.png",
          imageAlt: "projects.vibe.feature6.imageAlt",
          variant: "right",
        },
        {
          title: "projects.vibe.feature7.title",
          desc: "projects.vibe.feature7.desc",
          imageUrl: "/vibe/feature-friends-chat.png",
          imageAlt: "projects.vibe.feature7.imageAlt",
          variant: "left",
        },
      ],
    },
    {
      title: "G3D",
      details: "projects.g3d.details",
      description: "projects.g3d.description",
      badges: [{ label: "Frontend", variant: "tertiary", color: "green" }],
      imageUrl: "/mockups/g3d_mockup.png",
      imageAlt: "Image de présentation du projet fruit and go",
      nbPeople: 1,
      time: "projects.g3d.time",
      technologies: [
        { icon: "react", label: "React.js" },
        { icon: "css_3", label: "SCSS" },
      ],
      variant: "emphasized",
      repoUrl: "https://github.com/Rainzerrr/g3d-proof-of-concept",
      deployedUrl: "https://g3d-poc.vercel.app/",
      features: [
        {
          title: "projects.g3d.feature1.title",
          desc: "projects.g3d.feature1.desc",
          imageUrl: "/g3d/intro-image.png",
          imageAlt: "projects.g3d.feature1.imageAlt",
          variant: "default",
        },
        {
          title: "projects.g3d.feature2.title",
          desc: "projects.g3d.feature2.desc",
          imageUrl: "/g3d/feature-scene.png",
          imageAlt: "projects.g3d.feature2.imageAlt",
          variant: "left",
        },
        {
          title: "projects.g3d.feature3.title",
          desc: "projects.g3d.feature3.desc",
          imageUrl: "/g3d/feature-create.png",
          imageAlt: "projects.g3d.feature3.imageAlt",
          variant: "right",
        },
        {
          title: "projects.g3d.feature4.title",
          desc: "projects.g3d.feature4.desc",
          imageUrl: "/g3d/feature-select.png",
          imageAlt: "projects.g3d.feature4.imageAlt",
          variant: "left",
        },
      ],
    },
    {
      title: "Worknest",
      details: "projects.worknest.details",
      description: "projects.worknest.description",
      badges: [
        { label: "Frontend", variant: "tertiary", color: "green" },
        { label: "Backend", variant: "tertiary", color: "purple" },
        { label: "UX/UI Design", variant: "tertiary", color: "blue" },
      ],
      imageUrl: "/mockups/worknest_mockup.png",
      imageAlt: "Image de présentation du projet fruit and go",
      nbPeople: 2,
      time: "projects.worknest.time",
      technologies: [
        { icon: "next-js", label: "Next.js" },
        { icon: "css_3", label: "SCSS" },
      ],
      variant: "default",
      repoUrl: "https://github.com/Rainzerrr/worknest",
      deployedUrl: "https://worknest-map.vercel.app/",
      features: [
        {
          title: "projects.worknest.feature1.title",
          desc: "projects.worknest.feature1.desc",
          imageUrl: "/worknest/intro-image.png",
          imageAlt: "projects.worknest.feature1.imageAlt",
          variant: "default",
        },
        {
          title: "projects.worknest.feature2.title",
          desc: "projects.worknest.feature2.desc",
          imageUrl: "/worknest/feature-map-markers.png",
          imageAlt: "projects.worknest.feature2.imageAlt",
          variant: "left",
        },
        {
          title: "projects.worknest.feature3.title",
          desc: "projects.worknest.feature3.desc",
          imageUrl: "/worknest/feature-map-color.png",
          imageAlt: "projects.worknest.feature3.imageAlt",
          variant: "right",
        },
        {
          title: "projects.worknest.feature4.title",
          desc: "projects.worknest.feature4.desc",
          imageUrl: "/worknest/feature-filters.png",
          imageAlt: "projects.worknest.feature4.imageAlt",
          variant: "left",
        },
        {
          title: "projects.worknest.feature5.title",
          desc: "projects.worknest.feature5.desc",
          imageUrl: "/worknest/feature-legend.png",
          imageAlt: "projects.worknest.feature5.imageAlt",
          variant: "right",
        },
        {
          title: "projects.worknest.feature6.title",
          desc: "projects.worknest.feature6.desc",
          imageUrl: "/worknest/feature-zone-details.png",
          imageAlt: "projects.worknest.feature6.imageAlt",
          variant: "left",
        },
      ],
    },
    {
      title: "Splendor",
      details: "projects.splendor.details",
      description: "projects.splendor.description",
      badges: [
        { label: "Frontend", variant: "tertiary", color: "green" },
        { label: "UX/UI Design", variant: "tertiary", color: "blue" },
      ],
      imageUrl: "/mockups/splendor_mockup.png",
      imageAlt: "projects.splendor.imageAlt",
      nbPeople: 2,
      time: "projects.splendor.time",
      technologies: [{ icon: "java", label: "Java 23, Zen 6 " }],
      variant: "default",
      repoUrl: "https://github.com/Rainzerrr/splendor",
      deployedUrl: "",
      features: [
        {
          title: "projects.splendor.feature1.title",
          desc: "projects.splendor.feature1.desc",
          imageUrl: "/splendor/intro-image.png",
          imageAlt: "projects.splendor.feature1.imageAlt",
          variant: "default",
        },
        {
          title: "projects.splendor.feature2.title",
          desc: "projects.splendor.feature2.desc",
          imageUrl: "/splendor/feature-simplified-cli.png",
          imageAlt: "projects.splendor.feature2.imageAlt",
          variant: "left",
        },
        {
          title: "projects.splendor.feature3.title",
          desc: "projects.splendor.feature3.desc",
          imageUrl: "/splendor/feature-simplified-graphic.png",
          imageAlt: "projects.splendor.feature3.imageAlt",
          variant: "right",
        },
        {
          title: "projects.splendor.feature4.title",
          desc: "projects.splendor.feature4.desc",
          imageUrl: "/splendor/feature-complete-cli.png",
          imageAlt: "projects.splendor.feature4.imageAlt",
          variant: "left",
        },
        {
          title: "projects.splendor.feature5.title",
          desc: "projects.splendor.feature5.desc",
          imageUrl: "/splendor/feature-complete-graphic.png",
          imageAlt: "projects.splendor.feature5.imageAlt",
          variant: "right",
        },
        {
          title: "projects.splendor.feature6.title",
          desc: "projects.splendor.feature6.desc",
          imageUrl: "/splendor/feature-ranking.png",
          imageAlt: "projects.splendor.feature6.imageAlt",
          variant: "left",
        },
      ],
    },
  ],
};

export default data;
