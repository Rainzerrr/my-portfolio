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
      <div className="homepage__background__codelines1">
        <Image
          className="homepage__background__codelines-image"
          src="/codelines1.svg"
          alt="background home"
          fill
        />
      </div>
      <div className="homepage__background__codelines2">
        <Image
          className="homepage__background__codelines-image"
          src="/codelines3.svg"
          alt="background home"
          fill
        />
      </div>
      <div className="homepage__background__codelines3">
        <Image
          className="homepage__background__codelines-image"
          src="/codelines2.svg"
          alt="background home"
          fill
        />
      </div>
      <div className="homepage__background__codelines4">
        <Image
          className="homepage__background__codelines-image"
          src="/codelines4.svg"
          alt="background home"
          fill
        />
      </div>
      <div className="homepage__background__codelines5">
        <Image
          className="homepage__background__codelines-image"
          src="/codelines8.svg"
          alt="background home"
          fill
        />
      </div>
      <div className="homepage__background__codelines6">
        <Image
          className="homepage__background__codelines-image"
          src="/codelines9.svg"
          alt="background home"
          fill
        />
      </div>
      <div className="homepage__background__codelines7">
        <Image
          className="homepage__background__codelines-image"
          src="/codelines5.svg"
          alt="background home"
          fill
        />
      </div>
      <div className="homepage__background__codelines8">
        <Image
          className="homepage__background__codelines-image"
          src="/codelines4.svg"
          alt="background home"
          fill
        />
      </div>
    </>
  );
};

export default HomepageIntroBackground;
