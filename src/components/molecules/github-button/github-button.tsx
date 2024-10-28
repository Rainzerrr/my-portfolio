"use client";
import React from "react";
import Button from "../button/button";
import { useRouter } from "next/navigation";
import useWidth from "@/hooks/useWidth";
import "./github-button.scss";

const GitHubButton = ({ fullWidth }: { fullWidth?: boolean }) => {
  const { push } = useRouter();
  const { isOnDesktop } = useWidth();
  return (
    <Button
      theme="secondary"
      label="homepage.buttons.right"
      rightIcon="github"
      shape="rounded"
      fullWidth={fullWidth}
      size={isOnDesktop ? "XL" : "L"}
      onClick={() => push("https://github.com/Rainzerrr")}
    />
  );
};

export default GitHubButton;
