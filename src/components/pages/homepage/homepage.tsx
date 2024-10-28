"use client";
import HomepageIntro from "@/components/blocks/homepage-intro/homepage-intro";
import MainProjects from "@/components/blocks/main-projects/main-projects";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";
import "./homepage.scss";

const Homepage = () => {
  return (
    <PortfolioPage>
      <div className="homepage">
        <HomepageIntro />
        <MainProjects />
      </div>
    </PortfolioPage>
  );
};

export default Homepage;
