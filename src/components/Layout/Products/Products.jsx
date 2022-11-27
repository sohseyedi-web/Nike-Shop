import "./Products.scss";
import { productList } from './../../../data/dataItem';
import Product from './../../Common/product/Product';

const Products = () => {

  const prodctFilter = productList.filter((p) => p.id <= 6)

  return (
    <section className="products" dir="rtl">
      <div className="products-container container">
        <div className="products-container__wraps">
            {
                prodctFilter.map((product) => (
                    <Product key={product.id} product={product}/>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Products;
