import { Link } from "react-router-dom";
import imageName from "../static/LCS_Transparent.png"; // replace with your own path

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <img
                      src={imageName}
                      width="70"
                      height="60"
                      className="d-inline-block align-top"
                      alt="Home"
                    ></img>
                    <small className="d-block mb-3 text-muted">© 2022</small>
                  </h6>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
                  <p>
                    <Link className="text-reset" to="/about">
                      About
                    </Link>
                  </p>
                  <p>
                    <Link className="text-reset" to="/events">
                      Events
                    </Link>
                  </p>
                  <p>
                    <Link className="text-reset" to="/contact">
                      Contact
                    </Link>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Media</h6>
                  <p>
                    <a
                      href="https://github.com/langaracs"
                      className="text-reset"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </p>
                  <p>
                    <a href="https://discord.gg/VgKxme4" className="text-reset">
                      <i className="bi bi-discord"></i>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.instagram.com/langaracpsc/"
                      className="text-reset"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://twitter.com/Langaracpsc"
                      className="text-reset"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <p>
                    <i className="fas fa-home me-3"></i> 100 W 49th Ave,
                    Vancouver, BC V5Y 2Z6
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    langaracompsciclub@gmail.com
                  </p>
                  {/* <iframe
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ92MlQW90hlQR_v0JFSJtYDY&key=..."
                  ></iframe> */}
                </div>
              </div>
            </div>
          </section>
        </span>
      </div>
    </footer>
  );
}
