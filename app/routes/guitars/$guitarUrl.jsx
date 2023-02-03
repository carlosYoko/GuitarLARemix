import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";

export async function loader({ params }) {
  const { guitarUrl } = params;
  const guitar = await getGuitar(guitarUrl);

  if (guitar.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }
  return guitar;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: `GuitarLA - Guitarra no encontrada`,
      description: `Guitarras, venta de guitarras, guitarra no encontrada`,
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.name}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.description}`,
  };
}

function Guitar() {
  const { addCart } = useOutletContext();

  const [quantity, setQuantity] = useState(0);
  const guitar = useLoaderData();
  const { name, description, image, price } = guitar.data[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity < 1) {
      alert("No has seleccionado una cantidad.");
      return;
    }

    const selectedGuitar = {
      id: guitar.data[0].id,
      image: image.data[0].attributes.url,
      name,
      price,
      quantity,
    };
    addCart(selectedGuitar);
  };

  return (
    <div className="guitar">
      <img
        className="image"
        src={image.data[0].attributes.url}
        alt={`guitarImage}${name}`}
      />
      <div className="content">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">{price}€</p>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="quantity">Cantidad</label>
          <select onChange={(e) => setQuantity(+e.target.value)} id="quantity">
            <option value="0">--Selecciona</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Añadir al carro" />
        </form>
      </div>
    </div>
  );
}

export default Guitar;
