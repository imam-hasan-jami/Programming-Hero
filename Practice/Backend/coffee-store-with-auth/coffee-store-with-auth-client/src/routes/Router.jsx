import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import UpdateCoffee from "../components/UpdateCoffee";
import Registration from "../components/Registration";
import Login from "../components/Login";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <div>404 Page Not Found</div>,
    children: [
        {
            index: true,
            loader: () => fetch('http://localhost:3000/coffees'),
            hydrateFallbackElement: <div>Loading...</div>,
            Component: Home,
        },
        {
            path: '/add-coffee',
            Component: AddCoffee,
        },
        {
            path: '/coffee/:id',
            loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
            hydrateFallbackElement: <div>Loading...</div>,
            Component: CoffeeDetails,
        },
        {
            path: '/update-coffee/:id',
            loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
            hydrateFallbackElement: <div>Loading...</div>,
            Component: UpdateCoffee,
        },
        {
            path: '/registration',
            Component: Registration,
        },
        {
            path: '/login',
            Component: Login,
        },
        {
            path: '/users',
            loader: () => fetch('http://localhost:3000/users'),
            hydrateFallbackElement: <div>Loading...</div>,
            Component: Users,
        }
    ]
  },
]);

export default router;