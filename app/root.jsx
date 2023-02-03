import { useState, useEffect } from "react";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";

export function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLA - Remix",
    viewport: "width=device-width,initial-scale=1",
  };
}

export function links() {
  return [
    {
      rel: "sylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {
  const cartLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) ?? []
      : null;
  const [cart, setCart] = useState(cartLS);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (guitar) => {
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      const uppgradedCart = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          guitarState.quantity = guitar.quantity;
        }
        return guitarState;
      });
      setCart(uppgradedCart);
    } else {
      setCart([...cart, guitar]);
    }
  };

  const updateQuantity = (guitar) => {
    const updatedCart = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.quantity = guitar.quantity;
      }
      return guitarState;
    });
    setCart(updatedCart);
  };

  const deletGuitar = (id) => {
    const cartUpdated = cart.filter((guitarState) => guitarState.id !== id);
    setCart(cartUpdated);
  };

  return (
    <Document>
      <Outlet
        context={{
          addCart,
          cart,
          updateQuantity,
          deletGuitar,
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

/** Manejo de errores */
export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link to="/" className="error-link">
        Ir a la pagina principal
      </Link>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link to="/" className="error-link">
        Ir a la pagina principal
      </Link>
    </Document>
  );
}
