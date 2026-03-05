import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/imges/nav/logo.png";

export default function () {
  return (
    <>
      <footer className="container-fluid">
        <div className="container text-secondary py-4 px-5">
          <div class="row justify-content-center align-items-center g-2">
            <div class="col-md-3  ">
              <div className="p-0">
                <img className="m-4" src={logo} alt="logo" />
                <div className="d-flex  justify-content-center align-items-center">
                  <i class="fa-solid fa-location-dot fs-4  pb-3 me-2"></i>
                  <p className="w-75">
                    25566 Hc 1, Glenallen, Alaska, 99588, USA
                  </p>
                </div>
                <div className="d-flex  justify-content-center align-items-center">
                  <i class="fa-solid fa-phone fs-4  pb-3 me-2"></i>
                  <p className="w-75">+603 4784 273 12</p>
                </div>
                <div className="d-flex  justify-content-center align-items-center">
                  <i class="fa-solid fa-envelope fs-4  pb-3 me-2"></i>
                  <p className="w-75">rentcars@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="col-md-9  px-5">
              <div className="row ps-5 justify-content-around">
                <div className="col-12 col-sm-6 col-lg-3 ">
                  <h5 className="text-white mb-3">Our Product</h5>
                  <p className="my-1">Career</p>
                  <p className="my-1">Car</p>
                  <p className="my-1">Packages</p>
                  <p className="my-1">Features</p>
                  <p className="my-1">Priceline</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 ">
                  <h5 className="text-white mb-3">Resources</h5>
                  <p className="my-1">Download</p>
                  <p className="my-1">Help Centre</p>
                  <p className="my-1">Guides</p>
                  <p className="my-1">Partner Network</p>
                  <p className="my-1">Cruises</p>
                  <p className="my-1">Developer</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 ">
                  <h5 className="text-white mb-3">About Rentcars</h5>
                  <p className="my-1">Why choose us</p>
                  <p className="my-1">Our Story</p>
                  <p className="my-1">Investor Relations</p>
                  <p className="my-1">Press Center</p>
                  <p className="my-1">Advertise</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 ">
                  <h5 className="text-white mb-3">Follow Us</h5>
                  <i class="fa-brands fs-3 fa-square-facebook"></i>
                  <i class="fa-brands fs-3 fa-square-instagram"></i>{" "}
                  <i class="fa-brands fs-3 fa-youtube"></i>
                  {/* <div className="d-flex">

                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <hr className="fw-bold my-3"/>
          <p>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
