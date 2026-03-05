import React from "react";
import styles from "./Work.module.css";
import img1 from "../assets/imges/landing-page/sec-3/location.png";
import img2 from "../assets/imges/landing-page/sec-3/calender.png";
import img3 from "../assets/imges/landing-page/sec-3/car-icon.png";
import image1 from "../assets/imges/landing-page/sec-3/ac.png";
import image2 from "../assets/imges/landing-page/sec-3/audi.png";
import image3 from "../assets/imges/landing-page/sec-3/jaguar.png";
import image4 from "../assets/imges/landing-page/sec-3/volvo.png";
import image5 from "../assets/imges/landing-page/sec-3/nissan.png";
import ChooseUs from "../ChooseUs/ChooseUs";

const logos = [image1, image2, image3, image4, image5];
export default function Work() {
  return (
    <>
      <div className="container-fluid  my-5">
        <div className="container">
          <div className="d-flex mt-5 justify-content-center mx-auto ">
            <button
              className={`btn text-primary px-5 ${styles.mainBg}`}
              type="button"
            >
              HOW IT WORK
            </button>
          </div>
          <h2 className="text-center my-3 mb-5 ">
            Rent with following 3 working steps
          </h2>
          <div className="row my-5 `">
            <div className="col-lg-4 text-center">
              <div>
                <img
                  className={`${styles.hovWork}`}
                  src={img1}
                  alt="location"
                />
                <h4 className="my-2">Choose location</h4>
                <p className="text-muted">Choose your and find your best car</p>
              </div>
            </div>
            <div className="col-lg-4  text-center">
              <div>
                <img
                  className={`${styles.hovWork}`}
                  src={img2}
                  alt="location"
                />
                <h4 className="my-2">Pick-up date</h4>
                <p className="text-muted">
                  Select your pick up date and time to book your car
                </p>
              </div>
            </div>
            <div className="col-lg-4  text-center">
              <div>
                <img
                  className={`${styles.hovWork}`}
                  src={img3}
                  alt="location"
                />
                <h4 className="my-2">Book your car</h4>
                <p className="text-muted">
                  Book your car and we will deliver it directly to you
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.logo_slider}`}>
          <div className={`${styles.logo_track}`}>
            {[...logos, ...logos].map((logo, index) => (
              <div
                className={`${styles.logo_item} d-flex align-items-center  `}
                key={index}
              >
                <img className="" src={logo} alt="brand logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChooseUs />
    </>
  );
}
