import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import "./styles.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
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
            <img src={product.image} alt={product.name} />

            <div>{product.name}</div>
            <span>R${product.price.toFixed(2)}</span>
            <Button
              variant="contained"
              onClick={() => handleAddProduct(product)}
            >
              Adicionar produto <AddShoppingCartIcon />
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsHome;
