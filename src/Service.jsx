import React from "react";

import Card from "./Card.jsx";
import Sdata from "./Sdata.jsx";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {Sdata.map((val, index) => {
                return (
                  <Card
                    key="index"
                    imgsrc={val.imgsrc}
                    title={val.title}
                    d={val.d}
                    link={val.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
