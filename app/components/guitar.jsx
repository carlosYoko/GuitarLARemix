import { Link } from "@remix-run/react";

const Guitar = ({ guitar }) => {
  const { description, image, price, url, name } = guitar;
  return (
    <div className="guitar">
      <img
        src={image.data[0].attributes.formats.medium.url}
        alt={`imageGuitar ${name}`}
      />
      <div className="content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">{price}€</p>
        <Link className="link" to={`/guitars/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
