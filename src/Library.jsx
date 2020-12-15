import React from "react";

import Pgcard from "./Pgcard.jsx";
import Librarydata from "./Librarydata.jsx";
import "./styles.css";

const Library = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Library</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {Librarydata.map((val, index) => {
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

export default Library;
