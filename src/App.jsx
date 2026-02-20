import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import First from "./components/First";
import Second from "./components/Second";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "first", element: <First /> },
        { path: "second", element: <Second /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
