import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Authlogin, loginAuth } from '../Features/Authentication/Auth'

function NavigationBar() {
  let isLogin = localStorage.getItem("token");
  const dispatch = useDispatch()

  return (
    <div>
      <nav className="navbar navbar-expand-lg m-4 navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand h1 ms-5" to="/">
            Shoppy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-4" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="navbar-brand"
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shopping">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stories">
                  Stories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mycart">
                  Cart
                </Link>
              </li>
              {isLogin ? (
                <li className="nav-item">
                  <button className="nav-link" onClick={()=>dispatch(Authlogin(true))} >
                    LogOut
                  </button>
                </li>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Loginpage
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
