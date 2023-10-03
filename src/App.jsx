// import React from 'react'
import Navbar from './components/navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from "./Layout/MainLayout";
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";


function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About/>,
        },
        {
          path: "contact",
          element: <Contact/>
        },
      ],
    },
  ]);
  return <RouterProvider router={routers}/>
}

export default App