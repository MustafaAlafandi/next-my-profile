import PostItem from "./post-item";
import classes from "./post-item.module.css"
export default function PostGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}
