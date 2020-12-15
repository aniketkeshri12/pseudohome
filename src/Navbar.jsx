import React from "react";
import "./styles.css";


import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg bcol ">
        <div className="rows ">
          <div className="col-10 mx-auto  bcol  ">
            <nav className="navbar bcol  navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand bcol iconn " to="/">
                <img
                  src="https://res.cloudinary.com/hisenberg/image/upload/v1607776559/icon_myvo1s.png"
                  alt=""
                  className="icon"
                />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse features"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <NavLink
                      
                      className="nav-link"
                      
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/service"
                    >
                      Services
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      AboutUS
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      ContactUS
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Features
                    </NavLink>
                    <div
                      className="dropdown-menu dropdownn"
                      aria-labelledby="navbarDropdown"
                    >
                      <NavLink
                        className="dropdown-item dropdownn dropdownn_ele"
                        to="/pg"
                      >
                        PG's
                      </NavLink>
                      <NavLink
                        className="dropdown-item dropdownn dropdownn_ele"
                        to="/mess"
                      >
                        Mess
                      </NavLink>
                      <NavLink
                        className="dropdown-item dropdownn dropdownn_ele"
                        to="/baby"
                      >
                        Baby Sitter
                      </NavLink>
                      <NavLink
                        className="dropdown-item dropdownn dropdownn_ele "
                        to="/stationary"
                      >
                        Stationary
                      </NavLink>
                      <NavLink
                        className="dropdown-item dropdownn dropdownn_ele"
                        to="/park"
                      >
                        Park
                      </NavLink>
                      <NavLink
                        className="dropdown-item dropdownn dropdownn_ele"
                        to="/medical"
                      >
                        Medical
                      </NavLink>
                      <NavLink
                        className="dropdown-item dropdownn dropdownn_ele"
                        to="/laundary"
                      >
                        Laundary/Maid
                      </NavLink>
                      <NavLink
                        className="dropdown-item dropdownn dropdownn_ele"
                        to="/flats"
                      >
                        Flats
                      </NavLink>
                      
                      <a
                        class="dropdown-item  dropdownn_ele dropdownn"
                        href="/library"
                      >
                        Library
                      </a>
                    </div>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2 srchh"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                
                  <NavLink
                    to="/login"
                    className="btn btn-outline-success my-2 my-sm-0 srch "
                  >
                    Search
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="btn btn-outline-success my-2 my-sm-0 srch log"
                  >
                    Log in
                  </NavLink>

                  
                </form>
              </div>
            </nav>
          </div>
        </div>
        <div className="dropdown-divider "></div>
      </div>
    </>
  );
};

export default Navbar;
