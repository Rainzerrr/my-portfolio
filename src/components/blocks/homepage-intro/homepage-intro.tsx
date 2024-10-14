"use client";
import Button from "@/components/molecules/button/button";
import React from "react";
import { useRouter } from "next/navigation";
import useWidth from "@/hooks/useWidth";

import "./homepage-intro.scss";

const HomepageIntro = () => {
  const { push } = useRouter();
  const { width } = useWidth();
  return (
    <div className="homepage__intro">
      <div className="homepage__intro__text">
        <div className="homepage__intro__title">
          <p>Rayan, développeur</p>
          <div className="homepage__intro__title-highlight">
            <p>Full-stack</p>
            <svg
              className="homepage__intro__title-underline"
              xmlns="http://www.w3.org/2000/svg"
              width="126"
              height="4"
              viewBox="0 0 126 4"
              fill="none"
            >
              <path
                d="M1 3C47.9831 -0.622193 103.243 1.49075 125 3"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
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
          size={width >= 1024 ? "XL" : "L"}
          onClick={() => push("/projects")}
        />
        <div className="homepage__intro__buttons-secondary">
          <Button
            theme="secondary"
            label="LinkedIn"
            rightIcon="linkedin"
            shape="rounded"
            size={width >= 1024 ? "XL" : "L"}
            onClick={() => push("https://www.linkedin.com/in/rayanainouche/")}
          />
          <Button
            theme="secondary"
            label="Github"
            rightIcon="github"
            shape="rounded"
            size={width >= 1024 ? "XL" : "L"}
            onClick={() => push("https://github.com/Rainzerrr")}
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageIntro;
