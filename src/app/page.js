"use client";

import styles from "./page.module.css";

import { ContextProvider } from "@/app/hooks/ContextWeb";

import Canva from "@/app/(web)/web/components/Canva";
import Mask from "@/app/(web)/web/components/Mask";
import Nav from "@/app/(web)/web/components/Nav";
import HomeSection from "@/app/(web)/web/components/HomeSection";
import Projects from "@/app/(web)/web/components/Projects";
import Info from "@/app/(web)/web/components/Info";
import Contacts from "@/app/(web)/web/components/Contacts";
import Bars from "@/app/(web)/web/components/Bars";
import Controls from "@/app/(web)/web/components/Controls";
import MobileMenu from "@/app/(web)/web/components/MobileMenu";

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
