import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";
import "./styles.css";
const ProductsCart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleRemoveProduct = (index) => {
    dispatch(removeFromCartThunk(index));
  };
  return (
    <div className="cardContainer">
      {cart.length > 0 ? (
        cart.map((product, index) => (
          <div key={index} className="cardProducts">
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div>
              <div>{product.name}</div>
              <span>{product.price}</span>
              <Button
                variant="contained"
                onClick={() => handleRemoveProduct(index)}
              >
                Remover produto
              </Button>
            </div>
          </div>
        ))
      ) : (
        <h3>Seu carrinho está vazio!</h3>
      )}
    </div>
  );
};
export default ProductsCart;
