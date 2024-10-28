"use client";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";
import PresentationIntro from "@/components/blocks/presentation-intro/presentation-intro";
import Separator from "@/components/atoms/separator/separator";
import PresentationSkills from "@/components/blocks/presentation-skills/presentation-skills";
import { useTranslations } from "next-intl";
import Button from "@/components/molecules/button/button";
import "./presentation.scss";

const Presentation = () => {
  const t = useTranslations();
  const handleDownload = () => {
    console.log("done");
    const link = document.createElement("a");
    link.href = "/cv_rayan_ainouche_fullstack.pdf";
    link.download = "mon-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <PortfolioPage>
      <div className="presentation__background-light-wrapper">
        {/* <svg
          className="presentation__background-light-image"
          viewBox="0 0 1440 905"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_519_10506)">
            <path d="M1386.75 371.374C1538.84 457.199 1662.57 463.449 1367.35 535.567C754.948 207.483 656.629 535.567 335.819 655C255.859 655 -199.109 504.623 -143.265 283.675C-44.6773 94.2915 284.684 518.626 364.643 518.626C664.45 335.685 1386.75 321.226 1386.75 371.374Z" />
          </g>
          <defs>
            <filter
              id="filter0_f_519_10506"
              x="-398"
              y="-15"
              width="2195"
              height="920"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_519_10506"
              />
            </filter>
          </defs>
        </svg> */}
      </div>
      <div className="presentation">
        <PresentationIntro />
        <Separator />
        <div className="presentation__content">
          <div className="presentation__content__profile-experience">
            <div className="presentation__content__profile">
              <p className="presentation__content__profile__title">
                {t("presentation.profile.title")}
              </p>
              <p className="presentation__content__profile__desc">
                {t("presentation.profile.description")}
              </p>
            </div>
            <Separator />
            <Button
              className="hide-mobile"
              label={t("presentation.download-button-label")}
              rightIcon="download"
              theme="primary"
              shape="rounded"
              size="XL"
              onClick={handleDownload}
            />
          </div>
          <PresentationSkills />
          <Button
            className="hide-desktop"
            label={t("presentation.download-button-label")}
            rightIcon="download"
            theme="primary"
            shape="rounded"
            size="L"
            onClick={handleDownload}
          />
        </div>
      </div>
    </PortfolioPage>
  );
};

export default Presentation;
