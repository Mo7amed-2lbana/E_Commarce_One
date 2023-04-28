import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/freshcart-logo.svg";
import { ApiContext } from "../../Context/ApiContext/ApiContext";

export default function NavBar({ UserData, handleLogOut }) {
  const { getApiCart, numOfCart } = useContext(ApiContext);

  useEffect(() => {
    getApiCart();
  }, []);
  // const {products} = showCart;
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary position-fixed w-100 top-0">
        <div class="container-fluid">
          <Link class="navbar-brand" to="">
            <img src={logo} alt="FreshCart" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {UserData ? (
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="Category">
                    Category
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="brands">
                    Brands
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link d-flex" to="cart">
                    Cart
                  </Link>
                </li>
              </ul>
            ) : null}

            <ul class="navbar-nav ms-auto align-items-center mb-2 mb-lg-0">
              {UserData ? (
                <>
                  <li class="nav-item">
                    <i className="fab me-3 fa-facebook-f"></i>
                    <i className="fab me-3 fa-instagram"></i>
                    <i className="fab me-3 fa-linkedin"></i>
                    <i className="fab me-3 fa-twitter"></i>
                  </li>
                  <li class="nav-item">
                    <Link to={"cart"}>
                      <div className="icon  position-relative">
                        <i className="fa fa-cart-plus text-success"></i>
                        <div className="total position-absolute translate-middle-x text-danger fw-bold">
                          {numOfCart ? numOfCart : ""}
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li class="nav-item" onClick={handleLogOut}>
                    <Link class="nav-link">Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="login">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
