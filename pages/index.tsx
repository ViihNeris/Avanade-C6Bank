import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ExtractPage from "./extract";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ExtractPage />
    </div>
  );
};

export default Home;
