"use client";

import styles from "./page.module.css";

import { ContextProvider } from "@/components/web/hooks/Context";

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

export default function Home() {
  return (
    <>
      <ContextProvider>
        <Mask />
        <div className={styles.container}>
          <Canva />
          <main className={styles.content}>
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
      </ContextProvider>
    </>
  );
}
