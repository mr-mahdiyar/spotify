import { createBrowserRouter } from "react-router-dom";
import { App, Discover } from "../";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Discover />
      }
    ]
  },
]);
