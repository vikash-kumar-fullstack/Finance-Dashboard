import { Link } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
        fixed md:static
        top-0 left-0
        w-64 h-full
        bg-gray-900 text-white
        transform
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        transition-transform duration-300
        z-50
        `}
      >

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <span className="text-2xl font-bold">FinDash</span>

          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 p-4">

          <Link to="/" className="hover:bg-gray-700 p-2 rounded">
            Dashboard
          </Link>

          <Link to="/transactions" className="hover:bg-gray-700 p-2 rounded">
            Transactions
          </Link>

          <Link to="/insights" className="hover:bg-gray-700 p-2 rounded">
            Insights
          </Link>

        </nav>

      </aside>
    </>
  );
}

export default Sidebar;