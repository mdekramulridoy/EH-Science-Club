import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Component/Pages/NotFound";
import Root from "./Root";
import Title from "./Component/Title";
import Home from "./Component/Home";
import { ThemeProvider } from "./ThemeSwitch/ThemeContext";

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
            <Title title="Home | Md. Ekramul Hoque" />
            <Home />
          </>
        ),
      },
    ],
  },
  {
    path: "*", // Catch-all route for 404
    element: (
      <>
        <Title title="Page Not Found" />
        <NotFound />
      </>
    ),
  },
]);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
     <ThemeProvider> {/* Wrap the whole app inside ThemeProvider */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
