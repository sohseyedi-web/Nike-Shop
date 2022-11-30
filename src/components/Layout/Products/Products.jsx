import "./Products.scss";
import { productList } from "./../../../data/dataItem";
import Product from "./../../Common/product/Product";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  const [numberProduct, setNumberProduct] = useState(6);
  const [active, setActive] = useState(false);

  const productLen = productList.length;

  const onLoadproduct = () => {
    if (active === false) {
      setActive(!active);
      setNumberProduct(productLen);
    } else {
      setNumberProduct(6);
      setActive(!active);
    }
  };

  const prodctFilter = productList.filter((p) => p.id <= numberProduct);

  return (
    <section className="products" dir="rtl">
      <div className="products-container container">
        <div className="products-container__wraps">
          {prodctFilter.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className="products-container__line">
          <div
            className={
              active === true
                ? "products-container__line-icon active-icon"
                : "products-container__line-icon"
            }
            onClick={onLoadproduct}
          >
            <RiArrowDownSLine size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
