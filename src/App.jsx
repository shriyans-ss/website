import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Interests from "./pages/Interests.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import { hasAbout } from "./data.js";

// A data router (rather than <HashRouter>) is what makes the View Transition
// API available to <Link viewTransition> and useViewTransitionState; the
// transition machinery lives in RouterProvider.
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "books", element: <Books /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogPost /> },
      { path: "interests", element: <Interests /> },
      // About stays absent from the route table, not just the nav, while
      // data/about.yaml has no bio.
      ...(hasAbout ? [{ path: "about", element: <About /> }] : []),
      { path: "*", element: <NotFound /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
