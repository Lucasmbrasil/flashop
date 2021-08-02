import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import "./styles.css";
const ProductsCart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handleRemoveProduct = (index) => {
    dispatch(removeFromCartThunk(index));
  };
  const totalPrice = cart.reduce((a, b) => a + b.price, 0);
  return cart.length > 0 ? (
    <div>
      <div className="cardContainer">
        {cart.map((product, index) => (
          <div key={index} className="cardProducts">
            <img src={product.image} alt={product.name} />

            <div>{product.name}</div>
            <span>R${product.price.toFixed(2)}</span>
            <Button
              variant="contained"
              onClick={() => handleRemoveProduct(index)}
            >
              Remover produto <RemoveShoppingCartIcon />
            </Button>
          </div>
        ))}
      </div>
      <h3 className="cardContainer">Valor total: R${totalPrice.toFixed(2)}</h3>
    </div>
  ) : (
    <h3 className="cardContainer">Seu carrinho está vazio!</h3>
  );
};
export default ProductsCart;
