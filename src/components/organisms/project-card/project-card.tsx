"use client";
import React, { CSSProperties, FC } from "react";
import Badge, { BadgeProps } from "@/components/molecules/badge/badge";
import Image from "next/image";
import Button, { ButtonProps } from "@/components/molecules/button/button";
import classNames from "classnames";
import useWidth from "@/hooks/useWidth";
import { Link, useRouter } from "@/i18n/routing";
import { ProjectProps } from "@/app/[locale]/data";
import "./project-card.scss";
import { useTranslations } from "next-intl";

interface ProjectCardProps extends ProjectProps {
  className?: string;
  redirectUrl: string;
  button: ButtonProps;
  variant: "default" | "emphasized";
  style?: CSSProperties;
  onClick?: () => void;
}

const ProjectCard: FC<ProjectCardProps> = ({
  className,
  title,
  details,
  badges,
  imageUrl,
  imageAlt,
  redirectUrl,
  button,
  variant = "emphasized",
  style,
  onClick = () => null,
}) => {
  const { isOnDesktop } = useWidth();
  const { push } = useRouter();
  const t = useTranslations();
  const renderProjectCardBadges = (badge: BadgeProps) => {
    return <Badge key={badge.label} {...badge} />;
  };

  const Component = isOnDesktop ? "div" : Link;

  return (
    <Component
      style={style}
      href={redirectUrl}
      onClick={(e) => {
        const clickedElement = e.target as HTMLElement;
        if (
          isOnDesktop &&
          clickedElement.tagName !== "BUTTON" &&
          clickedElement.closest(".project-card__button")?.tagName !== "BUTTON"
        ) {
          onClick();
        }
      }}
      className={classNames(
        "project-card",
        `project-card--${variant}`,
        className
      )}
    >
      <div className="project-card__image">
        <Image src={imageUrl} alt={imageAlt} fill quality={100} />
      </div>

      <div className="project-card__infos-button">
        <div className="project-card__infos">
          <div className="project-card__infos__title-details">
            <p className="project-card__infos__details">{t(details)}</p>

            <p className="project-card__infos__title">{title}</p>
          </div>

          <div className="project-card__infos__badges">
            {badges.map(renderProjectCardBadges)}
          </div>
        </div>

        <Button
          className="project-card__button"
          {...button}
          onClick={() => push(redirectUrl)}
        />
      </div>
    </Component>
  );
};

export default ProjectCard;
export type { ProjectCardProps };
