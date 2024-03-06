"use client";
import { useRouter } from "next/navigation";
import Works from "./works/page";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/film/works");
  }, []);
  return <></>;
};

export default Home;
