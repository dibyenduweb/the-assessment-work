import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./components/Profile";
import Home from "./components/Home/Home";
import Service from "./components/Home/Service";
import ErrorPage from "./ErrorPage/ErrorPage";
import ServiceDetails from "./components/Home/ServiceDetails";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact/Contact";
// import Product from "./components/Home/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch('/musicapi.json')
        
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/service",
        element:<Service></Service>,
       
      },
      {
        path:"/details/:id",
        element:<ServiceDetails></ServiceDetails>,
        loader:() => fetch('/musicapi.json')
     
      },{
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/blog',
        element:<Blogs></Blogs>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
