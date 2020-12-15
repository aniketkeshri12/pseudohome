import React from "react";

import Pgcard from "./Pgcard.jsx";
import Babydata from "./Babydata.jsx";
import "./styles.css";

const Baby = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Baby Sitter</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {Babydata.map((val, index) => {
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

export default Baby;
