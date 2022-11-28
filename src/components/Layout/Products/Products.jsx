import "./Products.scss";
import { productList } from "./../../../data/dataItem";
import Product from "./../../Common/product/Product";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Products = () => {
  const prodctFilter = productList.filter((p) => p.id <= 6);

  return (
    <section className="products" dir="rtl">
      <div className="products-container container">
        <div className="products-container__wraps">
          {prodctFilter.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className="products-container__line">
          <Link to={"/auth"} className="products-container__line-icon">
            <RiArrowDownSLine size={30} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
