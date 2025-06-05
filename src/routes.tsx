import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Courses, Home, Contactos, Login, Comunidade } from "./pages";

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
    path: "/comunidade",
    element: <Comunidade />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
