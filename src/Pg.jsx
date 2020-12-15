import React from "react";

import Pgcard from "./Pgcard.jsx";
import Pgsdata from "./Pgsdata.jsx";
import "./styles.css";

const Pg = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">PG's</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {Pgsdata.map((val, index) => {
                return (
                  <Pgcard
                    key="index"
                    img={val.img}
                    title={val.title}
                    info={val.info}
                    visitt={val.visitt}
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

export default Pg;
