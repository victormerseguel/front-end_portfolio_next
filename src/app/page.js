"use client";

import styles from "./page.module.css";

import { ContextProvider } from "@/app/(_web)/web/hooks/ContextWeb";

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

export default function Home() {
  return (
    <>
      {/* <ContextProvider>
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
      </ContextProvider> */}
    </>
  );
}
