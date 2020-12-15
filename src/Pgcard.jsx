import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Pgcard = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card card_more">
          <img src={props.img} class="card-img-top card_img_more" alt="..." />

          <div className="card-body cardtextCOL">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.info} </p>
            <NavLink to="/pg" class="btn btn-primary more_buttons">
              Call Us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pgcard;
