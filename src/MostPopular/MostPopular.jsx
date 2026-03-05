import React, { useState } from "react";
import styles from "./MostPopular.module.css";
import car1 from "../assets/imges/landing-page/sec-7/car1.png";
import car2 from "../assets/imges/landing-page/sec-7/car2.png";
import car3 from "../assets/imges/landing-page/sec-7/car3.png";
import car4 from "../assets/imges/landing-page/sec-7/car4.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Work from "../Work/Work";

export default function MostPopular() {
  let images = [car1, car2, car3, car4];

  let [searchTerm, setSearchTerm] = useState("");

  let [carList, setCarList] = useState([]);

  let getList = async () => {
    let response = await axios.get("https://myfakeapi.com/api/cars/");
    setCarList(response.data.cars);
  };

  useEffect(() => {
    getList();
    function getIndex(numm) {
      alert(numm);
    }
    return () => {};
  }, []);

  return (
    <>
      <div className="container my-5 py-5">
        <div
          className={`${styles.shadoColor} d-flex justify-content-evenly bg-light-subtle  w-75 mx-auto p-2 rounded-4`}
        >
          <i className="fa-solid fa-location-dot fs-5  d-flex justify-content-center text-center  align-content-center p-2 px-3"></i>

          <input
            className="form-control mx-3 w-75 border-0"
            placeholder="Search by car model ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // تحديث الكلمة فوراً
          />
          <button
            onClick={() => setFinalSearch(searchTerm)}
            className="btn btn-primary py-1 rounded-4 px-4 "
          >
            Search
          </button>
        </div>

        <div className="d-flex mt-5 justify-content-center mx-auto ">
          <button
            className={`btn text-primary px-5 ${styles.mainBg}`}
            type="button"
          >
            POPULAR RENTAL DEALS
          </button>
        </div>
        <h2 className="text-center my-3 mb-5">
          Most popular cars rental deals
        </h2>

        <div className="row my-5 g-3 justify-content-center ">
          {carList
            .filter((caar) =>
              caar.car_model.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .slice(0, 4) // لو عايز تعرض أول 4 نتايج بس من البحث
            .map((caar, index) => {
              const randomImage =
                images[Math.floor(Math.random() * images.length)];
              return (
                <div className="col-12 col-sm-6 col-lg-3   " key={index}>
                  <div className="bg-light-subtle shadow-lg rounded-4 p-3">
                    <img
                      className={`${styles.imgShape} d-flex p-3  mx-auto`}
                      src={randomImage}
                      alt="Random Car"
                    />
                    <h4>
                      {caar.car}
                      {/* <span className="fs-5 text-secondary">---<i className="fa-solid fa-angles-right fs-6 "></i> {caar.car_model} </span>  */}
                    </h4>
                    <i className="fa-solid fa-star my-2 text-warning"></i>
                    <span className="text-muted">(1345 reviews)</span>
                    <div className="d-flex my-1 justify-content-between">
                      <div>
                        <i className="fa-regular fa-user text-secondary"></i>{" "}
                        <span>4/2 Passanger</span>
                      </div>
                      <div>
                        <i className="fa-solid fa-snowflake text-secondary"></i>{" "}
                        <span>Air conditioning</span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div>
                        <i class="fa-solid fa-brush text-info"></i>{" "}
                        <span>{caar.car_color}</span>
                      </div>
                      <div>
                        <i class="fa-solid fa-calendar-days text-black"></i>{" "}
                        <span>{caar.car_model_year}</span>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex my-2 justify-content-between">
                      <div>
                        <i class="fa-solid fa-dollar-sign text-success"></i>
                        <span className="text-black fw-medium">Price</span>
                      </div>
                      <div>
                        <span>{caar.price}</span>
                      </div>
                    </div>
                    {/* <div className="d-flex  justify-content-between">
                      <div>
                        <i class="fa-solid fa-cart-arrow-down"></i>
                        <span className="text-black fw-medium">
                          Sale status
                        </span>
                      </div>
                      {caar.availability ? (
                        <h6 className={`  text-center text-success fw-bold `}>
                          Available
                        </h6>
                      ) : (
                        <h6
                          className={` text-center text-decoration-line-through  text-danger `}
                        >
                          Unavailable
                        </h6>
                      )}
                    </div> */}

                    <Link to="/details">
                      <button
                        onClick={() => getIndex(index)}
                        className="btn my-2 btn-primary fs-6 w-100 mx-auto"
                      >
                        Rent Now{" "}
                        <i class=" ms-3  fa-solid fa-arrow-right-long"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}

          <button
            className={`btn my-5 w-auto btn-outline-primary px-5 ${styles.btn_hover}  `}
            type="button"
          >
            <Link className={`${styles.link}`} to="popular">
              Show all vehicles
            </Link>
            <i
              class={`ms-3  fa-solid fa-arrow-right-long ${styles.arrow_right} text-primary`}
            ></i>
          </button>
        </div>
      </div>
      <Work />
    </>
  );
}
