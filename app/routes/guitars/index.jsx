import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import GuitarLists from "~/components/guitars-lists";

export function meta() {
  return {
    title: "GuitarLA - Tienda de guitarras",
    description: "GuitarLA - Coleccion de guitarras",
  };
}

export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}

const Shop = () => {
  const guitars = useLoaderData();
  return <GuitarLists guitars={guitars} />;
};

export default Shop;
