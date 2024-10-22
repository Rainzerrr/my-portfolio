"use client";

import { useEffect, useState } from "react";

const useSnackbar = () => {
  const [isSnackbarOpen, setisSnackbarOpen] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");

  const showSnackbar = (text: string) => {
    setSnackBarText(text);
    setisSnackbarOpen(true);
  };

  useEffect(() => {
    if (isSnackbarOpen) {
      setTimeout(() => {
        setisSnackbarOpen(false);
      }, 3000);
    }
  }, [isSnackbarOpen]);

  return { isSnackbarOpen, snackBarText, showSnackbar };
};

export default useSnackbar;
