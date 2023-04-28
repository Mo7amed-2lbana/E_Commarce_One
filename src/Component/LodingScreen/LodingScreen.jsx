import React from "react";
import img from '../../images/Spinner-1s-200px.svg'
export default function LodingScreen() {
  return (
    <>
      <div className="loading-screen position-fixed start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center">
        <img src={img} className="bg-bg-transparent" alt="" />
      </div>
    </>
  );
}
