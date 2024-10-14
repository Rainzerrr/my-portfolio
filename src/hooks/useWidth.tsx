"use client";
import { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return { width, setWidth };
};

export default useWidth;
