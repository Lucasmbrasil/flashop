import { useDispatch, useSelector } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";

const ProductsCart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleRemoveProduct = (index) => {
    dispatch(removeFromCartThunk(index));
  };
  return (
    <>
      {cart.length > 0 ? (
        cart.map((product, index) => (
          <div key={index} className="cardProducts">
            <div id="cardImage">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="cardProducts">
              <div>{product.name}</div>
              <span>{product.price}</span>
              <button onClick={() => handleRemoveProduct(index)}>
                Remover produto
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>Seu carrinho está vazio</div>
      )}
    </>
  );
};
export default ProductsCart;
