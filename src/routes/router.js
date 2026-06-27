import { createBrowserRouter } from "react-router-dom";
import MarineICTPage from "../pages/MarineICTPage";
import DesignSystemPage from "../pages/DesignSystemPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MarineICTPage />,
  },
  {
    path: "/design-system",
    element: <DesignSystemPage />,
  },
]);
