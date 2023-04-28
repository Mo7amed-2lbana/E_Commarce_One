import React from "react";
export default function Footer() {
  return (
    <>
      <footer className="py-5">
        <div className=" container">
          <h2 className="mb-2">Get The FreshCart app </h2>
          <p>
            We will send You a link open it on your photo to download the app
          </p>
          <div className="send">
            <div className="row gy-3  align-items-center">
              <div className="col-md-9 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email.."
                />
              </div>
              <div className="col-md-3 ">
                <button className="btn btn-success btn-lg ms-3 px-5">
                  {" "}
                  Share App Link
                </button>
              </div>
            </div>
          </div>
          <div className="pay py-4 mt-5 border-top border-bottom border-1 border-dark border-opacity-25">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="item d-flex align-items-center">
                <h6 className="me-4">Payment Partners </h6>
                <div className="icons">
                  <i class="fa-brands mx-3 fa-amazon-pay"></i>
                  <i class="fa-brands mx-3 fa-cc-amex"></i>
                  <i class="fa-brands mx-3 fa-cc-mastercard"></i>
                  <i class="fa-brands mx-3 fa-paypal"></i>
                </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <h6 className="me-3">Get deliveries with FreshCart</h6>
                <div className="parent d-flex">
                  <div className="child d-flex py-3 px-2 rounded-2 align-items-center bg-dark text-white me-3">
                  <i class="fa-brands fa-apple fa-2x me-2"></i>
                  <h4 className="my-0 ">APP Store</h4>
                  </div>
                  <div className="child d-flex py-3 px-2 rounded-2 align-items-center bg-dark text-white">
                  <i class="fa-brands fa-google-play fa-2x me-2"></i>
                  <h4 className="my-0 ">Google Play</h4>
                  </div>
                  </div>  
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-center mt-4  text-success fw-bold">By <span className="">Eng / Mohamed Elbana</span></h5>
      </footer>
    </>
  );
}
