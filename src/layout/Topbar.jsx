import { useContext } from "react";
import { RoleContext } from "../context/RoleContext";

function Topbar() {

  const { role, setRole } = useContext(RoleContext);

  return (
    <div className="w-full h-16 bg-white border-b flex items-center justify-between px-6">

      <h1 className="text-xl font-semibold">
        Finance Dashboard
      </h1>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border rounded-lg px-3 py-1"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

    </div>
  );
}

export default Topbar;