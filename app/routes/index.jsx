import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import { getCourse } from "~/models/course.server";
import GuitarLists from "../components/guitars-lists";
import PostLists from "../components/post-lists";
import Course from "~/components/course";
import stylesGuitars from "~/styles/guitars.css";
import stylesPosts from "~/styles/blog.css";
import styleCourse from "~/styles/course.css";

export function meta() {}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitars,
    },
    {
      rel: "stylesheet",
      href: stylesPosts,
    },
    {
      rel: "stylesheet",
      href: styleCourse,
    },
  ];
}

export async function loader() {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse(),
  ]);

  return {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data,
  };
}

const Index = () => {
  const { guitars, posts, course } = useLoaderData();

  return (
    <>
      <main className="container">
        <GuitarLists guitars={guitars} />
      </main>

      <Course course={course.attributes} />

      <main className="container">
        <PostLists posts={posts} />
      </main>
    </>
  );
};

export default Index;
