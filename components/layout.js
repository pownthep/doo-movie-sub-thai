import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Navbar from "./navbar";

const name = "Pownthep Laokhunthot";
export const siteTitle = "Doo Movie Sub Thai (ดูหนังซับไทย)";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/cinema.svg" />
        <meta
          name="description"
          content="Watch movies with Thai subtitle in 1080p HD resolution. ชมภาพยนตร์พร้อมคำบรรยายภาษาไทยความละเอียด 1080p HD"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Navbar />
          </>
        ) : (
          <>
            <Navbar />
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home / กลับหน้าหลัก</a>
          </Link>
        </div>
      )}
    </div>
  );
}
