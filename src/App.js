import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import LayOut from "./Component/LayOut/LayOut";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import NotFound from "./Component/NotFound/NotFound";
import Brands from "./Component/Brands/Brands";
import Cart from "./Component/Cart/Cart";
import ElectronicCategory from "./Component/Category/ElectronicCategory";
import WomanCategory from "./Component/Category/WomanCategory";
import ManCategory from "./Component/Category/ManCategory";
import Category from "./Component/Category/Category";
import AllCategory from "./Component/Category/AllCategory";
import MenCate from "./Component/Category/MenCate";
import WomanCate from "./Component/Category/WomanCate";
import ElectCate from "./Component/Category/elecCate";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import { ApiContextProvider } from "./Context/ApiContext/ApiContext";
import BrandCategory from './Component/Brands/BrandCategory';

function App() {
  const [UserData, setUserData] = useState(null);

  function saveUser() {
    const incodedToken = localStorage.getItem("UserToken");
    const decodedToken = jwtDecode(incodedToken);
    setUserData(decodedToken);
  }

  function handleLogOut() {
    setUserData(null);
  }

  const routers = createBrowserRouter([
    {
      index: "",
      element: <LayOut UserData={UserData} handleLogOut={handleLogOut} />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute UserData={UserData}>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: 'home',
          element: (
            <ProtectedRoute UserData={UserData}>
              <Home />
            </ProtectedRoute>
          ),
        }
        ,
        {
          path: "/productDetails/:id",
          element: (
            <ProtectedRoute UserData={UserData}>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "Category",
          element: (
            <ProtectedRoute UserData={UserData}>
              <Category />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute UserData={UserData}>
                  <AllCategory />
                </ProtectedRoute>
              ),
            },
            {
              path: "electronic",
              element: (
                <ProtectedRoute UserData={UserData}>
                  <ElectCate />
                </ProtectedRoute>
              ),
            },
            {
              path: "mens",
              element: (
                <ProtectedRoute UserData={UserData}>
                  <MenCate />
                </ProtectedRoute>
              ),
            },
            {
              path: "womans",
              element: (
                <ProtectedRoute UserData={UserData}>
                  <WomanCate />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "electCati",
          element: (
            <ProtectedRoute UserData={UserData}>
              <ElectronicCategory />
            </ProtectedRoute>
          ),
        },
        {
          path: "manCati",
          element: (
            <ProtectedRoute UserData={UserData}>
              <ManCategory />
            </ProtectedRoute>
          ),
        },
        {
          path: "womanCati",
          element: (
            <ProtectedRoute UserData={UserData}>
              <WomanCategory />
            </ProtectedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute UserData={UserData}>
              <Brands />
            </ProtectedRoute>
          )},
          {path : "brandCatigory/:id" ,  element : <BrandCategory/>}
          ,
        {
          path: "cart",
          element: (
            <ProtectedRoute UserData={UserData}>
              <Cart />
            </ProtectedRoute>
          ),
        },
        { path: "login", element: <Login saveUser={saveUser} /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
    <Toaster/>
      <ApiContextProvider>
        <RouterProvider router={routers} />
      </ApiContextProvider>
    </>
  );
}

export default App;
