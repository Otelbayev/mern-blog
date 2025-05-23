import Appeals from "../admin/appeals";
import Blog from "../admin/blog";
import BlogAdd from "../admin/blog-add";
import BlogUpdate from "../admin/blog-update";
import AdminHome from "../admin/home";
import Profile from "../admin/profile";
import Home from "../pages/Home";
import InsectID from "../pages/InsectID";
export const router = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 3,
    path: "/blog/:id",
    element: <InsectID />,
  },
];

export const admin = [
  {
    id: 4,
    path: "/admin-home",
    element: <AdminHome />,
  },
  {
    id: 5,
    path: "/blog",
    element: <Blog />,
  },
  {
    id: 6,
    path: "/blog/add",
    element: <BlogAdd />,
  },
  {
    id: 7,
    path: "/blog/edit/:id",
    element: <BlogUpdate />,
  },
  {
    id: 8,
    path: "/appeals",
    element: <Appeals />,
  },
  {
    id: 9,
    path: "/profile",
    element: <Profile />,
  },
];
