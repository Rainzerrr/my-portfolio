"use client";
import React from "react";
import Button from "../button/button";
import { useRouter } from "next/navigation";
import useWidth from "@/hooks/useWidth";
import "./linkedin-button.scss";

const LinkedInButton = ({ fullWidth }: { fullWidth?: boolean }) => {
  const { push } = useRouter();
  const { isOnDesktop } = useWidth();
  return (
    <Button
      className="btn-linkedin"
      theme="secondary"
      label="homepage.buttons.left"
      rightIcon="linkedin"
      shape="rounded"
      fullWidth={fullWidth}
      size={isOnDesktop ? "XL" : "L"}
      onClick={() => push("https://www.linkedin.com/in/rayanainouche/")}
    />
  );
};

export default LinkedInButton;
