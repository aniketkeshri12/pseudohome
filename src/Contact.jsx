import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    number: "",
    msg: ""
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  };

  const formSubmit = (e) => {
    
    alert(
      `Form submitted ,Name:${data.firstName} ${data.lastName}, Email: ${data.email}, 
      Phone:${data.Phone}, DoB:${data.dob}, Message:${data.msg} `
    );
  };

  return (
    <>
      <div className="bodiDiv">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 widthLo">
            <div className="cardd border my-5">
              <div className=" p-5 text-center">
                <div className="row justify-content-center">
                  <div className="col-xl-8 col-lg-9 mb-4">
                    <h1 className="text-center mediaQ">Contact US</h1>
                  </div>
                </div>
              </div>
              <div className="cardd p-5">
                <div className="row justify-content-center">
                  <div className="col-xl-8 col-lg-9">
                    <form onSubmit={formSubmit}>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">First Name</label>
                        <input
                          type="First Name"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="firstName"
                          value={data.firstName}
                          onChange={inputEvent}
                          placeholder="First Name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Last Name</label>
                        <input
                          type="last Name"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="lastName"
                          value={data.lastName}
                          onChange={inputEvent}
                          placeholder="last Name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">
                          Email address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="email"
                          value={data.email}
                          onChange={inputEvent}
                          placeholder="name@example.com"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">
                          Date Of Birth
                        </label>
                        <input
                          type="DoB"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="dob"
                          value={data.dob}
                          onChange={inputEvent}
                          placeholder="DD-MM-YYYY"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Phone No.</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="number"
                          value={data.number}
                          onChange={inputEvent}
                          placeholder="mobile number"
                        />
                      </div>

                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                          FeedBack
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="msg"
                          value={data.msg}
                          onChange={inputEvent}
                        ></textarea>
                      </div>

                      <button class="btn buttonS " type="submit">
                        Register
                      </button>
                    </form>
                    <div className="social">
                      <NavLink to="#" class="fa fa-facebook"></NavLink>
                     
                      <NavLink to="#" class="fa fa-twitter"></NavLink>
                      <NavLink to="#" class="fa fa-instagram"></NavLink>
                     
                      <NavLink to="#" class="fa fa-youtube"></NavLink>
                      
                      <NavLink to="#" class="fa fa-envelope"></NavLink>
                      <NavLink to="#" class="fa fa-whatsapp"></NavLink>

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-divider "></div>
      </div>
    </>
  );
};

export default Contact;

