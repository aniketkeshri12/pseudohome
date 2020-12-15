import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <>
     

      <footer class="page-footer font-small teal pt-4 footercolor">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase font-weight-bold">Support</h5>
              <p className="mb-0">ANIKET KESHRI</p>
              <p className="mb-0">Harshdeep Singh</p>
              <p className="mb-0">Deepti Singh</p>
              <p className="mb-0">Yogiraj Bedarkar</p>
              <p className="mb-0">Anjali Ratre</p>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-6 mb-md-0 mb-3">
              <h5 class="text-uppercase font-weight-bold">Information</h5>
              <p>
                We exist to provide students with access to better facilites in
                a very low cost and no student should have hinders in education
                and no parent should get tense for the sake of their childs
                education, Thank You :)
              </p>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3 footer">
          © {currentyear} Copyright: PseudoHOME. All Rights Reserved | Terms and
          Conditions
          <NavLink to="https://mdbootstrap.com/" className="colh">
            {" "}
            "PseudoHOME"
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
