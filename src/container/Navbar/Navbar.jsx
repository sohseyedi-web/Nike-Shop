import { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Navbar.scss";
import {
  RiSearchLine,
  RiHeart3Line,
  RiShoppingBasketLine,
  RiCloseFill,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addItemtoCart, removeItemCart } from "../../redux/reducers";
import { comma } from "./../../utils/comma";

const Navbar = () => {
  const { productItem } = useSelector((state) => state.nike);
  const [color, setColor] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();

  const changeBgcolor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const totalPrice = productItem.reduce(
    (price, total) => price + total.quantity * total.price,
    0
  );

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
          <div
            className="navs-container__actions-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            <span>
              <RiShoppingBasketLine size={28} />
            </span>
            <span className="navs-container__actions-icon__num">
              {productItem.length}
            </span>
          </div>
        </div>

        <div
          dir="rtl"
          className={
            sidebar === true
              ? "navs-container__sidebar side-active"
              : "navs-container__sidebar"
          }
        >
          <div className="navs-container__sidebar-header">
            <div className="navs-container__sidebar-header__text">سبد خرید</div>
            <span
              className="navs-container__sidebar-header__icon"
              onClick={() => setSidebar(!sidebar)}
            >
              <RiCloseFill size={28} />
            </span>
          </div>
          <hr />
          <div className="navs-container__sidebar-body">
            {productItem.length === 0 ? (
              <div className="text-center pt-5">سبد خرید خالی است</div>
            ) : (
              productItem.map((item) => (
                <div
                  className="navs-container__sidebar-body__item"
                  key={item.id}
                >
                  <img src={item.img} alt={item.name} title={item.name} />
                  <div className="navs-container__sidebar-body__item-actions">
                    <button onClick={() => dispatch(addItemtoCart(item))}>
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(removeItemCart(item))}>
                      -
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <hr />
          <div className="navs-container__sidebar-footer">
            <span className="navs-container__sidebar-footer__total">
              جمع :{" "}
            </span>
            <span className="navs-container__sidebar-footer__num">
              {comma(totalPrice)} تومان
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
