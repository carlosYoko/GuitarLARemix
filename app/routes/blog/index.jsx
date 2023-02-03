import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import PostLists from "~/components/post-lists";

export function meta() {
  return {
    title: "GuitarLA - Blog",
    description: "GuitarLA, Blog de musica, Venta de guitarras",
  };
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

function Blog() {
  const posts = useLoaderData();
  return <PostLists posts={posts} />;
}

export default Blog;
