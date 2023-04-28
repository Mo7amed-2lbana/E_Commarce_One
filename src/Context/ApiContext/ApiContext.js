import axios from "axios";

import { createContext, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export const ApiContext = createContext();

export function ApiContextProvider({ children }) {
  // get api data for electronic
  const [electronicData, setElEctronicData] = useState(null);
  async function getApi() {
    return axios
      .get("https://route-ecommerce.onrender.com/api/v1/products", {
        params: { category: "6439d2d167d9aa4ca970649f" },
      })
      .then((response) => {
        setElEctronicData(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => console.log(error));
  }

  // get api data for Man
  const [mensData, setMensData] = useState(null);
  async function getApisMens() {
    return axios
      .get("https://route-ecommerce.onrender.com/api/v1/products", {
        params: { category: "6439d5b90049ad0b52b90048" },
      })
      .then((response) => {
        setMensData(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => console.log(error));
  }

  // get api data for Woman
  const [womanData, setWomanData] = useState(null);
  async function getApisWoman() {
    return axios
      .get("https://route-ecommerce.onrender.com/api/v1/products", {
        params: { category: "6439d58a0049ad0b52b9003f" },
      })
      .then((response) => {
        setWomanData(response.data.data);
      })
      .catch((error) => console.log(error));
  }

  // api to show cart
  const [showCart, setShowCart] = useState(null);
  const [numOfCart, setNumOfCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  async function getApiCart() {
    const { data } = await axios.get(
      `https://route-ecommerce.onrender.com/api/v1/cart`,
      {
        headers: {
          token: localStorage.getItem("UserToken"),
        },
      }
    );
    setShowCart(data.data.products);
    console.log(data.data.products);
    setTotalPrice(data.data.totalCartPrice);
    setNumOfCart(data.numOfCartItems);
  }

  // api add to cart
  async function addToCart(id) {
    try {
      const { data } = await axios.post(
        `https://route-ecommerce.onrender.com/api/v1/cart`,
        {
          productId: id,
        },
        {
          headers: {
            token: localStorage.getItem("UserToken"),
          },
        }
      );
      if (data.status === "success") {
        toast.success(data.message);
        setNumOfCart(data.numOfCartItems);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Remove Product From Cart
  async function removeProduct(product_id) {
    try {
      const { data } = await axios.delete(
        `https://route-ecommerce.onrender.com/api/v1/cart/${product_id}`,
        {
          headers: {
            token: localStorage.getItem("UserToken"),
          },
        }
      );
      if (data.status === "success") {
        toast.success("Deleted");
        setNumOfCart(data.numOfCartItems);
        setTotalPrice(data.data.totalCartPrice);
        setShowCart(data.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  }



  // Ubdate Cart 
  async function ubdateCart(id , c){
    const {data} =  await axios.put(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,{
      count : c
    } ,{
      headers:{
        token : localStorage.getItem('UserToken')
      }
    });
    setTotalPrice(data.data.totalCartPrice);
    setShowCart(data.data.products);

    console.log(data.data.products);
    console.log(data.data.products[0].count);
  }



  return (
    <ApiContext.Provider
      value={{
        electronicData,
        getApi,
        mensData,
        getApisMens,
        womanData,
        getApisWoman,
        showCart,
        addToCart,
        getApiCart,
        totalPrice,
        numOfCart,
        removeProduct,
        ubdateCart,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
