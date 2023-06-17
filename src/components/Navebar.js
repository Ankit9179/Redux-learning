import React from "react";
import { Link } from "react-router-dom";

const Navebar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-success mx-5">
              <Link to={"/"}>All Products</Link>
            </button>
            <button className="btn btn-outline-success" type="submit">
              <Link to={"/cart-page"}>Cart(0)</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navebar;
