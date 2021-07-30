import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
const ProductsHome = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store);
  //   const handleAddProduct = (product) => {
  //     dispatch(addProducts(product));
  //   };
  return (
    <div className="cardContainer">
      {products.map((product, index) => {
        return (
          <div key={index} className="cardProducts">
            <img src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <span>{product.price}</span>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsHome;
