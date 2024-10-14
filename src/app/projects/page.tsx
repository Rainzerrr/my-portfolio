import ProjectHub from "@/components/pages/project-hub/project-hub";
import React from "react";

const projectCards = [
  {
    title: "Fruit&Go",
    details: "E-commerce",
    badges: [
      { label: "Frontend", variant: "tertiary", color: "green" },
      { label: "Backend", variant: "tertiary", color: "purple" },
    ],
    imageUrl: "/image_fruitandgo.png",
    imageAlt: "Image de présentation du projet fruit and go",
    redirectUrl: "www.youtube.com",
    button: {
      shape: "rounded",
      size: "M",
      theme: "secondary",
      rightIcon: "arrow-right",
      label: "Voir le projet",
    },
    variant: "emphasized",
  },
  {
    title: "Fountain Finder",
    details: "Carte des fontaines de Paris",
    badges: [
      { label: "Frontend", variant: "tertiary", color: "green" },
      { label: "Backend", variant: "tertiary", color: "purple" },
      { label: "UX/UI Design", variant: "tertiary", color: "blue" },
    ],
    imageUrl: "/fountain_finder_background_image.png",
    imageAlt: "Image de présentation du projet fountain finder",
    redirectUrl: "www.youtube.com",
    button: {
      shape: "circle",
      size: "M",
      theme: "secondary",
      rightIcon: "arrow-right",
    },
    variant: "default",
  },
  {
    title: "VIBE.",
    details: "Diffusion de vidéo en direct",
    badges: [
      { label: "Frontend", variant: "tertiary", color: "green" },
      { label: "UX/UI Design", variant: "tertiary", color: "blue" },
    ],
    imageUrl: "/vibe_background_image.png",
    imageAlt: "Image de présentation du projet vibe",
    redirectUrl: "www.youtube.com",
    button: {
      shape: "circle",
      size: "M",
      theme: "secondary",
      leftIcon: "arrow-right",
    },
    variant: "default",
  },
  {
    title: "VIBE.",
    details: "Diffusion de vidéo en direct",
    badges: [
      { label: "Frontend", variant: "tertiary", color: "green" },
      { label: "UX/UI Design", variant: "tertiary", color: "blue" },
    ],
    imageUrl: "/vibe_background_image.png",
    imageAlt: "Image de présentation du projet vibe",
    redirectUrl: "www.youtube.com",
    button: {
      shape: "circle",
      size: "M",
      theme: "secondary",
      leftIcon: "arrow-right",
    },
    variant: "default",
  },
  {
    title: "Fountain Finder",
    details: "Carte des fontaines de Paris",
    badges: [
      { label: "Frontend", variant: "tertiary", color: "green" },
      { label: "Backend", variant: "tertiary", color: "purple" },
      { label: "UX/UI Design", variant: "tertiary", color: "blue" },
    ],
    imageUrl: "/fountain_finder_background_image.png",
    imageAlt: "Image de présentation du projet fountain finder",
    redirectUrl: "www.youtube.com",
    button: {
      shape: "rounded",
      size: "M",
      theme: "secondary",
      rightIcon: "arrow-right",
      label: "Voir le projet",
    },
    variant: "emphasized",
  },
  {
    title: "Fruit&Go",
    details: "E-commerce",
    badges: [
      { label: "Frontend", variant: "tertiary", color: "green" },
      { label: "Backend", variant: "tertiary", color: "purple" },
    ],
    imageUrl: "/image_fruitandgo.png",
    imageAlt: "Image de présentation du projet fruit and go",
    redirectUrl: "www.youtube.com",
    button: {
      shape: "circle",
      size: "M",
      theme: "secondary",
      rightIcon: "arrow-right",
    },
    variant: "default",
  },
  {
    title: "Fountain Finder",
    details: "Carte des fontaines de Paris",
    badges: [
      { label: "Frontend", variant: "tertiary", color: "green" },
      { label: "Backend", variant: "tertiary", color: "purple" },
      { label: "UX/UI Design", variant: "tertiary", color: "blue" },
    ],
    imageUrl: "/fountain_finder_background_image.png",
    imageAlt: "Image de présentation du projet fountain finder",
    redirectUrl: "www.youtube.com",
    button: {
      shape: "circle",
      size: "M",
      theme: "secondary",
      rightIcon: "arrow-right",
    },
    variant: "default",
  },
  {
    title: "Fruit&Go",
    details: "E-commerce",
    badges: [
      { label: "Frontend", variant: "tertiary", color: "green" },
      { label: "Backend", variant: "tertiary", color: "purple" },
    ],
    imageUrl: "/image_fruitandgo.png",
    imageAlt: "Image de présentation du projet fruit and go",
    redirectUrl: "www.youtube.com",
    button: {
      shape: "circle",
      size: "M",
      theme: "secondary",
      rightIcon: "arrow-right",
    },
    variant: "default",
  },
  {
    title: "VIBE.",
    details: "Diffusion de vidéo en direct",
    badges: [
      { label: "Frontend", variant: "tertiary", color: "green" },
      { label: "UX/UI Design", variant: "tertiary", color: "blue" },
    ],
    imageUrl: "/vibe_background_image.png",
    imageAlt: "Image de présentation du projet vibe",
    redirectUrl: "www.youtube.com",
    button: {
      shape: "rounded",
      size: "M",
      theme: "secondary",
      leftIcon: "arrow-right",

      label: "Voir le projet",
    },
    variant: "emphasized",
  },
];

const page = () => {
  return <ProjectHub projectCards={projectCards} />;
};

export default page;
