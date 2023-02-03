import { useEffect, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import styles from "~/styles/cart.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta() {
  return {
    title: "GuitarLA - Carrito de compras",
    description: "Venta de guitarras, musica, blog, tienda, carrito de compras",
  };
}

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart, updateQuantity, deletGuitar } = useOutletContext();

  useEffect(() => {
    const totalCalculation = cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
    setTotal(totalCalculation);
  }, [cart]);

  return (
    <ClientOnly fallback="Cargando...">
      {() => (
        <main className="container">
          <h1 className="heading">Carrito de compras</h1>
          <div className="content">
            <div className="cart">
              <h2>Articulos</h2>
              {cart?.length === 0
                ? "Carrito vacio"
                : cart?.map((product) => (
                    <div key={product.id} className="product">
                      <div>
                        <img
                          src={product.image}
                          alt={`productImage ${product.name}`}
                        />
                      </div>

                      <div>
                        <p className="name">{product.name}</p>
                        <p>Cantidad:</p>
                        <select
                          onChange={(e) =>
                            updateQuantity({
                              quantity: +e.target.value,
                              id: product.id,
                            })
                          }
                          value={product.quantity}
                          className="select"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <p className="price">
                          <span>{product.price} </span>€
                        </p>
                        <p className="subtotal">
                          Subtotal:{" "}
                          <span>{product.price * product.quantity} </span>€
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn_delete"
                        onClick={() => deletGuitar(product.id)}
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>
            <aside className="resume">
              <div>
                <h3>Resumen del pedido</h3>
                <p>Total a pagar: {total}€</p>
              </div>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
};

export default Cart;
