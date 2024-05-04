import { useNavigate } from "react-router";

const MenuComponent: React.FC = () => {
  const menuItems: string[] = ["Home", "Products", "About", "Contact"];
  const navigate = useNavigate();

  //Handle routing
  const handleRouting = (menuItem: string) => {
    switch (menuItem) {
      case "Home":
        navigate("/");
        break;
      case "Products":
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {menuItems.map((menu) => {
          return (
            <button
              key={menu}
              className="nav-link active"
              onClick={() => {
                handleRouting(menu);
              }}
            >
              {menu}
            </button>
          );
        })}
      </ul>

    </>
  );
};

export default MenuComponent;
