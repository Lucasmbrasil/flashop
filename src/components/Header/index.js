import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Header = () => {
  return (
    <div className="headerContainer">
      <Link to="/" className="logoContainer">
        <img src={logo} alt="logo" />
        <p>FLAshop</p>
      </Link>
      <Link to="/cart">
        <ShoppingCartIcon fontSize="large" className="cartIcon" />
      </Link>
    </div>
  );
};
export default Header;
