import { useNavigate } from "react-router";
import "bootstrap-icons/icons/facebook.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const MenuComponent: React.FC = () => {
  const menuItems: string[] = ["Home", "Product", "About", "Contact"];
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  //Handle routing
  const handleRouting = (menuItem: string) => {
    switch (menuItem) {
      case "Home":
        navigate("/");
        break;
      case "Product":
        navigate("/products");
        break;
      case "About":
        navigate("/about-us");
        break;
      case "Contact":
        navigate("/contact-us");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <>
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {menuItems.map((menu) => {
          return (
            <button
              key={menu}
              className="nav-link"
              onClick={() => {
                handleRouting(menu);
              }}
            >
              {menu}
            </button>
          );
        })}
        {

        }
      </ul>
      <button
            style={{ float: "right" }}
            type="button"
            className="btn btn-warning d-grid gap-2 d-md-flex justify-content-md-end"
          >
            Cart({cartContext?.products.length})
          </button>
    </>
  );
};

export default MenuComponent;
