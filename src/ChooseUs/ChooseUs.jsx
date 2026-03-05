import React from "react";
import styles from "./ChooseUs.module.css";
import vector from "../assets/imges/landing-page/sec-5/Vector.png";
import car from "../assets/imges/landing-page/sec-5/Audi 1.png";
import message from "../assets/imges/landing-page/sec-5/message.png";
import user from "../assets/imges/landing-page/sec-5/user.png";
import chat from "../assets/imges/landing-page/sec-5/chat.png";
import Testimonials from "../Testimonials/Testimonials";

export default function ChooseUs() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={` ${styles.imgBack} col-lg-6   align-content-center  `}>
            <img
              className='w-100'
              src={car}
              alt="car "
            />
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
              We offer the best experience with our rental deals
            </h2>
            <div className="my-4 d-flex align-items-center">
              <img src={chat} alt="chat" />
              <div className="mx-5 pt-2">
                <h5>Best price guaranteed</h5>
                <p className="text-muted">
                  Find a lower price? We’ll refund you 100% of the difference.
                </p>
              </div>
            </div>
            <div className="my-4 d-flex align-items-center">
              <img src={chat} alt="chat" />
              <div className="mx-5 pt-2">
                <h5>Experience driver</h5>
                <p className="text-muted">
                  Don’t have driver? Don’t worry, we have many experienced
                  driver for you.{" "}
                </p>
              </div>
            </div>
            <div className="my-4 d-flex align-items-center">
              <img src={message} alt="chat" />
              <div className="mx-5 pt-2">
                <h5>24 hour car delivery</h5>
                <p className="text-muted">
                  Book your car anytime and we will deliver it directly to
                  you.{" "}
                </p>
              </div>
            </div>
            <div className="my-4 d-flex align-items-center">
              <img src={user} alt="chat" />
              <div className="mx-5 pt-2">
                <h5>24/7 technical support</h5>
                <p className="text-muted">
                  Have a question? Contact Rentcars support any time when you
                  have problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials/>
    </>
  );
}
