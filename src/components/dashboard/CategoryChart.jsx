import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#6366f1", "#10b981", "#f43f5e", "#f59e0b", "#8b5cf6"];

function CategoryChart({ data }) {
  const hasData = data && data.length > 0;

  return (
    <div className="bg-white dark:bg-slate-900 p-4 sm:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 h-full">
      <h3 className="text-slate-800 dark:text-white text-lg sm:text-xl font-black tracking-tight mb-4">
        Spending
      </h3>
      
      <div className="w-full h-75 sm:h-87.5">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={hasData ? data : []}
              dataKey="value"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={5}
              cornerRadius={6}
              stroke="none"
            >
              {hasData && data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#0f172a", border: "none", borderRadius: "12px", color: "#fff" }}
            />
            <Legend verticalAlign="bottom" iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CategoryChart;