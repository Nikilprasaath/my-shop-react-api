import { useNavigate, Link } from "react-router-dom";
import './Categories.css'

const Categories = () => {

  return (
    <div>
      <nav>
        <div>
          <div>
            Categories
          </div>
      
          <div>
            <ul className="nav flex-column">
              <li className="nav item">
                <Link className="nav-link active" aria-current="page" to="/">
                  All
                </Link>
              </li>
              <li className="nav item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/products"
                >
                  Men
                </Link>
              </li>
              <li className="nav item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/contact"
                >
                  Women
                </Link>
              </li>
              <li className="nav item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/about"
                >
                  Kids
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Categories