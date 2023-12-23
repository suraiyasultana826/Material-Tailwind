import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import { FooterWithSitemap } from "../Pages/Home/Shared/Footer/Footer";
import { TableWithStripedColumns } from "../Pages/Home/Table/Table";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/contact',
            element: <FooterWithSitemap></FooterWithSitemap>
        },
        {
            path:'/table',
            element: <TableWithStripedColumns></TableWithStripedColumns>
        }
      ]
    },
  ]);
  export default router;