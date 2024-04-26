import { useNavigate, Link } from "react-router-dom";

const MenuComponent = () => {
  //Hooks
  const navigate = useNavigate();

  //Variable declarations
  const shopName: string = "MyShop";
  const menuItems: string[] = ["Home", "Product", "About", "Contact"];

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
        navigate("/contact");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {shopName}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about-us"
                >
                  About Us
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-warning d-grid gap-2 d-md-flex justify-content-md-end"
            >
              Cart(0)
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuComponent;
