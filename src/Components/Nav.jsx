import React from "react";
import { Link } from "react-router-dom";

import styles from "./nav.module.css"

const Nav = ({nav,SetNav}) => {
  const navarray = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Technology",
  ];





 


function handleClick(e){
e.preventDefault();
SetNav(e.target.innerHTML)

}

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-primary sticky-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid  ">
          <Link className="navbar-brand " to="/">
            Persist News
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              {navarray.map((value, index) => (
                <li  className={`nav-item mx-4 ${styles.navlist}`}   key={index} onClick={handleClick}>
                  {value}
                </li>
              ))}
            </ul>
          
          </div>
        </div>
      </nav>

    </>
  );
};

export default Nav;
