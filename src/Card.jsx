import React from "react";


import "./styles.css";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card gyy-4">
          <img src={props.imgsrc} class="card-img-top card_img" alt="..." />
      

          <div className="card-body cardtextCOL">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.d} </p>
         
         
            <a href={props.link}>
              <button className="btn btn-primary serbuttons">
                Get Best Deal
              </button>
            </a>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
