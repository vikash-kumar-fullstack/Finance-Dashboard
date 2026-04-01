import { Link } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {

  return (
    <div
      className={`fixed md:static z-50 bg-gray-900 text-white w-64 h-full
      transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0 transition-transform duration-200`}
    >

      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        FinDash
      </div>

      <nav className="flex flex-col gap-2 p-4">

        <Link to="/" onClick={() => setSidebarOpen(false)}>Dashboard</Link>
        <Link to="/transactions" onClick={() => setSidebarOpen(false)}>Transactions</Link>
        <Link to="/insights" onClick={() => setSidebarOpen(false)}>Insights</Link>

      </nav>

    </div>
  );
}

export default Sidebar;