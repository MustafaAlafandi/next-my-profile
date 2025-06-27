import { getPageFiles } from "next/dist/server/get-page-files";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function PostDetailPage(props) {
  const { postData } = props;
  return <PostContent post={postData}/>;
}

export async function getStaticProps(context) {
  const { params } = context;
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
    revalidate: 600,
  };
}
export async function getStaticPaths() {
  const paths = getPostsFiles()
    .map((fileName) => fileName.replace(/\.md$/, ""))
    .map((name) => ({
      params: { slug: name },
    }));
  return {
    paths,
    fallback: "blocking",
  };
}
