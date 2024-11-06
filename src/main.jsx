import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import App from "./App";
import Accessories from "./components/Accessories/Accessories";
import AllGadgets from "./components/AllGadgets/AllGadgets";
import GadgetDetails from "./components/GadgetDetails/GadgetDetails";
import Category from "./components/Category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "category/:category",
            loader: async ({ params }) => {
              const response = await fetch("/gadgets.json");
              if (!response.ok) throw new Error("Failed to load gadgets data");

              const data = await response.json();

              // Filter gadgets based on the category from params
              const { category } = params;
              const filteredData =
                category === "all"
                  ? data.gadgets // Show all gadgets if category is "all"
                  : data.gadgets.filter(
                      (gadget) => gadget.category === category
                    );

              if (filteredData.length === 0) {
                throw new Error("No gadgets found for this category");
              }

              return filteredData; // Return only the filtered data for the selected category
            },
            element: <Category />,
          },
        ],
      },
      {
        path: "/:product_id",
        loader: ({ params }) => fetch("/gadgets.json"),
        element: <GadgetDetails></GadgetDetails>,
      },
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
