import routers from "../config/router";
import About from "../pages/about";
import Home from "../pages/home";

const publicRouter = [
    {
        path: routers.home,
        component: Home
    },
    {
        path: routers.about,
        component: About
    }
]

const priveRouter = [

]



export {publicRouter, priveRouter}