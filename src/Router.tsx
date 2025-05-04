import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Auth from "./components/auth/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Auth mode="login" />,
  },
  {
    path: "/signup",
    element: <Auth mode="signup" />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
