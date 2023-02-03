import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { dateFormat } from "~/utils/helpers";

export function meta({ data }) {
  if (!data) {
    return {
      title: `GuitarLA - Entrada no encontrada`,
      description: `Guitarras, blog de guitarras, entrada no encontrada`,
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.title}`,
    description: `Guitarras, blog de guitarras, entrada ${data.data[0].attributes.title}`,
  };
}

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }

  return post;
}

export const Post = () => {
  const post = useLoaderData();
  const { content, image, title, publishedAt } = post.data[0].attributes;
  return (
    <main className="post mt-3">
      <img
        className="img"
        src={image.data.attributes.url}
        alt={`blogImage}${title}`}
      />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{dateFormat(publishedAt)}</p>
        <p className="text">{content}</p>
      </div>
    </main>
  );
};

export default Post;
