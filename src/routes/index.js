import { createBrowserRouter } from "react-router-dom";
import MockPage from "../pages/MockPage";

export default createBrowserRouter([
    {
        path: "/m/:uuid",
        element: <MockPage />,
    },
    {
        path: "/mock/:uuid",
        element: <MockPage />,
    },
]);