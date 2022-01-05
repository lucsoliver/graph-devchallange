import Head from "next/head";
import Image from "next/image";
import graphPic from "../images/team.jpg";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div>
          <h2>DevChallange</h2>
          <nav className={styles.nav}>
            <h3>Home</h3>
            <h3>Features</h3>
            <h3>Contact</h3>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.boxModel}>
          <Image src={graphPic} alt="graphic picture" className="picture" />
        </div>
        <h1 className={styles.title}>Create amazing graphics</h1>
        <p className={styles.description}>
          Colaborate and create beaultiful graphics with your team
        </p>

        <div className={styles.grid}>
          <button className={styles.button}>
            <span>Start Now</span>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
