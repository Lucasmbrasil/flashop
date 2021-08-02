import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
const Header = () => {
  const { cart } = useSelector((store) => store);

  return (
    <div className="headerContainer">
      <Link to="/" className="logoContainer">
        <img src={logo} alt="logo" />
        <p>FLAshop</p>
      </Link>
      <Badge color="primary" badgeContent={cart.length}>
        <Link to="/cart">
          <ShoppingCartIcon fontSize="large" className="cartIcon" />
        </Link>
      </Badge>
    </div>
  );
};
export default Header;
