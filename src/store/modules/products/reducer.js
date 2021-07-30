import camisa1 from "../../../assets/camisa1.png";
import camisa2 from "../../../assets/camisa2.png";
import camisa3 from "../../../assets/camisa3.png";
import jaqueta from "../../../assets/jaqueta.png";
import quadro1 from "../../../assets/quadro.jpg";
import quadro2 from "../../../assets/quadro2.jpg";
import bola from "../../../assets/bola.png";

const initialState = [
  {
    name: "Camisa Flamengo I",
    price: "279,00",
    image: camisa1,
  },
  { name: "Camisa Flamengo II", price: "279,00", image: camisa2 },
  { name: "Camisa Flamengo III", price: "279,00", image: camisa3 },
  { name: "Bola do Flamengo", price: "99,00", image: bola },
  {
    name: "Jaqueta Corta-Vento Flamengo",
    price: "379,00",
    image: jaqueta,
  },
  { name: "Quadro Zico", price: "79,00", image: quadro1 },
  {
    name: "Quadro Flamengo Libertadores 19",
    price: "79,00",
    image: quadro2,
  },
];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
