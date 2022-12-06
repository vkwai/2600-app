import { Link } from "react-router-dom";
import imageName from "../static/LCS.png"; // replace with your own path

export default function Navbar(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={imageName}
              width="70"
              height="60"
              className="d-inline-block align-top"
              alt="Home"
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Events"
                >
                  Events
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/About"
                >
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Admin"
                >
                  Admin
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Documentation"
                >
                  Documentation
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Sources"
                >
                  Sources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
