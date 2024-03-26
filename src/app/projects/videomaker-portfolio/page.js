"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const RedirectTemp = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/film");
  }, []);

  return;
};

export default RedirectTemp;
