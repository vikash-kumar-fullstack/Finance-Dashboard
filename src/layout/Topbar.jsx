import { useContext } from "react";
import { RoleContext } from "../context/RoleContext";
import { ThemeContext } from "../context/ThemeContext";
import { Menu, Sun, Moon } from "lucide-react";

function Topbar({ setSidebarOpen }) {
  const { role, setRole } = useContext(RoleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-30 h-20 px-4 md:px-8 flex items-center justify-between bg-slate-50/70 dark:bg-slate-950/50 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-500">
      
      <div className="flex items-center gap-4">
        <button
          className="md:hidden p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 shadow-sm"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="appearance-none border border-slate-200 dark:border-slate-700/60 rounded-xl px-4 py-2 bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer backdrop-blur-md"
        >
          <option value="viewer">Viewer Mode</option>
          <option value="admin">Admin Mode</option>
        </select>

        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm backdrop-blur-md"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        
        <div className="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-500 to-purple-500 p-0.5 shadow-sm">
          <div className="w-full h-full bg-slate-900 rounded-full border-2 border-white dark:border-slate-900"></div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;