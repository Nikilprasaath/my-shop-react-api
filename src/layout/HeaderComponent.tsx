import { Link } from "react-router-dom";
import MenuComponent from "./MenuComponent";

const HeaderComponent = () => {
  //Variable declarations
  const shopName: string = "MyShop";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          {shopName}
        </Link>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <MenuComponent></MenuComponent>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default HeaderComponent;
