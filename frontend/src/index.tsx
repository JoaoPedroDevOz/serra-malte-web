import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import AdminPage from "./pages/adminPage/adminPage";
import Login from "./pages/login/Login";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./Context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/home",
    element: <App />,
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
        <PrivateRoute>
          <AdminPage />
        </PrivateRoute>
      </AuthProvider>
    ),
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