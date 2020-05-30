import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Player from "../../components/player";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="post-container">
        <Player
          source={postData.url}
          subtitle={postData.thai}
          poster={postData.banner}
        />
        <div className={utilStyles.details}>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <p>
            <a
              href={postData.trailer}
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Trailer / ภาพยนตร์โฆษณา</b>
            </a>
          </p>
          <p>
            <b>Rating / เรตติ้ง:</b> {postData.rating}
          </p>
          <p>
            <b>Genre / ประเภท:</b> {postData.genre}
          </p>
          <p>
            <b>Duration / ความยาวหนัง: </b>
            {postData.duration}
          </p>
          <p>
            <b>Synopsis / เรื่องย่อ:</b>
          </p>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <div>
            <Link href="/">
              <a>← Back to home / กลับหน้าหลัก</a>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
