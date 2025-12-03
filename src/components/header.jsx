import React from "react";
import { Search, Heart, CircleUserRound, ShoppingBag } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm fixed-top">
      <div className="container">
        {/* LOGO */}
        <a className="navbar-brand fw-bold fs-3"><img src={logo} alt="logo  " /></a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-3"
                href="#"
                id="homeDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Home
              </a>

              <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Home Version 1
                  </a>
                  <hr />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Home Version 2
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle px-3"
                href="#"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>

              <div className="dropdown-menu w-100 mt-0 border-0 shadow p-4 head-icon">
                <div className="container">
                  <div className="row g-4">
                    <div className="col-md-3">
                      <h6 className="fw-bold mb-3 border-title">Column 01</h6>
                      <a className="dropdown-item small" href="#">
                        Shop Grid Left Sidebar
                      </a>
                      <a className="dropdown-item small" href="#">
                        Shop Grid Right Sidebar
                      </a>
                      <a className="dropdown-item small" href="#">
                        Shop List Left Sidebar
                      </a>
                      <a className="dropdown-item small" href="#">
                        Shop List Right Sidebar
                      </a>
                    </div>

                    <div className="col-md-3">
                      <h6 className="fw-bold mb-3 border-title">Column 02</h6>
                      <a className="dropdown-item small" href="#">
                        Product Details
                      </a>
                      <a className="dropdown-item small" href="#">
                        Product Details Affiliate
                      </a>
                      <a className="dropdown-item small" href="#">
                        Product Details Variable
                      </a>
                      <a className="dropdown-item small" href="#">
                        Product Details Group
                      </a>
                    </div>

                    <div className="col-md-3">
                      <h6 className="fw-bold mb-3 border-title">Column 03</h6>
                      <a className="dropdown-item small" href="#">
                        Cart
                      </a>
                      <a className="dropdown-item small" href="#">
                        Checkout
                      </a>
                      <a className="dropdown-item small" href="#">
                        Compare
                      </a>
                      <a className="dropdown-item small" href="#">
                        Wishlist
                      </a>
                    </div>

                    <div className="col-md-3">
                      <h6 className="fw-bold mb-3 border-title">Column 04</h6>
                      <a className="dropdown-item small" href="#">
                        My Account
                      </a>
                      <a className="dropdown-item small" href="#">
                        Login / Register
                      </a>
                      <a className="dropdown-item small" href="#">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-3"
                href="#"
                id="homeDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Shop
              </a>

              <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Shop Grid Layout
                  </a>
                  <hr />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Shop List Layout
                  </a>
                  <hr />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Product List
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="#">
                Blog
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <Search size={25} className="head-icon" />
            <CircleUserRound size={25} className="head-icon" />
            <Heart size={25} className="head-icon" />

            <div className="position-relative">
              <ShoppingBag size={25} className="head-icon" />
              <span className="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle p-1">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
