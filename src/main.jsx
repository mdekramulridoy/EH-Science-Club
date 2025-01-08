import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Component/Pages/NotFound";
import Root from "./Root";
import Title from "./Component/Title";
import Home from "./Component/Home";
import { ThemeProvider } from "./ThemeSwitch/ThemeContext";
import Tutorials from "./Component/Pages/Tutorials";
import SciFi from "./Component/Pages/SciFi";
import Details from "./Component/Pages/Details";

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Title title="EH Science Club" />
            <Home />
          </>
        ),
      },
      {
        path: "tutorials",
        element: (
          <>
            <Title title="Tutorials" />
            <Tutorials></Tutorials>
          </>
        ),
      },
      {
        path: "sci-fi",
        element: (
          <>
            <Title title="Sci-Fi" />
            <SciFi></SciFi>
          </>
        ),
      },
      {
        path: "details/:id",
        element: (
          <>
            <Title title="Video Details" />
            <Details />
          </>
        ),
      },
    ],
  },
  {
    path: "*", 
    element: (
      <>
        <Title title="Page Not Found" />
        <NotFound />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
