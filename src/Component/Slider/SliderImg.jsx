import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SliderImg() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:true
  };
  return (
    <>
      <Slider {...settings} className="">
        <div className="">
            <img src={require("../../images/slider-image-1.jpeg")} alt="slide1"  style={{"height":"400px"}}   className="w-100" />
        </div>
        <div>
            <img src={require("../../images/slider-image-2.jpeg")} alt="slide2"  style={{"height":"400px"}}   className="w-100" />
        </div>
        <div>
            <img src={require("../../images/slider-image-3.jpeg")} alt="slide3"  style={{"height":"400px"}}   className="w-100" />
        </div>
        <div>
            <img src={require("../../images/grocery-banner.png")} alt="slide3"  style={{"height":"400px"}}   className="w-100" />
        </div>
        <div>
            <img src={require("../../images/grocery-banner-2.jpeg")} alt="slide3"  style={{"height":"400px"}}   className="w-100" />
        </div>

      </Slider>
    </>
  );
}
