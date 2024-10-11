"use client";
import ProjectFeature from "@/components/blocks/project-feature/project-feature";
import HomepageIntro from "@/components/blocks/homepage-intro/homepage-intro";
import HomepageIntroBackground from "@/components/blocks/homepage-intro-background/homepage-intro-background";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomepageIntroBackground />
      <HomepageIntro />
      <ProjectFeature />
    </div>
  );
};

export default Homepage;
