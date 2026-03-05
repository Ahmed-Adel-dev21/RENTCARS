import React from "react";
import styles from "./Contacts.module.css";
import androud from "../assets/imges/landing-page/sec-7/andriod.png";
import ios from "../assets/imges/landing-page/sec-7/ios.png";
import iphone from "../assets/imges/landing-page/sec-7/iPhone-14.png";
import Footer from "../Footer/Footer";

export default function () {
  return (
    <>
      <div className={`container mt-5 pt-5 `}>
        <div className="row">
          <div className={`col-md-6  ${styles.backImg} `}>
            <h2>
              Download Rentcars App for
              <span className="text-primary"> FREE</span>
            </h2>
            <p>For faster, easier booking and exclusive deals.</p>
            <div className="d-flex justify-content-start my-2">
              <img className="mx-2 " src={androud} alt="androud" />
              <img src={ios} alt="ios" />
            </div>
            <form className="my-3">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control w-75"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control w-75"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control w-75"
                />
              </div>
              <div className=" w-75 text-center">
                <button type="submit" className={`btn ${styles.btnSubmet} text-white  `}>
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-end">
            <img className="w-50 " src={iphone} alt="" />
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
