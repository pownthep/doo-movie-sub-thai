import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Navbar from "./navbar";

const name = "Pownthep Laokhunthot";
export const siteTitle = "Doo Movie Sub Thai (ดูหนังซับไทย)";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
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

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name='theme-color' content='#317EFB' />
      </Head>
      <header className={styles.header}>
        {home ? <>{/* <Navbar /> */}</> : <>{/* <Navbar /> */}</>}
      </header>
      <main>{children}</main>
    </div>
  );
}
