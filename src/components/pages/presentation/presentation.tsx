"use client";
import PresentationExperiences, {
  PresentationExperiencesProps,
} from "@/components/blocks/presentation-experiences/presentation-experiences";
import PresentationFormation from "@/components/blocks/presentation-formation/presentation-formation";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";
import PresentationIntro from "@/components/blocks/presentation-intro/presentation-intro";
import Separator from "@/components/atoms/separator/separator";
import PresentationSkills from "@/components/blocks/presentation-skills/presentation-skills";
import { useTranslations } from "next-intl";
import Button from "@/components/molecules/button/button";
import { useMemo, useState } from "react";
import "./presentation.scss";
import { TimelineItemProps } from "@/components/organisms/timeline-item/timeline-item";

const Presentation = () => {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState("experiences");
  const handleDownload = () => {
    console.log("done");
    const link = document.createElement("a");
    link.href = "/cv_rayan_ainouche_fullstack.pdf";
    link.download = "mon-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavigateProfile = (activeSection: string) =>
    setActiveSection(activeSection);

  const formationTimelineItems: TimelineItemProps[] = [
    {
      title: "presentation.education.esiee.title",
      subtitle: "presentation.education.esiee.diploma",
      badgeColor: "black",
      icon: "/esiee.png",
      isIconImage: true,
      date: "presentation.education.esiee.years",
      description: "presentation.education.esiee.desc",
    },
    {
      title: "presentation.education.iut.title",
      subtitle: "presentation.education.iut.diploma",
      badgeColor: "black",
      icon: "/iut.png",
      isIconImage: true,
      date: "presentation.education.iut.years",
      description: "presentation.education.iut.desc",
    },
    {
      title: "presentation.education.high-school.title",
      subtitle: "presentation.education.high-school.diploma",
      badgeColor: "black",
      icon: "school",
      date: "presentation.education.high-school.years",
      description: "presentation.education.high-school.desc",
    },
  ];

  const experiencesTimeline: PresentationExperiencesProps = {
    timelineItem: {
      title: "presentation.experience.capgemini.title",
      icon: "capgemini",
      subtitle: "presentation.experience.capgemini.position",
      date: "presentation.experience.capgemini.years",
      badgeColor: "orange",
    },
    timelineSubitems: [
      {
        title: "presentation.experience.capgemini.aeroport-paris.title",
        icon: "aeroport-paris",
        date: "presentation.experience.capgemini.aeroport-paris.date",
        listItems: [
          "presentation.experience.capgemini.aeroport-paris.achievement1",
          "presentation.experience.capgemini.aeroport-paris.achievement2",
          "presentation.experience.capgemini.aeroport-paris.achievement3",
          "presentation.experience.capgemini.aeroport-paris.achievement4",
        ],
      },
      {
        title: "presentation.experience.capgemini.fdj.title",
        icon: "/fdj.png",
        isIconImage: true,
        date: "presentation.experience.capgemini.fdj.date",
        listItems: [
          "presentation.experience.capgemini.fdj.achievement1",
          "presentation.experience.capgemini.fdj.achievement2",
          "presentation.experience.capgemini.fdj.achievement3",
          "presentation.experience.capgemini.fdj.achievement4",
          "presentation.experience.capgemini.fdj.achievement5",
          "presentation.experience.capgemini.fdj.achievement6",
        ],
      },
    ],
  };

  const ActiveSection = useMemo(() => {
    return activeSection === "experiences" ? (
      <PresentationExperiences {...experiencesTimeline} />
    ) : (
      <PresentationFormation timelineItems={formationTimelineItems} />
    );
  }, [activeSection]);

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
          <div className="presentation__content__profile-experience-formation">
            <div className="presentation__content__profile">
              <p className="presentation__content__profile__title">
                {t("presentation.profile.title")}
              </p>
              <p className="presentation__content__profile__desc">
                {t("presentation.profile.description")}
              </p>
            </div>
            <div className="presentation__content__experience-formation">
              <div className="presentation__content__experience-formation__submenu">
                <Button
                  label="presentation.experience.nav-label"
                  rightIcon="experiences"
                  theme="secondary"
                  isGhost={activeSection === "formation"}
                  shape="rounded"
                  size="M"
                  onClick={() => handleNavigateProfile("experiences")}
                />
                <Button
                  label="presentation.education.nav-label"
                  rightIcon="school"
                  theme="secondary"
                  isGhost={activeSection === "experiences"}
                  shape="rounded"
                  size="M"
                  onClick={() => handleNavigateProfile("formation")}
                />
              </div>
              <Separator />
              {ActiveSection}
            </div>

            <Separator className="hide-mobile" />

            <Button
              className="hide-mobile"
              label="presentation.download-button-label"
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
            label="presentation.download-button-label"
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
