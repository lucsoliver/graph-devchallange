import Head from "next/head";
import Image from "next/image";
import graphPic from "../images/team.jpg";
import Menu from "../components/Menu";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h2>DevChallange</h2>
        <Menu />
      </header>

      <main className={styles.main}>
        <div className={styles.boxModel}>
          <h1 className={styles.title}>Create amazing graphics</h1>
          <p className={styles.description}>
            Colaborate and create beaultiful graphics with your team
          </p>

          <div className={styles.grid}>
            <button className={styles.button}>
              <span className={styles.buttonText}>Start Now</span>
            </button>
          </div>
        </div>
        <div className={styles.boxImage}>
          <Image
            src={graphPic}
            alt="graphic picture"
            className={styles.picture}
          />
        </div>
      </main>
    </div>
  );
}
