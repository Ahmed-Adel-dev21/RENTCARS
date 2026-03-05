import React from "react";
import styles from "../Home/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from '../assets/imges/nav/logo.png'
import carHome from '../assets/imges/landing-page/sec-7/car 2 1.png'
import androud from '../assets/imges/landing-page/sec-7/andriod.png'
import ios from '../assets/imges/landing-page/sec-7/ios.png'
import frame from '../assets/imges/landing-page/sec-7/Frame.png'
import { Link, Outlet } from "react-router-dom";
import MostPopular from '../MostPopular/MostPopular'


export default function Home() {
  return (
    <>
      <div className="container-fluid   vh-100 my-5 ">
        <img className={ `position-absolute top-0 end-0  z-n1 pt-5 ${styles.home} `}  src={frame} alt="" />
        <nav className="navbar navbar-expand-lg p-4  bg-transperent  ">
          <div className="container-fluid  ">
            <Link className="navbar-brand " to="home">
              <img className="w-100" src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarSupportedContent">
              <ul className="navbar-nav ps-5  mx-auto mb-2 mb-lg-0">
                <li className="nav-item ps-5">
                  <Link className="nav-link fs-5 fs-5 active" aria-current="page" to="">
                    Become a rintal
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="">
                    Rinatal deals 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="">
                    How it work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="">
                    Why choose us
                  </Link>
                </li>
              </ul>
            <div className="ms-auto ">
                <button className="btn btn-transperent text-black fs-5 ">Sing in</button>
                <button className="btn btn-primary fs-5">Sing out</button>
              </div>
          </div>
            </div>
        </nav>

        <div className={`${styles.home}  row  pb-5 justify-content-center  align-items-center   `}>
          <div className="col-md-4 text-center justify-content-center my-5 ">
            <h1 className="fw-semibold ">Find, book and <br/> rent a car  <span className="text-primary">Easily</span></h1>
            <p className="text-muted w-75 px-4 mx-auto ">
              Get a car wherever and whenever you need it with your IOS and Android device.
            </p>
            <div className="d-flex justify-content-center ">
              <img className="mx-2" src={androud} alt="androud" />
              <img src={ios} alt="ios" />
            </div>
          </div>
          <div className="col-md-8 d-flex  px-0 justify-content-end">

            <img className={`${styles.car_animation}   py-5 ps-5 `} src={carHome} alt="" />
            

          </div>
        </div>
      </div>
      
      <MostPopular/>
      <Outlet/>
    </>
  );
}
