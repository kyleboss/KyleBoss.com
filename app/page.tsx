"use client";
import { useEffect } from "react";
import * as FullStory from "@fullstory/browser";

import Cards from "@/components/Cards";
import Header from "@/components/Header";

import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    FullStory.init({
      orgId: process.env.NEXT_PUBLIC_FULLSTORY_ORG_ID ?? "",
      devMode: process.env.NODE_ENV === "development",
    });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <section>
          <Cards />
        </section>
      </div>
    </main>
  );
}
