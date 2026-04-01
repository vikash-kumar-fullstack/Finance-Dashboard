import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout({ children }) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-6 bg-gray-100 min-h-screen">
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;