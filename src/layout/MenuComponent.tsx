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
        navigate("/Products");
        break;
      case "About":
        navigate("/About");
        break;
      case "Contact":
        navigate("/Contact");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          {shopName}
        </Link>
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            {menuItems.map((menu) => {
              return (
                <button key={menu}
                  className="nav-link"
                  onClick={() => {
                    handleRouting(menu);
                  }}
                >
                  {menu}
                </button>
              );
            })}
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
};

export default MenuComponent;
