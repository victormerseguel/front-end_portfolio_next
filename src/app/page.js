"use client";

import styles from "./page.module.css";

import { ContextProvider } from "@/hooks/Context";

import Canva from "@/components/Canva";
import Mask from "@/components/Mask";
import Nav from "@/components/Nav";
import HomeSection from "@/components/HomeSection";
import Projects from "@/components/Projects";
import Info from "@/components/Info";
import Contacts from "@/components/Contacts";

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
        </div>
      </ContextProvider>
    </>
  );
}
