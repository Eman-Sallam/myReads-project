import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from "./views/HomeView";
import Layout from "./components/Layout/Layout";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import SearchView from "./views/SearchView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <HomeView /> },
      { path: "/search", element: <SearchView /> },
      { index: true, element: <RegisterView /> },
      { path: "/login", element: <LoginView /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
