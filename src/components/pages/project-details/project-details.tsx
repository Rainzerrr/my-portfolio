"use client";
import React, { FC } from "react";
import Badge, { BadgeProps } from "@/components/molecules/badge/badge";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";
import Button from "@/components/molecules/button/button";
import MainProjects from "@/components/blocks/main-projects/main-projects";
import Image from "next/image";
import Icon from "@/components/atoms/icon/icon";
import TechnologyIconText, {
  TechnologyIconTextProps,
} from "@/components/molecules/technology-icon/technology-icon";
import ProjectFeature, {
  ProjectFeatureProps,
} from "@/components/blocks/project-feature/project-feature";
import { Link } from "@/i18n/routing";
import classNames from "classnames";
import { useRouter } from "@/i18n/routing";
import useSnackbar from "@/hooks/useSnackbar";
import Snackbar from "@/components/molecules/snackbar/snackbar";
import { ProjectProps } from "@/app/[locale]/data";
import "./project-details.scss";
import { useTranslations } from "next-intl";

interface ProjectDetailsProps extends ProjectProps {
  isModal?: boolean;
}

const ProjectDetails: FC<ProjectDetailsProps> = ({
  title,
  description,
  badges,
  nbPeople,
  time,
  imageUrl,
  imageAlt,
  technologies,
  deployedUrl,
  repoUrl,
  features,
  isModal,
}) => {
  const { isSnackbarOpen, snackBarText, showSnackbar } = useSnackbar();
  const { push } = useRouter();
  const t = useTranslations();
  const renderBadges = (badge: BadgeProps) => {
    return <Badge key={badge.label} {...badge} />;
  };
  const renderTechnologies = (tech: TechnologyIconTextProps) => {
    return <TechnologyIconText key={tech.label} {...tech} />;
  };
  const renderProjectFeature = (feature: ProjectFeatureProps) => {
    return (
      <>
        <div className="project-details__separator" />
        <ProjectFeature key={feature.title} {...feature} />
      </>
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Texte copié dans le presse-papier avec succès!");
      })
      .catch((err) => {
        console.error("Erreur lors de la copie dans le presse-papier : ", err);
      });
  };

  return (
    <div
      className={classNames(
        "project-details",
        isModal && "project-details--modal"
      )}
    >
      <PortfolioPage>
        {!isModal && (
          <Link href="/">
            <Button
              className="project-details__return-btn"
              theme="primary"
              isGhost
              label="project-details.buttons.return"
              size="XL"
              shape="rounded"
              leftIcon="chevron-left"
            />
          </Link>
        )}

        <div className="project-details__content">
          <div className="project-details__infos">
            <div className="project-details__infos__top">
              <div className="project-details__infos__text">
                <div className="project-details__infos__title-link">
                  <p className="project-details__title">{title}</p>
                  {!isModal && (
                    <Button
                      className="project-details__infos__link-button"
                      size="L"
                      shape="circle"
                      leftIcon="link"
                      theme="secondary"
                      onClick={() => {
                        copyToClipboard(window.location.href);
                        showSnackbar("Lien de la page copié avec succès !");
                      }}
                    />
                  )}
                </div>
                <div className="project-details__separator" />
                <div className="project-details__infos__properties-desc">
                  <div className="project-details__infos__properties">
                    <div className="project-details__infos__badges-context">
                      <div className="project-details__infos__badges">
                        {badges.map(renderBadges)}
                      </div>
                      <div className="project-details__infos__context">
                        <div className="project-details__nb-persons">
                          <Icon name="person" size="XS" />
                          <p className="project-details__context-label">
                            {nbPeople} {t("project-details.person")}
                            {nbPeople > 1 ? "s" : ""}
                          </p>
                        </div>

                        <div className="project-details__time">
                          <Icon name="time" size="XS" />
                          <p className="project-details__context-label">
                            {t(time)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="project-details__technologies">
                      {technologies.map(renderTechnologies)}
                    </div>
                  </div>
                  <p className="project-details__desc">{t(description)}</p>
                </div>
              </div>
              <div className="project-details__infos__buttons">
                <Button
                  label="project-details.buttons.deployed"
                  rightIcon="laptop"
                  theme="primary"
                  shape="rounded"
                  size="L"
                  fullWidth
                  onClick={() => deployedUrl && push(deployedUrl)}
                />
                <Button
                  label="project-details.buttons.repository"
                  rightIcon="github"
                  theme="secondary"
                  shape="rounded"
                  size="L"
                  fullWidth
                  onClick={() => repoUrl && push(repoUrl)}
                />
              </div>
            </div>
            <div className="project-details__main-image-wrapper">
              <Image
                className="project-details__main-image"
                src={imageUrl}
                alt={imageAlt}
                fill
              />
            </div>
          </div>
          {features.map(renderProjectFeature)}
        </div>
        <div className="project-details__separator" />
        <MainProjects />
      </PortfolioPage>
      <Snackbar isSnackbarOpen={isSnackbarOpen} text={snackBarText} />
    </div>
  );
};

export default ProjectDetails;
export type { ProjectDetailsProps };
