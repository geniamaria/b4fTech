import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Courses, Home, Contactos, Login } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contactos",
    element: <Contactos />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
