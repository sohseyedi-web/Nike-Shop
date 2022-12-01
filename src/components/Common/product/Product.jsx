import "./Product.scss";
import { RiShoppingBasket2Line, RiHeart3Line } from "react-icons/ri";
import { comma } from "./../../../utils/comma";
import { useDispatch } from "react-redux";
import { addItemtoCart } from "../../../redux/reducers";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="box"
      style={{
        background: `linear-gradient(to bottom , ${product.oneColor} , ${product.twoColor})`,
      }}
      key={product.id}
    >
      <div className="box-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="box-action">
        <h3 className="box-action__name">{product.name}</h3>
        <div className="box-action__bottom">
          <div
            className="box-action__bottom-cart"
            onClick={() => dispatch(addItemtoCart(product))}
          >
            <RiShoppingBasket2Line size={26} />
          </div>
          <div className="box-action__bottom-cart">
            <RiHeart3Line size={26} />
          </div>
          <div className="box-action__bottom-price">
            {comma(product.price)} تومان
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
