import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Private } from "./pages/private/private.tsx";
import { Tips } from "./pages/tips/Tips.tsx";
import { Finance } from "./pages/finance/finance.tsx";
import { CssBaseline } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/private",
    element: <Private />,
  },
  {
    path: "/tips",
    element: <Tips />,
  },
  {
    path: "/finance",
    element: <Finance />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline enableColorScheme>
      <RouterProvider router={router} />
    </CssBaseline>
  </React.StrictMode>
);
