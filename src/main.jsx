import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import PostArchive from "./pages/PostArchive.jsx";
import SinglePost from "./pages/SinglePost.jsx";

import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "posts",
          element: <PostArchive />,
        },
        {
          path: "posts/:postId",
          element: <SinglePost />,
        },
      ],
    }
  ],
  {
    basename: "/sk-assignment",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
