import { Link } from "react-router-dom";

const FooterComponent: React.FC = () => {
  const copyrightYear = new Date().getFullYear();
  const appName = 'MyShop';

  return (
    <footer className="text-center">
      <hr />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about-us">About Us</Link>
          </li>
        </ul>
        <p>Copyrights {copyrightYear} | {appName}</p>
      </div>
    </nav>
        </footer >
    );
}

export default FooterComponent;