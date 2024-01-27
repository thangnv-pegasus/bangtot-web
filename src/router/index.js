import routers from "../config/router";
import Home from "../pages/home";

const publicRouter = [
    {
        path: routers.home,
        component: Home
    }
]

const priveRouter = [

]



export {publicRouter, priveRouter}