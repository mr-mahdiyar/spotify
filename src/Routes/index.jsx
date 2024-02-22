import { createBrowserRouter } from "react-router-dom";
import { App } from "../";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
