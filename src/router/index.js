import routers from "../config/router";
import About from "../pages/about";
import Dashboard from "../pages/admin/dashboard";
import ManageOrder from "../pages/admin/manage-order";
import ManageProduct from "../pages/admin/manage-product";
import ManageRevenue from "../pages/admin/manage-revenue";
import ManageUser from "../pages/admin/manage-user";
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

const adminRouter = [
  {
    path: routers.manageStore,
    component: Dashboard
  },
  {
    path: routers.manageOrder,
    component: ManageOrder
  },
  {
    path: routers.manageUser,
    component: ManageUser
  },
  {
    path: routers.manageProduct,
    component: ManageProduct
  },
  {
    path: routers.manageRevenue,
    component: ManageRevenue
  }
]

export { publicRouter, priveRouter, adminRouter };
