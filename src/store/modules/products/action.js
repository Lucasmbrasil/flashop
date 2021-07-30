import { ADD_CART } from "./actionTypes";

const products = [
  { name: "Camisa1", price: 279.0, image: "link-da-imagem" },
  { name: "Camisa2", price: 279.0, image: "link-da-imagem" },
  { name: "Camisa3", price: 279.0, image: "link-da-imagem" },
  { name: "Bola", price: 99.0, image: "link-da-imagem" },
  { name: "Jaqueta", price: 379.0, image: "link-da-imagem" },
  { name: "Quadro1", price: 79.0, image: "link-da-imagem" },
  { name: "Quadro2", price: 79.0, image: "link-da-imagem" },
];

export const addProducts = (state = products, action) => ({});
