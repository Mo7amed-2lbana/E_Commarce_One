import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LodingScreen from "../LodingScreen/LodingScreen";
import { ApiContext } from "./../../Context/ApiContext/ApiContext";

export default function BrandCategory() {
  const { id } = useParams();
  const [brandCti, setBrandCti] = useState(null);
  const { addToCart } = useContext(ApiContext);
  async function getBrandCati() {
    const { data } = await axios.get(
      `https://route-ecommerce.onrender.com/api/v1/products`,
      {
        params: {
          brand: id,
        },
      }
    );
    setBrandCti(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    getBrandCati();
  }, []);
  return (
    <div className="container py-5">
      <div className="row">
        <>
          {brandCti ? (
            brandCti.map((pro, idx) => {
              return (
                <>
                  <div className="col-md-2" key={idx}>
                    <div className="item  p-3  rounded-3 shadow-sm overflow-hidden bg-white mx-2">
                      <img
                        src={pro.imageCover}
                        className="w-100"
                        alt={pro.title}
                      />
                      {/* navigate to ProductDetails */}
                      <Link
                        to={`/productDetails/${pro.id}`}
                        className="text-decoration-none"
                      >
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
                      {/* navigate to Cart */}
                      <button
                        onClick={function () {
                          addToCart(pro._id);
                        }}
                        className="text-decoration-none mx-auto addCart overflow-hidden btn btn-success d-flex justify-content-center align-items-center py-2 rounded-2 "
                      >
                        <span className="text-white">Add To Cart</span>
                        <i className="fa fa-cart-plus text-white fa-xl"></i>
                      </button>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <LodingScreen />
          )}
        </>
      </div>
    </div>
  );
}
