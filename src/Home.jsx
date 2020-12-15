import React from "react";
import "./styles.css";

import Common from "./Common.jsx";

const Home = () => {
  return (
    <>
      <Common
        name="Enjoy Our services with"
        imgsrc="https://res.cloudinary.com/hisenberg/image/upload/v1607784757/img3_kpzi0s.png"
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
