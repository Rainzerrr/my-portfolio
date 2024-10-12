import React, { ReactNode } from "react";
import "./portfolio-page.scss";

interface PortfolioPageProps {
  children: ReactNode;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ children }) => {
  return (
    <div className="page-wrapper">
      <div className="page-wrapper__content">{children}</div>
    </div>
  );
};

export default PortfolioPage;
