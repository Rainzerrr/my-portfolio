import React from "react";
import Image from "next/image";
import LinkedInButton from "@/components/molecules/linkedin-button/linkedin-button";
import GitHubButton from "@/components/molecules/github-button/github-button";
import Icon from "@/components/atoms/icon/icon";
import { useTranslations } from "next-intl";
import "./presentation-intro.scss";

const PresentationIntro = () => {
  const t = useTranslations();
  return (
    <div className="presentation-intro">
      <div className="presentation-intro__infos">
        <div className="presentation-intro__image-wrapper">
          <Image
            className="presentation-intro__image"
            src="/CV_picture.png"
            alt="CV picture"
            fill
            quality={100}
          />
        </div>
        <div className="presentation-intro__infos__text">
          <p className="presentation-intro__fullname">
            {t("presentation.fullname")}
          </p>
          <p className="presentation-intro__position">
            {t("presentation.position")}
          </p>
          <div className="presentation-intro__coordinates">
            <div className="presentation-intro__coordinate">
              <Icon
                className="presentation-intro__coordinate__icon"
                name="location"
                size="S"
              />
              <p className="presentation-intro__coordinate__label">
                {t("presentation.location")}
              </p>
            </div>
            <div className="presentation-intro__coordinate">
              <Icon
                className="presentation-intro__coordinate__icon"
                name="phone"
                size="S"
              />
              <p className="presentation-intro__coordinate__label">
                {t("presentation.phone")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="presentation-intro__buttons">
        <LinkedInButton fullWidth />
        <GitHubButton fullWidth />
      </div>
    </div>
  );
};

export default PresentationIntro;
