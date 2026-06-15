import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Collection from "./pages/Collection.tsx";
import Layout from "./components/Layout.tsx";
import Achievements from "./pages/Achievements.tsx";
import Profile from "./pages/Profile.tsx";
import Settings from "./pages/Settings.tsx";
import Store from "./pages/Store.tsx";
import Login from "./pages/Login.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./config/theme.ts";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "collection",
        Component: Collection,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "settings",
        Component: Settings,
      },
      {
        path: "achievements",
        Component: Achievements,
      },
      {
        path: "store",
        Component: Store,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
