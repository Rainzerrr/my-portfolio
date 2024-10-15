"use client";
import ProjectFeature from "@/components/blocks/project-featured/project-featured";
import HomepageIntro from "@/components/blocks/homepage-intro/homepage-intro";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";
import "./homepage.scss";

const Homepage = () => {
  return (
    <PortfolioPage>
      <div className="homepage">
        <HomepageIntro />
        <ProjectFeature title="Derniers projets" />
      </div>
    </PortfolioPage>
  );
};

export default Homepage;
