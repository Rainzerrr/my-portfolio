import Button from "@/components/molecules/button/button";
import React from "react";
import Image from "next/image";
import "./homepage-intro.scss";

const HomepageIntro = () => {
  return (
    <div className="homepage__intro">
      <div className="homepage__intro__text">
        <div className="homepage__intro__title">
          <p>Rayan, Développeur</p>
          <div className="homepage__intro__title-highlight">
            <p>Full-stack</p>
            <div className="homepage__intro__title-underline">
              <Image
                src="/underline.svg"
                alt="title underline"
                fill
                quality={100}
              />
            </div>
          </div>
        </div>
        <p className="homepage__intro__desc">
          J’aime contribuer à la création de solutions technologiques durables
          et évolutives qui façonnent le monde de demain.
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
            label="Github"
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
