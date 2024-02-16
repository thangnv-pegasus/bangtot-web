import routers from "../config/router";
import About from "../pages/about";
import Home from "../pages/home";
import Login from "../pages/login";
import Profile from "../pages/profile";
import Register from "../pages/register";

const publicRouter = [
  {
    path: routers.home,
    component: Home,
  },
  {
    path: routers.about,
    component: About,
  },
  {
    path: routers.login,
    component: Login,
  },
  {
    path: routers.register,
    component: Register,
  },
];

const priveRouter = [
  {
    path: routers.profile,
    component: Profile,
  },
];

export { publicRouter, priveRouter };
