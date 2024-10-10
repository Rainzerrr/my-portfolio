"use client";
import ProjectCard from "@/components/organisms/project-card/project-card";
import "./homepage.scss";
import ProjectFeature from "@/components/blocks/project-feature/project-feature";
import HomepageIntro from "@/components/blocks/homepage-intro/homepage-intro";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomepageIntro />
      <ProjectFeature />
    </div>
  );
};

export default Homepage;
