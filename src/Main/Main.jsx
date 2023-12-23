import { Outlet } from "react-router-dom";
import NavMenu from "../Pages/Home/Shared/Navbar/NavMenu";
import {  TableWithStripedColumns } from "../Pages/Home/Table/Table";
import Scrollspy from "react-scrollspy";

const Main = () => {
    return (
        <div>
            <Scrollspy items={['table', 'contact']} currentClassName="is-current">
            <NavMenu></NavMenu>
          <TableWithStripedColumns></TableWithStripedColumns>
            <Outlet></Outlet>
            {/* <FooterWithSitemap></FooterWithSitemap>
             */}
              </Scrollspy>
        </div>
    );
};

export default Main;