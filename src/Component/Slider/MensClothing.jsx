import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LodingScreen from "./../LodingScreen/LodingScreen";
import { Link } from "react-router-dom";
import { ApiContext } from "../../Context/ApiContext/ApiContext";


export default function MensSlider() {
  const {mensData , getApisMens , addToCart} = useContext(ApiContext);
  useEffect(function () {
    getApisMens();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <>
      <div className=" parentMens position-relative p-2 mb-5">
      <h3 className="m-3 pb-2 border-bottom border-1"> Mens Featured Products </h3>

        <Slider {...settings}>
          {mensData ? (
            mensData.map((pro, idx) => {
              return (
                <div className="test" key={idx}>
                <div className="item border border-1 rounded-3 shadow-sm overflow-hidden bg-white mx-2">
                <img src={pro.imageCover} className="w-100" alt={pro.title}/>
                    {/* navigate to ProductDetails */}
                    <Link to={`/productDetails/${pro.id}`} className="text-decoration-none">
                    <h6 className=" mx-2 mt-3 bp-3 text-success">
                      {pro.category.name}
                    </h6>
                    <h5 className="text-center  text-dark">
                      {pro.title.split(" ").slice(0, 1)}
                    </h5>
                    <div className="child  mt-3 d-flex justify-content-between align-items-center">
                      <h6 className=" mx-2 text-black">{pro.price} EGP</h6>
                      <div className="icon mx-2 d-flex justify-content-between">
                        <i className=" fa fa-star text-warning"></i>
                        <h6 className="ms-1 text-muted">
                          {pro.ratingsAverage}
                        </h6>
                      </div>
                    </div>
                  </Link>
                    {/* navigate to Cart */}
                    <button
                    onClick={function(){addToCart(pro._id)}}
                    className="text-decoration-none mx-auto addCart overflow-hidden btn btn-success d-flex justify-content-center align-items-center py-2 rounded-2 "
                  
                  >
                    <span className="text-white">Add To Cart</span>
                    <i className="fa fa-cart-plus text-white fa-xl"></i>
                  </button>

                </div>
              </div>
              );
            })
          ) : (
            <LodingScreen />
          )}
        </Slider>
        <Link
          className="more position-absolute start-50 translate-middle-y"
          to={"/manCati"}
        >
          <i className=" fa fa-angle-double-down text-success fa-2x"></i>
        </Link>
      </div>
    </>
  );
}
