import { Link } from "@remix-run/react";
import { dateFormat } from "~/utils/helpers";

const Post = ({ post }) => {
  const { content, image, title, url, publishedAt } = post;
  return (
    <article className="post">
      <img
        className="image"
        src={image.data.attributes.formats.small.url}
        alt={`imgBlog ${title}`}
      />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{dateFormat(publishedAt)}</p>
        <p className="resume">{content}</p>
        <Link className="link" to={`/blog/${url}`}>
          Leer entrada
        </Link>
      </div>
    </article>
  );
};

export default Post;
