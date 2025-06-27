import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  const { posts } = props;
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}
export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  console.log("featuredPosts",featuredPosts);
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
// 1) Hero => present ourselves
// 2) Featured Posts
