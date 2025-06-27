import fs from "fs";
import path from "path";
import matter from "gray-matter"
const postsDirectory = path.join(process.cwd(), "content", "posts");
export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extention
  // console.log("postSlug", postSlug);
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  // console.log("filePath", filePath);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // console.log("fileContent", fileContent);
  const { data, content } = matter(fileContent);
  // console.log("data", data);
  // console.log("content", content);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  // console.log("postData", postData);
  return postData;
}
export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  // console.log("allPosts", allPosts);
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.data > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
