import { useContext } from "react";
import { RoleContext } from "../context/RoleContext";
import { ThemeContext } from "../context/ThemeContext";

function Topbar({ setSidebarOpen }) {

  const { role, setRole } = useContext(RoleContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="w-full h-16 bg-white border-b flex items-center justify-between px-6">

      <div className="flex items-center gap-4">

        {/* Hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-xl"
        >
          ☰
        </button>

        <h1 className="text-xl font-semibold">
          Finance Dashboard
        </h1>

      </div>

      <div className="flex items-center gap-4">

        {/* Role Switch */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded-lg px-3 py-1"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        <button
          onClick={toggleTheme}
          className="border rounded-lg px-3 py-1"
        >
          🌙
        </button>

      </div>

    </div>
  );
}

export default Topbar;