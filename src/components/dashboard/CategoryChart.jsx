import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#6366f1", "#10b981", "#f43f5e", "#f59e0b", "#8b5cf6", "#06b6d4"];

function CategoryChart({ data }) {
  return (
    <div className="group relative overflow-hidden bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 dark:border-slate-800 h-full flex flex-col">
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/40 transition-all duration-700"></div>

      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-slate-800 dark:text-white text-xl font-black tracking-tight mb-6">
          Spending Breakdown
        </h3>
        
        <div className="flex-1 w-full min-h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="category"
                cx="50%"
                cy="45%"
                innerRadius={80}
                outerRadius={110}
                paddingAngle={8}
                cornerRadius={8}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(8px)", border: "none", borderRadius: "16px", padding: "12px 20px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                itemStyle={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}
                formatter={(value) => `₹${value}`}
              />
              <Legend 
                verticalAlign="bottom" 
                height={40} 
                iconType="circle" 
                iconSize={10}
                formatter={(value) => <span className="text-slate-600 dark:text-slate-300 font-medium ml-2">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default CategoryChart;