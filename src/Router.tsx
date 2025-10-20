import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Auth from "./components/auth/Auth";
import ProductsPage from "./pages/products/ProductsPage";
import AdminPage from "./pages/products/AdminPage";

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
  {
    path: "/products",
    element: <ProductsPage/>,
  },
  {
    path: "/admin/products",
    element: <AdminPage />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
