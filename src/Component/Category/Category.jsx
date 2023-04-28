import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import SliderImg from "../Slider/SliderImg";
import $ from 'jquery';
export default function Category() {
  const lists = document.querySelectorAll(".lists li");

  useEffect(() => {

    $('.lists li').click((e)=>{
      $('.lists li').removeClass("activeLi");
      document.querySelectorAll('.lists li').forEach((li)=>{
        li.addEventListener("click" , function(){
          li.classList.add("activeLi");
        })
      })
    })



  }, []);

  return (
    <>
      <div className="container mt-5">
        <SliderImg />
        <ul className="list-unstyled lists mt-5 justify-content-center pt-5 pb-3 d-flex">
          <li className="me-3 activeLi px-1 fs-5">
            <Link className="text-decoration-none text-secondary" to={""}>
              All
            </Link>
          </li>
          <li className="me-3 px-1 fs-5">
            <Link
              className="text-decoration-none text-secondary"
              to={"electronic"}
            >
              Electronic
            </Link>
          </li>
          <li className="me-3  px-1 fs-5">
            <Link className="text-decoration-none text-secondary" to={"mens"}>
              Mens
            </Link>
          </li>
          <li className="  px-1 fs-5">
            <Link className="text-decoration-none text-secondary" to={"womans"}>
              Womans
            </Link>
          </li>
        </ul>
        <Outlet></Outlet>
      </div>
    </>
  );
}
