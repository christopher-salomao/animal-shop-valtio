import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import FinishOrder from "./pages/FinishOrder";

import Layout from "./components/Layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "produtos/:id",
        element: <ProductDetails />,
      },
      {
        path: "meu-carrinho",
        element: <Cart />,
      },
      {
        path: "meu-carrinho/pedido-concluido",
        element: <FinishOrder />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);
