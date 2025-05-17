import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee";
import CoffeeDetails from "../components/CoffeeDetails";

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
            Component: CoffeeDetails,
        }
    ]
  },
]);

export default router;