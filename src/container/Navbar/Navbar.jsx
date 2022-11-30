import { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Navbar.scss";
import {
  RiSearchLine,
  RiHeart3Line,
  RiShoppingBasketLine,
} from "react-icons/ri";

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeBgcolor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeBgcolor);

  return (
    <nav className={color ? "navs navs-active" : "navs"}>
      <div className="container navs-container">
        <img src={Logo} alt="" className="navs-container__image" />
        <div className="navs-container__actions">
          <div className="navs-container__actions-icon">
            <RiSearchLine size={28} />
          </div>
          <div className="navs-container__actions-icon">
            <RiHeart3Line size={28} />
          </div>
          <div className="navs-container__actions-icon">
            <span>
              <RiShoppingBasketLine size={28} />
            </span>
            <span className="navs-container__actions-icon__num">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
