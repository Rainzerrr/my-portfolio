"use client";
import React, { CSSProperties, FC } from "react";
import Badge, { BadgeProps } from "@/components/molecules/badge/badge";
import Image from "next/image";
import Link from "next/link";
import Button, { ButtonProps } from "@/components/molecules/button/button";
import classNames from "classnames";
import "./project-card.scss";
import useWidth from "@/hooks/useWidth";

interface ProjectCardProps {
  className?: string;
  title: string;
  details: string;
  badges: BadgeProps[];
  imageUrl: string;
  imageAlt: string;
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
  const renderProjectCardBadges = (badge: BadgeProps) => {
    return <Badge key={badge.label} {...badge} />;
  };

  return (
    <Link
      style={style}
      href={redirectUrl}
      onClick={(e) => {
        if (isOnDesktop) {
          e.preventDefault();
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
            <p className="project-card__infos__details">{details}</p>

            <p className="project-card__infos__title">{title}</p>
          </div>

          <div className="project-card__infos__badges">
            {badges.map(renderProjectCardBadges)}
          </div>
        </div>

        <Button className="project-card__button" {...button} />
      </div>
    </Link>
  );
};

export default ProjectCard;
export type { ProjectCardProps };
