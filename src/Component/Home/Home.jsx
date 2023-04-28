import React, {  useState } from "react";
import ElectronicSlider from "../Slider/ElectronicSlider";
import MensSlider from "./../Slider/MensClothing";
import SliderImg from "./../Slider/SliderImg";
import WomanClothing from "./../Slider/WomanClothing";


export default function Home() {

  return (
    <>
      <div className="container mt-5 py-5">
        <SliderImg />
        <ElectronicSlider  />
        <MensSlider />
        <WomanClothing />
      </div>
    </>
  );
}
