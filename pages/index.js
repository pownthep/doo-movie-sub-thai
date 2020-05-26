import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Autocomplete from "../components/autocomplete";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Autocomplete suggestions={allPostsData} />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h5 className={utilStyles.lightText}>POPULAR THIS SEASON</h5>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, thumbnail }) => (
            <li className={utilStyles.listItem} key={id}>
              <img className={utilStyles.thumbnail} src={thumbnail} alt="" />
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <div className={utilStyles.title}>
                  <a>{title}</a>
                </div>
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
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
