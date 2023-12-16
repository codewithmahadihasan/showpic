import SignIn from "../Components/Auth/SignIn/SignIn"
import SignUp from "../Components/Auth/SignUp/SignUp"
import Error from "../Components/Error/Error"
import Home from "../Pages/Home"
import ProfilePage from "../Pages/ProfilePage"
import Upload from "../Pages/Upload"

const HomePath = [
    {
        path: "*",
        element: <Error />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/upload",
        element: <Upload />,
    },
    {
        path: "/user/:email",
        element: <ProfilePage />,
    },
]

export { HomePath }