import { createBrowserRouter } from "react-router-dom";
import ScrollToTop from "../Function/ScrollToTop";
import Default from "../Layout/Default";
import { HomePath } from "./HomePath";

const Router = createBrowserRouter([

    {
        path: "/",
        element: <>
            <ScrollToTop />
            <Default />
        </>,
        children: HomePath
    },
]);


export default Router;