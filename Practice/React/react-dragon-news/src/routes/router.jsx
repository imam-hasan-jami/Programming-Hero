import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: "/category/:id",
            Component: CategoryNews,
            loader: () => fetch("/news.json"),
        },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
        {
            path: "/auth/login",
            Component: Login,
        },
        {
            path: "/auth/register",
            Component: Register,
        }
    ]
  },
  {
    path: "/news-details/:id",
    element: <PrivateRoute><NewsDetails /></PrivateRoute>,
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <div className="text-center text-3xl font-bold">404 Not Found</div>,
  }
]);

export default router;