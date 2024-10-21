import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container ">
        <a className="navbar-brand fw-bolder " href="/">
          AbhijithGaganan.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end "
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
                <Link
                  className="nav-link me-lg-3 "
                  to="/projects"
                  onClick={() => {
                    // Close the offcanvas menu
                    const offcanvas =
                      document.getElementById("offcanvasNavbar");
                    const bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
                    bsOffcanvas.hide();
                  }}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link me-lg-3"
                  to="/about"
                  onClick={() => {
                    // Close the offcanvas menu
                    const offcanvas =
                      document.getElementById("offcanvasNavbar");
                    const bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
                    bsOffcanvas.hide();
                  }}
                >
                  Connect
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
