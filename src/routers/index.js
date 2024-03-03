import Home from "~/pages/Home/index";
import Following from "~/pages/Following/index";
import Upload from "~/pages/Upload/index";
import { HeaderOnly } from "~/components/Layout";
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
