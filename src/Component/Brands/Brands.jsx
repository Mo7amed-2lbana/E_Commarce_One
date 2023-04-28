import axios from "axios";
import React, { useEffect, useState } from "react";
import LodingScreen from "./../LodingScreen/LodingScreen";
import { Link } from "react-router-dom";

export default function Brands() {
  const [apiBrand, setApiBrand] = useState(null);

  async function getApi() {
    const { data } = await axios.get(
      "https://route-ecommerce.onrender.com/api/v1/brands"
    );
    setApiBrand(data.data);
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="container mt-5 my-5">
        <div className="row gy-4 mt-5">
          {apiBrand ? (
            apiBrand.map((pro, idx) => {
              return (
                <div className="col-md-2" key={idx}>
                  <div className="border border-1 rounded-2 border-dark">

                  <Link to={`/brandCatigory/${pro._id}`}>
                    <img src={pro.image} alt={pro.name} className="w-100" />
                  </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <LodingScreen />
          )}
        </div>
      </div>
    </>
  );
}
