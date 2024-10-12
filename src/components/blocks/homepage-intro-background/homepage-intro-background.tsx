import React from "react";
import Image from "next/image";
import "./homepage-intro-background.scss";

const HomepageIntroBackground = () => {
  return (
    <>
      <div className="homepage__background__light">
        <svg
          className="homepage__background__light-image"
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
        </svg>
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
      <div className="homepage__background__codelines9">
        <Image
          className="homepage__background__codelines-image"
          src="/codelines7.svg"
          alt="background home"
          fill
        />
      </div>
    </>
  );
};

export default HomepageIntroBackground;
