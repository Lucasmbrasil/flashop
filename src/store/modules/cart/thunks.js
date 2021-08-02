import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(addToCart(product));
};

export const removeFromCartThunk = (index) => (dispatch) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const newCart = cart.filter((product) => cart.indexOf(product) !== index);
  localStorage.setItem("cart", JSON.stringify(newCart));
  dispatch(removeFromCart(newCart));
};
