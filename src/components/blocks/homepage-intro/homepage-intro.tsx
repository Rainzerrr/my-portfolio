"use client";
import Button from "@/components/molecules/button/button";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./homepage-intro.scss";

const HomepageIntro = () => {
  const { push } = useRouter();
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
          label="Mes projets"
          rightIcon="arrow-right"
          shape="rounded"
          size="XL"
          onClick={() => push("/projects")}
        />
        <div className="homepage__intro__buttons-secondary">
          <Button
            theme="secondary"
            label="LinkedIn"
            rightIcon="linkedin"
            shape="rounded"
            size="XL"
            onClick={() => push("https://www.linkedin.com/in/rayanainouche/")}
          />
          <Button
            theme="secondary"
            label="Github"
            rightIcon="github"
            shape="rounded"
            size="XL"
            onClick={() => push("https://github.com/Rainzerrr")}
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageIntro;
