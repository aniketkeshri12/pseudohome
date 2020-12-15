import React from "react";

import Pgcard from "./Pgcard.jsx";
import Medicaldata from "./Medicaldata.jsx";
import "./styles.css";

const Medical = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Medical</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {Medicaldata.map((val, index) => {
                return (
                  <Pgcard
                    key="index"
                    img={val.img}
                    title={val.title}
                    info={val.info}
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

export default Medical;
