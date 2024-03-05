"use client";
import styles from "./page.module.css";

import { useContext, useEffect, useRef } from "react";

import Canva from "@/components/web/Canva";
import Mask from "@/components/web/Mask";
import Nav from "@/components/web/Nav";
import HomeSection from "@/components/web/HomeSection";
import Projects from "@/components/web/Projects";
import Info from "@/components/web/Info";
import Contacts from "@/components/web/Contacts";
import Bars from "@/components/web/Bars";
import Controls from "@/components/web/Controls";
import MobileMenu from "@/components/web/MobileMenu";
import { Context } from "@/components/hooks/ContextWeb";

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
