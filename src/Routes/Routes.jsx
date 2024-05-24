import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Shop from "../Pages/Shop";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import MyCart from "../Pages/Dashboard/MyCart";
import UserHome from "../Pages/Dashboard/UserHome";
import MyReservation from "../Pages/Dashboard/MyReservation";
import MyPaymentHistory from "../Pages/Dashboard/MyPaymentHistory";
import AddReview from "../Pages/Dashboard/AddReview";
import MyBooking from "../Pages/Dashboard/MyBooking";
import PrivateRoute from "../Routes/PrivateRoute";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AdminRoute from "./AdminRoute";
import Error from "../Pages/Error";
import AddItem from "../Pages/Dashboard/Admin/AddItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    errorElement: <Error />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      //user's routes
      {
        index: true,
        element: <UserHome />,
      },
      {
        path: "/dashboard/myReservation",
        element: <MyReservation />,
      },
      {
        path: "/dashboard/myPaymentHistory",
        element: <MyPaymentHistory />,
      },
      {
        path: "/dashboard/myCart",
        element: <MyCart />,
      },
      {
        path: "/dashboard/addReview",
        element: <AddReview />,
      },
      {
        path: "/dashboard/myBooking",
        element: <MyBooking />,
      },

      // admin routes
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addItem",
        element: (
          <AdminRoute>
            <AddItem/>
          </AdminRoute>
        ),
      },
    ],
  },
]);
