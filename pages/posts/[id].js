import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Player from "../../components/player";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <Player source={postData.url} subtitle={postData.thai} />
        <p>
          <a href={postData.trailer} target="_blank" rel="noopener noreferrer"><b>Trailer / ภาพยนตร์โฆษณา</b></a>
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
          <b>Synopsis / สรุป:</b>
        </p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
