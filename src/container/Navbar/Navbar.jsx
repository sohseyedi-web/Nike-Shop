import Logo from "../../assets/logo.png";
import './Navbar.scss'
import {
  RiSearchLine,
  RiHeart3Line,
  RiShoppingBasketLine,
} from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="navs">
      <div className="container navs-container">
        <img src={Logo} alt="" className="navs-container__image"/>
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
