import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">

        <Topbar setSidebarOpen={setSidebarOpen} />

        <main className="p-6 bg-gray-100 min-h-screen">
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;