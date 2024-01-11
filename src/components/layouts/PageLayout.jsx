import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import PortalRoutes from "../../routes/PortalRoutes";
import Footer from "./Footer";

import menuList from "../../config/sidebarMenu";
import { createBrowserHistory } from "history";
export default function PageLayout() {
  const history = createBrowserHistory();
  return (
    <div className="container">
      <Sidebar history={history} menuList={menuList} />
      <div className="portal">
        <Header navList={["Home", "Notification", "Set Reminder"]} />
        <div className="content main-content">
          <PortalRoutes />
        </div>
        <Footer />
      </div>
    </div>
  );
}
