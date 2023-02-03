import image from "../../public/img/nosotros.jpg";
import styles from "~/styles/we.css";

export function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras, blog de musica",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: image,
      as: "image",
    },
  ];
}

const We = () => {
  return (
    <main className="container we">
      <h2 className="heading">Nosotros</h2>

      <div className="content">
        <img src={image} alt="weImage" />

        <div>
          <p>
            Donec rhoncus, dolor vitae suscipit consectetur, lorem ante lacinia
            risus, sit amet egestas mauris magna nec tellus. Etiam cursus luctus
            erat. Proin commodo erat vitae massa interdum ullamcorper. Ut vel
            tempus nisi. Donec id justo non justo volutpat tincidunt non non
            arcu. Nulla eget dapibus neque, in porta massa. Nam luctus urna sed
            velit imperdiet porttitor. Cras ante diam, ultricies sit amet
            aliquet at, luctus sit amet lectus.
          </p>
          <p>
            Donec rhoncus, dolor vitae suscipit consectetur, lorem ante lacinia
            risus, sit amet egestas mauris magna nec tellus. Etiam cursus luctus
            erat. Proin commodo erat vitae massa interdum ullamcorper. Ut vel
            tempus nisi. Donec id justo non justo volutpat tincidunt non non
            arcu. Nulla eget dapibus neque, in porta massa. Nam luctus urna sed
            velit imperdiet porttitor. Cras ante diam, ultricies sit amet
            aliquet at, luctus sit amet lectus.
          </p>
        </div>
      </div>
    </main>
  );
};

export default We;
