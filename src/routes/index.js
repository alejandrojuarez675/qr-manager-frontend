import { createBrowserRouter } from "react-router-dom";
import MockPage from "../pages/MockPage";

export default createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
    },
    {
        path: "/m/:uuid",
        element: <MockPage />,
    },
    {
        path: "/mock/:uuid",
        element: <MockPage />,
    },
]);