import React, { useEffect, useState } from "react";
import styles from "./Details.module.css";
import car from "../assets/imges/landing-page/sec-5/Audi 1.png";
import axios from "axios";

export default function Details() {
  let [carList, setCarList] = useState([]);

  let getList = async () => {
    let response = await axios.get("https://myfakeapi.com/api/cars/");
    setCarList(response.data.cars);
  };

  useEffect(() => {
    getList();

    return () => {};
  }, []);
  return (
    <>
      <div className="container-fluid my-5 py-5">
        <div className="row my-5">
          <div
            className={` ${styles.imgBack} col-lg-6 p-0   align-content-center  `}
          >
            <img className="p-0 m-0 w-100" src={car} alt="car " />
          </div>
          <div className="col-lg-6">
            <div className=" mt-5  mx-auto ">
              <button
                className={`btn text-uppercase text-primary px-5 ${styles.mainBg}`}
                type="button"
              >
                why choose us
              </button>
            </div>
            <h2 className=" w-75 my-3 mb-5">
              We offer the best experience <br /> with our rental deals
            </h2>
            <div className="my-2">
              <i className="me-5 fa-regular fa-user text-secondary"></i>
              <span> 4/2 Passanger</span>
            </div>

            <div className="my-2">
              <i className="me-5 fa-solid fa-snowflake text-secondary"></i>
              <span> Air conditioning</span>
            </div>

            {/* <div className="my-2">
              <i className="me-5 fa-solid fa-brush text-info"></i>
              <span>
                {carList.car_color}

                red
                </span>
            </div> */}

            <div className="my-2">
              <i className="me-5 fa-solid fa-calendar-days text-black"></i>
              <span>
                {/* {carList[5].car_model_year} */}
                2009
              </span>
            </div>

            <div className="d-flex my-2 ">
              <div>
                <i className="fa-solid fa-dollar-sign text-success "></i>
                <span className="me-3 text-black fw-medium">Price</span>
              </div>
              <div>
                <span className="text-bold">
                  {/* {carList[5].price} */}
                  $2814.46
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
