import { faInstagram, faSquareFacebook, faSquareTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuComponent from "./MenuComponent";

const FooterComponent: React.FC = () => {
  const copyrightYear = new Date().getFullYear();
  const appName = 'MyShop';
  const FooterStyles= {
    iconStyling: {
      margin: '0px 10px 0px 0px',
      display: 'flex',
      padding: '5px',
    }
  }

  return (
    <footer className="text-center">
      <hr />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <MenuComponent></MenuComponent>
            <li className="nav-item"><FontAwesomeIcon icon={faSquareFacebook} size="2x" style={FooterStyles.iconStyling}  /></li>
            <li className="nav-item"><FontAwesomeIcon icon={faSquareTwitter} size="2x" style={FooterStyles.iconStyling}   /></li>
            <li className="nav-item"><FontAwesomeIcon icon={faInstagram} size="2x" style={FooterStyles.iconStyling} /></li>
            <li className="nav-item"><FontAwesomeIcon icon={faWhatsapp} size="2x" style={FooterStyles.iconStyling} /></li>
          </ul>
          <p>Copyrights {copyrightYear} | {appName}</p>
        </div>
      </nav>
    </footer >
  );
}

export default FooterComponent