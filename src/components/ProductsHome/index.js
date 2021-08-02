import { useDispatch, useSelector } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import "./styles.css";
const ProductsHome = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store);
  const handleAddProduct = (product) => {
    dispatch(addToCartThunk(product));
  };
  return (
    <div className="cardContainer">
      {products.map((product, index) => {
        return (
          <div key={index} className="cardProducts">
            <div id="cardImage">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="cardProducts">
              <div>{product.name}</div>
              <span>{product.price}</span>
              <button onClick={() => handleAddProduct(product)}>
                Adicionar produto
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsHome;
