import Button from "@/components/molecules/button/button";
import React from "react";
import "./homepage-intro.scss";

const HomepageIntro = () => {
  return (
    <div className="homepage__intro">
      <div className="homepage__intro__text">
        <div className="homepage__intro__title">
          <p>Rayan,</p>
          <p>Développeur Full Stack</p>
        </div>
        <p className="homepage__intro__desc">
          Je suis ravi de réaliser des interfaces modernes et complexes pour
          répondre aux besoin des clients !
        </p>
      </div>
      <div className="homepage__intro__buttons">
        <Button
          theme="primary"
          label="Voir mes projets"
          rightIcon="arrow-right"
          shape="rounded"
          size="L"
        />
        <div className="homepage__intro__buttons-secondary">
          <Button
            theme="secondary"
            label="LinkedIn"
            rightIcon="linkedin"
            shape="rounded"
            size="L"
          />
          <Button
            theme="secondary"
            label="GitHub"
            rightIcon="github"
            shape="rounded"
            size="L"
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageIntro;
