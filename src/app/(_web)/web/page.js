"use client";
import styles from "./page.module.css";

import { useContext, useEffect, useRef } from "react";

import Canva from "@/app/(_web)/web/components/Canva";
import Mask from "@/app/(_web)/web/components/Mask";
import Nav from "@/app/(_web)/web/components/Nav";
import HomeSection from "@/app/(_web)/web/components/HomeSection";
import Projects from "@/app/(_web)/web/components/Projects";
import Info from "@/app/(_web)/web/components/Info";
import Contacts from "@/app/(_web)/web/components/Contacts";
import Bars from "@/app/(_web)/web/components/Bars";
import Controls from "@/app/(_web)/web/components/Controls";
import MobileMenu from "@/app/(_web)/web/components/MobileMenu";
import { Context } from "@/app/(_web)/web/hooks/ContextWeb";

export default function Home() {
  const contentRef = useRef();
  const previousMenuRef = useRef();
  const { currentMenu, projectsScroll, setProjectScroll } = useContext(Context);

  useEffect(() => {
    if (currentMenu === "projects")
      contentRef.current.scrollTo(0, projectsScroll);

    if (previousMenuRef.current === "projects" && currentMenu !== "projects")
      setProjectScroll(0);
    previousMenuRef.current = currentMenu;
  }, [currentMenu]);

  return (
    <>
      <Mask />
      <div className={styles.container}>
        <Canva />
        <main className={styles.content} ref={contentRef}>
          <Nav />
          <HomeSection />
          <Projects />
          <Info />
          <Contacts />
        </main>
        <Bars />
        <Controls />
        <MobileMenu />
      </div>
    </>
  );
}
