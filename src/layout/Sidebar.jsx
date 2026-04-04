import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, CreditCard, Lightbulb, X, Activity } from "lucide-react";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `flex items-center px-4 py-3 mb-2 rounded-xl transition-all duration-300 font-medium ${
      isActive
        ? "bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300 ring-1 ring-indigo-600/20"
        : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/50"
    }`;
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm md:hidden z-40 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50
          transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:p-4 bg-transparent
        `}
      >
        <div className="h-full bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl md:rounded-3xl border-r md:border border-slate-200/50 dark:border-slate-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none flex flex-col">
          
          <div className="flex items-center justify-between p-6 mb-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                <Activity size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                FinDash
              </span>
            </div>
            <button
              className="md:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 overflow-y-auto">
            <Link to="/" className={getLinkClasses("/")} onClick={() => setSidebarOpen(false)}>
              <LayoutDashboard size={20} className="mr-3 opacity-80" />
              Dashboard
            </Link>
            <Link to="/transactions" className={getLinkClasses("/transactions")} onClick={() => setSidebarOpen(false)}>
              <CreditCard size={20} className="mr-3 opacity-80" />
              Transactions
            </Link>
            <Link to="/insights" className={getLinkClasses("/insights")} onClick={() => setSidebarOpen(false)}>
              <Lightbulb size={20} className="mr-3 opacity-80" />
              Insights
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;