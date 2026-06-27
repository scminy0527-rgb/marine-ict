import { createBrowserRouter } from "react-router-dom";
import MarineICTPage from "../pages/main/MarineICTPage";
import DesignSystemPage from "../pages/DesignSystemPage";
import YoloTestPage from "../pages/example/YoloTestPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MarineICTPage />,
  },
  {
    path: "/design-system",
    element: <DesignSystemPage />,
  },
  {
    path: "/yolo-test",
    element: <YoloTestPage />,
  },
]);
