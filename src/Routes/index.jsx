import { createBrowserRouter } from "react-router-dom";
import { App, Discover, SongDetails } from "../";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Discover />
      },
      {
        path: "/songs/:songid",
        element: <SongDetails />
      }
    ]
  },
]);
