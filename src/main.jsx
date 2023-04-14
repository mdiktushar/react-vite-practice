import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Layout/Main/Main";
import Home from "./components/Home/Home";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Main />,
    children: [
      {
        path: `/`,
        element: <Home />,
      },
      {
        path: `/login`,
        element: <SignIn />,
      },
      {
        path: `register`,
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
