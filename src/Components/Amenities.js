import React from "react";
import './Static/Amenities.css'

const Amenities = () => {
  return (
    <>
      <div>
        <div className="container con">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <h1 className="text-center my-2 text-dark font" id="amenities">
                Amenities
              </h1>
              <div className="row justify-content-between">
                <div className="col-lg-2 col-6 col-sm-4 col-md-3 m-auto pe ">
                  <img
                    src="./img/Amenities/Dining-Outlets.webp"
                    alt="banner1"
                    width="100%"
                    className="imgs px-5 pt-5"
                  />
                  <p className="text-center fs-5 text-dark heading">Dining Outlets</p>
                </div>
                <div className="col-lg-2 col-6 col-sm-4 col-md-3 m-auto pe">
                  <img
                    src="./img/Amenities/Gymnasium.webp"
                    alt="banner2"
                    width="100%"
                    className="imgs px-5 pt-5"
                  />
                  <p className="text-center fs-5 text-dark heading">Gymnasium</p>
                </div>
                <div className="col-lg-2 col-6 col-sm-4 col-md-3 m-auto pe ">
                  <img
                    src="./img/Amenities/Kids-Play-Area.webp"
                    alt="banner3"
                    width="100%"
                    className="imgs px-5 pt-5"
                  />
                  <p className="text-center fs-5 text-dark heading">Kids Play Area</p>
                </div>
                <div className="col-lg-2 col-6 col-sm-4 col-md-3 m-auto pe ">
                  <img
                    src="./img/Amenities/Park.webp"
                    alt="banner1"
                    width="100%"
                    className="imgs px-5 pt-5"
                  />
                  <p className="text-center  fs-5 text-dark heading">
                    Parks and Leisure Areas
                  </p>
                </div>
              </div>
              <div className="row justify-content-between reveal">
                <div className="col-lg-2 col-6 fs-5 col-sm-4 col-md-3 m-auto pe">
                  <img
                    src="./img/Amenities/Restaurants.webp"
                    alt="banner1"
                    width="100%"
                    className="imgs px-5 pt-5"
                  />
                  <p className="text-center fs-5 text-dark heading ">Restaurants</p>
                </div>
                <div className="col-lg-2 col-6 col-sm-4 col-md-3 m-auto pe">
                  <div >
                    <img
                      src="./img/Amenities/Shopping-Outlets.webp"
                      alt="banner2"
                      width="100%"
                      className="imgs px-5 pt-5"
                    />
                    <p className="text-center fs-5 text-dark heading ">Retail Outlets</p>
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4 col-md-3 m-auto pe">
                  <div>
                    <img
                      src="./img/Amenities/Supermarket.webp"
                      alt="banner3"
                      width="100%"
                      className="imgs px-5 pt-5"
                    />
                    <p className="text-center fs-5 text-dark heading">Supermarket</p>
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4 col-md-3 m-auto pe">
                  <img
                    src="./img/Amenities/Swimming-Pool.webp"
                    alt="banner3"
                    width="100%"
                    className="imgs px-5 pt-5"
                  />
                  <p className="text-center fs-5 text-dark heading">Swimming Pool</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;
