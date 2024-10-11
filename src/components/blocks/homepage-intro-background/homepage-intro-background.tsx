import React from "react";
import Image from "next/image";
import "./homepage-intro-background.scss";

const HomepageIntroBackground = () => {
  return (
    <>
      <div className="homepage__background__light">
        <Image
          className="homepage__background__light-image"
          src="/homepage-background.svg"
          alt="background home"
          fill
        />
      </div>
      <div className="homepage__background__codelines">
        <Image
          className="homepage__background__codelines-image"
          src="/codelines1.svg"
          alt="background home"
          fill
        />
      </div>
    </>
  );
};

export default HomepageIntroBackground;
