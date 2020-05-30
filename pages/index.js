import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Autocomplete from "../components/autocomplete";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.seachContainer}>
        <Autocomplete suggestions={allPostsData} />
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(
            ({ id, date, title, thumbnail, banner, duration }) => (
              <Link href="/posts/[id]" as={`/posts/${id}`} key={id}>
                <li className={utilStyles.listItem}>
                  <div className={utilStyles.bannerContainer}>
                    <LazyLoadImage
                      alt={title}
                      effect="opacity"
                      src={banner}
                      className={utilStyles.thumbnail}
                    />
                    {/* <img className={utilStyles.thumbnail} src={banner} alt="" /> */}
                    <p className={utilStyles.duration}>{duration}</p>
                  </div>
                  <div className={utilStyles.detailGrid}>
                    <LazyLoadImage
                      className={utilStyles.smThumbnail}
                      effect="opacity"
                      src={thumbnail}
                      alt={title}
                    />
                    <div>
                      <div className={utilStyles.nowrap}>{title}</div>
                      <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                      </small>
                    </div>
                  </div>
                </li>
              </Link>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
