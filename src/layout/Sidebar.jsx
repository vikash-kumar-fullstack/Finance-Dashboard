import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">

      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        FinDash
      </div>

      <nav className="flex flex-col gap-2 p-4">

        <Link
          to="/"
          className="p-3 rounded-lg hover:bg-gray-700 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/transactions"
          className="p-3 rounded-lg hover:bg-gray-700 transition"
        >
          Transactions
        </Link>

        <Link
          to="/insights"
          className="p-3 rounded-lg hover:bg-gray-700 transition"
        >
          Insights
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;