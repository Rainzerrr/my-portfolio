import { ProjectDetailsProps } from "@/components/pages/project-details/project-details";

interface DataProps {
  projectDetails: ProjectDetailsProps[];
}
const data: DataProps = {
  projectDetails: [
    {
      title: "Fruit&Go",
      description:
        "Fruit and Go est une application e-commerce conçue pour un primeur et pour la vente d’alimentation générale. L’objectif principal est de permettre à ses clients de passer commande en ligne et de se faire livrer directement chez eux. Ce projet vise à répondre aux besoins des clients qui souhaitent éviter l'affluence parfois importante en magasin, tout en offrant au primeur une solution pratique pour augmenter ses ventes.",
      badges: [
        { label: "Frontend", variant: "tertiary", color: "green" },
        { label: "Backend", variant: "tertiary", color: "purple" },
      ],
      imageUrl: "/image_fruitandgo.png",
      imageAlt: "Image de présentation du projet fruit and go",
      nbPeople: 2,
      time: "2 mois",
      technologies: [
        { icon: "react", label: "React.js" },
        { icon: "next-js", label: "Next.js" },
        { icon: "css_3", label: "CSS 3" },
      ],
      features: [
        {
          title: "Introduction.",
          desc: "L'idée de ce projet est née de la volonté du primeur d'adopter un système de commande par livraison pour mieux gérer les périodes de forte affluence et offrir une expérience client plus fluide. Grâce à cette application, le primeur peut élargir son marché et optimiser son chiffre d'affaires en simplifiant l'accès à ses produits. Dans ce projet, j’ai travaillé en collaboration avec un expert UX/UI, qui s’est chargé des assets graphiques, tels que les illustrations du site et la vidéo d’introduction.",
          imageUrl: "/image_fruitandgo.png",
          imageAlt: "Image de présentation du projet fruit and go",
          variant: "default",
        },
        {
          title: "Panier dynamique.",
          desc: "Le panier dynamique est l'une des fonctionnalités clés de l'application. Accessible en haut à droite de l'écran, il permet aux utilisateurs de suivre en temps réel les articles qu'ils ajoutent. Une page dédiée au panier offre une vue complète et interactive où l'utilisateur peut voir ses produits, modifier la quantité ou supprimer des articles. Le prix total est automatiquement mis à jour, offrant une expérience de commande fluide et intuitive. Cette fonctionnalité améliore l'expérience d'achat, en rendant la gestion des articles ajoutés simple et transparente.",
          imageUrl: "/image_fruitandgo.png",
          imageAlt: "Image de présentation du projet fruit and go",
          variant: "left",
        },
        {
          title: "Système de filtres.",
          desc: "L'application propose également un système de filtres efficace sur la page des catégories de produits. Grâce à cette fonctionnalité, les utilisateurs peuvent affiner leur recherche en fonction de différents critères, tels que le type de produit, la disponibilité ou encore les promotions. Les filtres sont dynamiques et peuvent fonctionner ensemble pour offrir une expérience de navigation personnalisée. De plus, un bouton permet de réinitialiser les filtres à tout moment, ce qui simplifie l'exploration du catalogue pour l'utilisateur.",
          imageUrl: "/image_fruitandgo.png",
          imageAlt: "Image de présentation du projet fruit and go",
          variant: "right",
        },
        {
          title: "Paiement avec Stripe.",
          desc: "Afin de centraliser et faciliter les paiements, l'application est reliée à Stripe, une solution fiable et sécurisée. Lors du processus de commande, les utilisateurs sont redirigés vers une interface Stripe intégrée, où ils peuvent finaliser leur paiement en toute sécurité. Pour le gérant du magasin, Stripe offre également une plateforme dédiée pour le suivi des facturations et des commandes. Cela permet une gestion simplifiée des transactions et des rapports financiers, sans avoir à passer par des systèmes tiers compliqués.",
          imageUrl: "/image_fruitandgo.png",
          imageAlt: "Image de présentation du projet fruit and go",
          variant: "left",
        },
        {
          title: "Gestion du contenu avec Strapi.",
          desc: "Le site est connecté à Strapi, un CMS Headless qui permet au gérant de gérer de manière intuitive le contenu du site sans avoir à solliciter l'équipe de développement. Grâce à cette interface, il peut contrôler l’ensemble du contenu textuel et visuel des différentes pages, gérer la liste des produits et mettre en avant certains d'entre eux dans les suggestions. Cette intégration offre une autonomie complète au gérant pour ajuster les contenus en fonction des besoins commerciaux, facilitant ainsi la gestion quotidienne du site.",
          imageUrl: "/image_fruitandgo.png",
          imageAlt: "Image de présentation du projet fruit and go",
          variant: "right",
        },
      ],
    },
    {
      title: "Fountain Finder",
      description:
        "Fountain Finder est une application conçue pour vérifier en temps réel la disponibilité des fontaines à eau de Paris. La disponibilité signifie ici que les fontaines fournissent effectivement de l'eau. Ce projet offre une solution pratique pour les utilisateurs qui souhaitent trouver rapidement une fontaine en état de marche dans Paris.",
      badges: [
        { label: "Frontend", variant: "tertiary", color: "green" },
        { label: "Backend", variant: "tertiary", color: "purple" },
        { label: "UX/UI Design", variant: "tertiary", color: "blue" },
      ],
      imageUrl: "/fountain_finder_background_image.png",
      imageAlt: "Image de présentation du projet fountain finder",
      nbPeople: 1,
      time: "3 jours",
      technologies: [
        { icon: "react", label: "React.js" },
        { icon: "css_3", label: "SCSS" },
      ],
      features: [
        {
          title: "Introduction.",
          desc: "Ce projet est né de l'envie de moderniser un concept initial développé lors d’un projet universitaire, qui avait été réalisé en HTML, CSS et JavaScript. La nouvelle version utilise React pour proposer une application plus performante et optimisée. Elle apporte aussi une interface utilisateur (UI) modernisée, avec de nouveaux curseurs et une amélioration générale de l’expérience visuelle et interactive.",
          imageUrl: "/fountain_finder_background_image.png",
          imageAlt: "Image de présentation du projet fountain finder",
          variant: "default",
        },
        {
          title: "Carte de Paris.",
          desc: "L’application s’appuie sur une carte de Paris fournie par la bibliothèque Leaflet. Cette carte affiche en détail les rues, arrondissements, et bâtiments de la ville, offrant une vue complète de Paris et facilitant la navigation. L’intégration de Leaflet permet de créer une carte dynamique qui suit les interactions des utilisateurs tout en restant légère et rapide.",
          imageUrl: "/fountain_finder_background_image.png",
          imageAlt: "Image de présentation du projet fountain finder",
          variant: "left",
        },
        {
          title: "Affichage des fontaines.",
          desc: "Les fontaines à eau de Paris sont récupérées à partir de l’API des eaux de Paris, qui répertorie toutes les fontaines de la ville et ses environs. Chaque fontaine est représentée sur la carte avec des informations clés telles que la rue où elle se trouve, son type (fontaine classique, mur d’eau, etc.) et surtout sa disponibilité. Cette fonctionnalité permet d’avoir une vue claire de l’état des fontaines à tout moment.",
          imageUrl: "/fountain_finder_background_image.png",
          imageAlt: "Image de présentation du projet fountain finder",
          variant: "right",
        },
        {
          title: "Clusters de fontaines.",
          desc: "Afficher plusieurs milliers de points d’intérêts, comme les fontaines, peut rapidement alourdir l’application et affecter ses performances. Pour éviter cela, j’ai implémenté un système de clusters. Ces clusters regroupent plusieurs fontaines proches géographiquement, réduisant ainsi le nombre d'éléments affichés en même temps et optimisant les performances. Chaque cluster affiche le nombre de fontaines présentes dans sa zone, offrant un aperçu rapide sans surcharger l’écran.",
          imageUrl: "/fountain_finder_background_image.png",
          imageAlt: "Image de présentation du projet fountain finder",
          variant: "left",
        },
        {
          title: "Détail d'une fontaine.",
          desc: "Le site est connecté à Strapi, un CMS Headless qui permet au gérant de gérer de manière intuitive le contenu du site sans avoir à solliciter l'équipe de développement. Grâce à cette interface, il peut contrôler l’ensemble du contenu textuel et visuel des différentes pages, gérer la liste des produits et mettre en avant certains d'entre eux dans les suggestions. Cette intégration offre une autonomie complète au gérant pour ajuster les contenus en fonction des besoins commerciaux, facilitant ainsi la gestion quotidienne du site.",
          imageUrl: "/fountain_finder_background_image.png",
          imageAlt: "Image de présentation du projet fountain finder",
          variant: "right",
        },
        {
          title: "Markers personnalisés.",
          desc: "Les markers des fontaines ont été entièrement personnalisés pour cette version de l’application. Contrairement aux markers standards fournis par Leaflet, j’ai conçu des markers spécifiques qui affichent une image correspondant au type de fontaine. Cela permet une meilleure distinction visuelle entre les différents types de fontaines, améliorant ainsi l'expérience utilisateur. C’est une évolution par rapport à la version précédente, où un seul type de marker était utilisé pour toutes les fontaines.",
          imageUrl: "/fountain_finder_background_image.png",
          imageAlt: "Image de présentation du projet fountain finder",
          variant: "left",
        },
      ],
    },
    {
      title: "VIBE.",
      description:
        "VIBE est une plateforme de streaming vidéo conçue pour permettre aux utilisateurs de diffuser des vidéos en direct tout en interagissant avec leurs spectateurs en temps réel. Ce projet a été développé dans le cadre de notre projet annuel de ma dernière année de BUT Informatique, afin de se former à la manipulation de flux vidéos en direct.",
      badges: [
        { label: "Frontend", variant: "tertiary", color: "green" },
        { label: "UX/UI Design", variant: "tertiary", color: "blue" },
      ],
      imageUrl: "/vibe_background_image.png",
      imageAlt: "Image de présentation du projet vibe",
      nbPeople: 6,
      time: "5 mois",
      technologies: [
        { icon: "next-js", label: "Next.js" },
        { icon: "css_3", label: "SCSS" },
      ],
      features: [
        {
          title: "Introduction.",
          desc: "Le projet VIBE est né de la passion partagée par notre équipe pour les plateformes de streaming et de notre désir de créer une application qui offre une solution pratique et fonctionnelle aux créateurs de contenu vidéo. Ce projet nous a permis de mettre en pratique des compétences techniques variées tout en collaborant pour créer un produit final cohérent et abouti. En intégrant des fonctionnalités modernes telles que la diffusion en direct, la gestion de comptes utilisateurs et des interfaces intuitives, VIBE se positionne comme une plateforme polyvalente et puissante pour la diffusion de contenu en direct.",
          imageUrl: "/vibe_background_image.png",
          imageAlt: "Image de présentation du projet vibe",
          variant: "default",
        },
      ],
    },
  ],
};

export default data;
