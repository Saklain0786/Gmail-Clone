import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Inbox from "./components/Inbox";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Mail from "./components/Mail";
import SendEmail from "./components/SendEmail";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <div className="bg-[#f6f8fc] h-screen">
      <RouterProvider router={appRouter} />
      <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SendEmail />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
