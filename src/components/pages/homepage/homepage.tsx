"use client";
import ProjectCard from "@/components/organisms/project-card/project-card";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__featured-projects">
        <p className="homepage__featured-projects__title">Derniers projets</p>
        <div className="homepage__featured-projects__list">
          <ProjectCard
            title="Fruit&Go"
            details="E-commerce"
            badges={[
              { label: "Frontend", variant: "tertiary", color: "green" },
              { label: "Backend", variant: "tertiary", color: "purple" },
            ]}
            imageUrl="/image_fruitandgo.png"
            imageAlt="Image de présentation du projet fruit and go"
            redirectUrl="www.youtube.com"
            button={{
              shape: "rounded",
              size: "M",
              theme: "secondary",
              rightIcon: "arrow-right",
              label: "Voir le projet",
            }}
            variant="emphasized"
          />
          <ProjectCard
            title="Fountain Finder"
            details="Carte des fontaines de Paris"
            badges={[
              { label: "Frontend", variant: "tertiary", color: "green" },
              { label: "Backend", variant: "tertiary", color: "purple" },
              { label: "UX/UI Design", variant: "tertiary", color: "blue" },
            ]}
            imageUrl="/fountain_finder_background_image.png"
            imageAlt="Image de présentation du projet fruit and go"
            redirectUrl="www.youtube.com"
            button={{
              shape: "rounded",
              size: "M",
              theme: "secondary",

              rightIcon: "arrow-right",
            }}
            variant="default"
          />

          <ProjectCard
            title="VIBE."
            details="Diffusion de vidéo en direct"
            badges={[
              { label: "Frontend", variant: "tertiary", color: "green" },
              { label: "UX/UI Design", variant: "tertiary", color: "blue" },
            ]}
            imageUrl="/vibe_background_image.png"
            imageAlt="Image de présentation du projet fruit and go"
            redirectUrl="www.youtube.com"
            button={{
              shape: "rounded",
              size: "M",
              theme: "secondary",
              leftIcon: "arrow-right",
            }}
            variant="default"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
