import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/Home.jsx';
import Phones from './components/Phones.jsx';
import Phone from './components/Phone.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "/phones",
        Component: Phones,
        loader: () => fetch("http://localhost:3000/phones"),
        hydrateFallbackElement: <div>Loading...</div>,
      },
      {
        path: "/phone/:id",
        Component: Phone,
        loader: ({ params }) => fetch(`http://localhost:3000/phones/${params.id}`),
        hydrateFallbackElement: <div>Loading...</div>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
