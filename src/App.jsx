import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/Errorpage/ErrorPage";

const route = createBrowserRouter([
  {
    path: "",
    element: <Layout></Layout>,
    children: [
      { path: "", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "portfolio", element: <Portfolio></Portfolio> },
      { path: "contact", element: <Contact></Contact> },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
