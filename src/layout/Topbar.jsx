function Topbar() {
  return (
    <div className="w-full h-16 bg-white border-b flex items-center justify-between px-6">

      <h1 className="text-xl font-semibold">
        Finance Dashboard
      </h1>

      <div className="flex items-center gap-4">

        <select className="border rounded-lg px-3 py-1">
          <option>Viewer</option>
          <option>Admin</option>
        </select>

      </div>

    </div>
  );
}

export default Topbar;