import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Explore from "./pages/Explore";

function App() {
  const router = createBrowserRouter([
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/explore",
        element: <Explore />,
    },
    {
        path: "/",
        element: <Home />,
    },
]);
  return  <div >
     <RouterProvider router={router} />
   </div>;
}

export default App;
