import Cards from "@/components/Cards";
import Header from "@/components/Header";

import styles from "./page.module.css";

export default function Home() {
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
