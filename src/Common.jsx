import React from "react";
import "./styles.css";

import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header " className="homee bodi d-flex align-items-center">
        <div className="container-fluid ">
          <div className="rows main">
            <div className="col-12 mx-auto">
              <div className="row ">
                <div className="col-md-6 pt-5 pt-lg-0 order=2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="mediaQ">{props.name}</h1>
                  <h1 className="brand-name">
                    <strong> PseudoHOME</strong>
                  </h1>
                  <h3 className="myy-3">"Get easy PG's, Mess and Many more"</h3>

                  <div className="mt-3 ">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className=" col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid-animated"
                    alt="home-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
