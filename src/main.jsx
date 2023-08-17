import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "../src/routes/Root";
/*import Faq from "./routes/Faq";
import About from "./routes/About";
import Privacy from "./routes/Privacy";

*/
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Root />,
  },
  /*
  {
    path: "/about",

    element: <About />,
  },

  {
    path: "/faq",

    element: <Faq />,
  },

  {
    path: "/privacy-policy",

    element: <Privacy />,
  },*/
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);