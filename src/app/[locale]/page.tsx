import HomepageIntroBackground from "@/components/blocks/homepage-intro-background/homepage-intro-background";
import Homepage from "@/components/pages/homepage/homepage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil - Mon E-portfolio",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `https://rayan-ainouche.dev`,
  },
};

export default async function page() {
  return (
    <>
      <HomepageIntroBackground />
      <Homepage />
    </>
  );
}

