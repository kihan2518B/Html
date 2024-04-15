import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import WorkBar from "./WorkBar";
import HomePage from "./pages/homePage";
import BrandSolution from "./pages/BrandSolution";
import TechSolution from "./pages/TechSolutions";
import MediaSolution from "./pages/MediaSolution";
import PartnershipPage from './pages/PartnershipPage'
import NewscenterPage from "./pages/NewscenterPage";
import NetworkPage from "./pages/NetworkPage";
import BlogsPage from "./pages/BlogsPage";
import WorkBar from "./pages/WorkBar";

import Layout from "./layout";

const router = createBrowserRouter([
  {
    element: (
      <Layout />
    ),
    children: [
      {
        path: '/',
        element: (<HomePage />)
      },
      {
        path: '/Brand-Solutions',
        element: (<BrandSolution />)
      },
      {
        path: '/Tech-Solutions',
        element: (<TechSolution />)
      },
      {
        path: '/Media-Solutions',
        element: (<MediaSolution />)
      },
      {
        path: '/Our-Partnerships',
        element: (<PartnershipPage />)
      },
      {
        path: '/News-Center',
        element: (<NewscenterPage />)
      },
      {
        path: '/S-S-Network',
        element: (<NetworkPage />)
      },
      {
        path: '/Blog',
        element: (<BlogsPage />)
      },
      {
        path: '/work',
        element: (<WorkBar />)
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
