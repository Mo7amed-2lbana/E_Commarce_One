import React, { useEffect } from "react";
import LodingScreen from "../LodingScreen/LodingScreen";
import { Link } from "react-router-dom";
import SliderImg from "../Slider/SliderImg";
import { useContext } from "react";
import { ApiContext } from "../../Context/ApiContext/ApiContext";

export default function WomanCategory() {
  const { getApisWoman, womanData, addToCart } = useContext(ApiContext);

  useEffect(() => {
    getApisWoman();
  }, []);

  return (
    <>
      {womanData ? (
        <div className="container mt-5">
          <SliderImg />
          <div className=" mt-5 head position-relative mb-5">
            <h2 className="text-center fw-bold text-success">Woman Category</h2>
          </div>
          <div className="row">
            {womanData.map((pro, idx) => {
              return (
                <>
                  <div key={idx} className="col-md-2 h-100">
                    <div className="item mx-2 overflow-hidden ">
                      <Link
                        to={`/productDetails/${pro.id}`}
                        className="text-decoration-none"
                      >
                        <img
                          src={pro.imageCover}
                          className="w-100"
                          alt={pro.title}
                        />
                        <h6 className=" mx-2 mt-3 bp-3 text-success">
                          {pro.category.name}
                        </h6>
                        <h5 className="text-center  text-dark">
                          {pro.title.split(" ").slice(0, 1)}
                        </h5>
                        <div className="child  mt-3 d-flex justify-content-between align-items-center">
                          <h6 className=" mx-2 text-black">{pro.price} EGP</h6>
                          <div className="icon d-flex justify-content-between">
                            <i className=" fa fa-star text-warning"></i>
                            <h6 className="ms-1 text-muted">
                              {pro.ratingsAverage}
                            </h6>
                          </div>
                        </div>
                      </Link>

                      <button
                        onClick={function () {
                          addToCart(pro._id);
                        }}
                        className=" mx-auto text-decoration-none addCart overflow-hidden btn btn-success d-flex justify-content-center align-items-center py-2 rounded-2 "
                      >
                        <span className="text-white">Add To Cart</span>
                        <i className="fa fa-cart-plus text-white fa-xl"></i>
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
            ;
          </div>
        </div>
      ) : (
        <LodingScreen />
      )}
    </>
  );
}
