import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
        <meta name="Keywords" content="clothes, shoes"></meta>
      </Head>
      <div className={styles.title}>
        <h1>HOME</h1>
      </div>
      <Image
        src="/images/city.jpg"
        width="300"
        height="400"
        alt="cidade"
      ></Image>
    </>
  );
}
