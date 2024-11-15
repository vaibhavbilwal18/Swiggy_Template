import {lazy , Suspense, useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import  Header from "./components/Header";
import Body  from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
// import Grocery from "./components/Grocery";
import { useEffect ,  } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


 const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const [userInfo , setUserInfo] = useState();

  useEffect(() =>{
       const data = {
        name: " Vaibhav Bilwal"
       }
       setUserInfo(data.name);
  } , []);

    return (
      // If you want only for perticuler section then we can wrap this with that part like header 
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userInfo , setUserInfo}}>
      <div className = "app">
       <Header/>
       <Outlet/>
      </div>
      </UserContext.Provider>
      </Provider>
    );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback = {<h1>Loading... </h1>}> <Grocery/> </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resId",
        element : <RestaurantMenu/>

      },
      {
        path: "/cart",
        element : <Cart />
      }
    ],
    errorElement: <Error/>
  },
 
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router = { appRouter}/>
  
);