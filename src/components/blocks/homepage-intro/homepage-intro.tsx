"use client";
import Button from "@/components/molecules/button/button";
import React from "react";
import { useRouter } from "@/i18n/routing";
import useWidth from "@/hooks/useWidth";
import { useTranslations } from "next-intl";
import LinkedInButton from "@/components/molecules/linkedin-button/linkedin-button";
import GitHubButton from "@/components/molecules/github-button/github-button";
import "./homepage-intro.scss";

const HomepageIntro = () => {
  const { push } = useRouter();
  const { isOnDesktop } = useWidth();
  const t = useTranslations();

  return (
    <div className="homepage__intro">
      <div className="homepage__intro__text">
        <div className="homepage__intro__title">
          <p className="homepage__intro__title__text">
            {t("homepage.title.main")}
          </p>
          <div className="homepage__intro__title-highlight">
            <p className="homepage__intro__title__text">
              {t("homepage.title.underlined")}
            </p>
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
        <p className="homepage__intro__desc">{t("homepage.description")}</p>
      </div>
      <div className="homepage__intro__buttons">
        <Button
          theme="primary"
          label="homepage.buttons.main"
          rightIcon="arrow-right"
          shape="rounded"
          size={isOnDesktop ? "XL" : "L"}
          onClick={() => push("/projects")}
        />
        <div className="homepage__intro__buttons-secondary">
          <LinkedInButton />
          <GitHubButton />
        </div>
      </div>
    </div>
  );
};

export default HomepageIntro;
