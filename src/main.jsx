import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./Provider/AuthProvider";
import Orders from "./components/Orders";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./components/Profile";
import Home from "./components/Home/Home";
import Service from "./components/Home/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
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
        loader:() => fetch('/musicapi.json')
      },
      {
        path:"/orders",
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },{
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
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
