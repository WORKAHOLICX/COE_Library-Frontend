import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import Logout from "./Logout";
import Login from "../AdminDashboard/LogIn/Login";
import Upload from "../AdminDashboard/Upload/Upload";
import Delete from "../AdminDashboard/Delete/DeleteFile";
import DashBoard from "../AdminDashboard/DasbBody/DashBoard";
import Course from "../AdminDashboard/Courses/Courses";

const ProtectedRoutes = () => {
  const { user } = useAuth();
  const routes = useRoutes([
    {
      path: "/",
      element: !user ? <Login /> : <Navigate replace to="/dashboard" />,
    },
    {
      path: "/dashboard",
      element: user ? <DashBoard /> : <Navigate replace to="/" />,
    },
    {
      path: "/dashboard/course",
      element: user ? <Course /> : <Navigate replace to="/" />,
    },
    {
      path: "/dashboard/upload",
      element: user ? <Upload /> : <Navigate replace to="/" />,
    },
    {
      path: "/dashboard/delete",
      element: user ? <Delete /> : <Navigate replace to="/" />,
    },
    {
      path: "/logout",
      element: user ? <Logout /> : <Navigate replace to="/" />,
    },
    {
      path: "/404",
      element: user ? <PageNotFound /> : <Navigate replace to="/" />,
    },
    {
      path: "*",
      element: <Navigate replace to="/404" />,
    },
  ]);

  return routes;
};

export default ProtectedRoutes;
