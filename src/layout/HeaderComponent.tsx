import { Link } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const HeaderComponent = () => {
  //Variable declarations
  const shopName: string = "MyShop";
  const cartContext = useContext(CartContext);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          {shopName}
        </Link>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <MenuComponent></MenuComponent>
            <button
              type="button"
              className="btn btn-warning d-grid gap-2 d-md-flex justify-content-md-end"
            >
              Cart({cartContext?.products.length})
            </button>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default HeaderComponent;
