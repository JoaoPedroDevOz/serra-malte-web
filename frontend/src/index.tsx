import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AdminPage from "./pages/adminPage/adminPage";
import Login from "./pages/login/Login";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./Context/AuthContext";
import { OrdersProvider } from "./Context/OrdersContext";
import { CartProvider } from "./Context/CartContext";
import CartDrawer from "./components/CartDrawer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <OrdersProvider>
        <CartProvider>
          <App />
          <CartDrawer />
        </CartProvider>
      </OrdersProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
  },
  {
    path: "/admin",
    element: (
      <AuthProvider>
        <OrdersProvider>
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        </OrdersProvider>
      </AuthProvider>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
