import { createHashRouter } from "react-router-dom";
import MockPage from "../pages/MockPage";

export default createHashRouter([
    {
        path: "/",
        element: <MockPage />,
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