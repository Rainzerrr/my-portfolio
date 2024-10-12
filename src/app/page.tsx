import HomepageIntroBackground from "@/components/blocks/homepage-intro-background/homepage-intro-background";
import Homepage from "@/components/pages/homepage/homepage";

export default async function page() {
  return (
    <>
      <HomepageIntroBackground />
      <Homepage />
    </>
  );
}

