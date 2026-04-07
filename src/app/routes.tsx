import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Music } from "./components/Music";
import { Videos } from "./components/Videos";
import { Tour } from "./components/Tour";
import { Merch } from "./components/Merch";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "music", Component: Music },
      { path: "videos", Component: Videos },
      { path: "tour", Component: Tour },
      { path: "merch", Component: Merch },
      { path: "contact", Component: Contact },
    ],
  },
]);
