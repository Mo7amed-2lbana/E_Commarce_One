import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LodingScreen from "../LodingScreen/LodingScreen";
import { ApiContext } from "../../Context/ApiContext/ApiContext";

export default function ProductDetails() {
  const {addToCart} = useContext(ApiContext);
  const [data, setdata] = useState(null);
  const { id } = useParams();
  async function getApis() {
    const { data } = await axios.get(
      `https://route-ecommerce.onrender.com/api/v1/products/${id}`
    );
    console.log(data.data);
    setdata(data.data);
  }

  useEffect(() => {
    getApis();
  }, []);

  return (
    <>
      {data ? (
        <div className="container  my-5 py-5 mx-auto  w-75">
          <div className="row align-items-center shadow-lg bg-white rounded-3">
            <div className="col-md-4">
              <div className="child ">
                <img src={data.imageCover} className="w-100" alt={data.title} />
              </div>
            </div>
            <div className="col-md-8">
              <h6 className="fw-bold lh-base">{data.title}</h6>
              <p className="text-muted mt-3 lh-2">{data.description}</p>
              <h6 className=" mx-2 mt-3 bp-3 text-success">
                {data.category.name}
              </h6>
              <div className="child mb-3  mt-5 d-flex justify-content-between align-items-center">
                <h6 className=" mx-2 text-black">{data.price} EGP</h6>
                <div className="icon d-flex justify-content-between">
                  <i className=" fa fa-star text-warning"></i>
                  <h6 className="ms-1 text-muted">{data.ratingsAverage}</h6>
                </div>
              </div>
              <button
                className="btn form-control btn-success"
                onClick={function () {
                  addToCart(data._id);
                }}
              >
                + add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LodingScreen />
      )}
    </>
  );
}
