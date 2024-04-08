import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Welcome to Junnies web-standards-considered components project!👻</p>
        <Link href="/multi-step-form">Multi-Step-Form</Link>
      </div>
    </main>
  );
}
