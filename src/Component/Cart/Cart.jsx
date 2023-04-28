import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../Context/ApiContext/ApiContext";
import LodingScreen from "./../LodingScreen/LodingScreen";

export default function Cart() {
  const { getApiCart, showCart, numOfCart, removeProduct, totalPrice , ubdateCart , productUdate } =
    useContext(ApiContext);
    const [val, setVal] = useState(0)
    function getVall(){
      setVal(document.querySelector("#up").value);
      console.log(val);
    }
  useEffect(() => {
    getApiCart();
  }, []);
  return (
    <>
      {showCart ? (
        showCart.length > 0 ? (
          <div className="container mt-5 py-5">
            <h3 className="border-bottom border-1 pb-2">Shoping Cart :</h3>
            <div className="row gy-4">
              {showCart ? (
                showCart.map((pro, idx) => {
                  return (
                    <>
                      <div className="col-md-12" key={idx}>
                        <div className="child bg-white  border-bottom border-1  my-4 d-flex flex-column flex-md-row">
                          <img
                            style={{ height: "250px" }}
                            src={pro.product.imageCover}
                            alt={pro.title}
                            className="mx-auto mx-md-5"
                          />{" "}
                          <h3>{}</h3>
                          <div className="details mx-auto ms-md-3 ">
                            <h5 className=" text-center text-md-start">
                              {pro.product.title}{" "}
                            </h5>
                            <span className="my-3 text-success text-center text-md-start d-block">
                              {pro.product.category.name}{" "}
                            </span>
                            <h6 className="mt-3 text-center text-md-start">
                              Brand :{" "}
                              <span className="text-muted">
                                {pro.product.brand.name}
                              </span>
                            </h6>
                            <h6 className="mt-3 text-center text-md-start">
                              Category :{" "}
                              <span className="text-muted">
                                {pro.product.subcategory[0].name}
                              </span>
                            </h6>
                            <div className="btns text-center text-md-start">
                              <select
                              onChange={getVall}
                                name="up"
                                id="up"
                                className="px-2 py-1 mt-3 rounded-3"
                              >
                                <option value="Count" disabled> count</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                              
                                <button className="btn btn-warning ms-2" onClick={function(){ubdateCart(pro.product._id , val)}}>Ubdate</button>
                              <button
                                className="mx-2 btn btn-danger"
                                onClick={function () {
                                  removeProduct(pro.product._id);
                                }}
                              >
                                Delete
                              </button>
                              <button className="btn btn-primary my-2">
                                Buy Now
                              </button>
                            </div>
                          </div>
                          <div className="price">
                            <h6 className="fw-bold mt-3 text-center text-md-start">
                              price : <span className="fw-bold"> ${pro.price}</span>
                            </h6>
                            <h6 className="fw-bold mt-3 text-center text-md-start">
                              Count : {pro.count}
                            </h6>
                            <h6 className="fw-bold mt-3 text-center text-md-start">
                              Total : ${pro.count * pro.price}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <LodingScreen />
              )}

              <div className="total mt-0 d-flex justify-content-between ">
                <h6 className="text-center fw-bold text-bg-success p-2 rounded-2">
                  Items : <span className="fw-bold">{numOfCart}</span>
                </h6>
                <h6 className="text-end fw-bold">
                  Total Price : <span className="  ">$ {totalPrice}</span>
                </h6>
              </div>
            </div>
          </div>
        ) :(
          <div className="container mt-5 d-flex justify-content-center align-items-center py-5">
            <h2 className="fw-bold text-danger mt-5">The Shopping Cart is empty</h2>
          </div>
        )
      ) : (
        <LodingScreen />
      )}
    </>
  );
}
