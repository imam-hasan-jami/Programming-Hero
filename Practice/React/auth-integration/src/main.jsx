import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './pages/Home';
import Root from './layouts/Root';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Orders from './pages/Orders';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "login",
            Component: Login,
          },
          {
            path: "signup",
            Component: Signup,
          },
          {
            path: "orders",
            // Component: Orders,
            element: <PrivateRoute><Orders /></PrivateRoute>
          }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
