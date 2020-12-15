import React from "react";

import Pgcard from "./Pgcard.jsx";
import Messsdata from "./Messsdata.jsx";
import "./styles.css";

const Mess = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Mess</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {Messsdata.map((val, index) => {
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

export default Mess;
