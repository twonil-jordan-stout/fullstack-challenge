import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ClientForm from "./pages/ClientForm.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ClientUpdateForm from "./pages/ClientUpdateForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/client",
    element: <ClientForm />,
  },
  {
    path: "/update/:id",
    element: <ClientUpdateForm />,
  },
]);

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}></RouterProvider>
    </ApolloProvider>
  </React.StrictMode>
);
