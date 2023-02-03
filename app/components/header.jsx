import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="container bar">
        <Link to="/">
          <img className="logo" src={logo} alt="logoimage" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
