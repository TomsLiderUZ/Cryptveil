import uniqueId from "../hooks/useId";
import Home from "../pages/home/index";
import NotPage from "../pages/notFound/index";

export const navbar = [
  {
    id: uniqueId,
    title: "Home - Cryptveil",
    path: "/home",
    element: <Home />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Cryption - Cryptveil",
    path: "/cryption",
    element: <Home />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Cryption - Cryptveil",
    path: "/cryption/create/text",
    element: <Home />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Cryption - Cryptveil",
    path: "/cryption/create/file",
    element: <Home />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Cryption - Cryptveil",
    path: "/cryption/create/text",
    element: <Home />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "Cryption - Cryptveil",
    path: "/cryption/inport/file",
    element: <Home />,
    private: false,
    hidden: false,
  },
  {
    id: uniqueId,
    title: "404 Not Found",
    path: "*",
    element: <NotPage />,
    private: false,
    hidden: false,
  },
];
