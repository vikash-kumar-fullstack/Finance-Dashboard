import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function BalanceChart({ data }) {
  return (
    <div className="group relative overflow-hidden bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 dark:border-slate-800">
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl group-hover:bg-blue-200 dark:group-hover:bg-blue-900/40 transition-all duration-700"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-slate-800 dark:text-white text-xl font-black tracking-tight">
            Balance Trend
          </h3>
          <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full">
            Timeline
          </span>
        </div>

        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" opacity={0.2} vertical={false} />
              <XAxis 
                dataKey="date" 
                stroke="#94a3b8" 
                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }} 
                tickLine={false} 
                axisLine={false} 
                dy={10} 
              />
              <YAxis 
                stroke="#94a3b8" 
                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `₹${value}`} 
              />
              <Tooltip
                contentStyle={{ backgroundColor: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(8px)", border: "none", borderRadius: "16px", padding: "16px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                itemStyle={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}
                labelStyle={{ color: "#94a3b8", marginBottom: "4px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}
              />
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#3b82f6"
                strokeWidth={4}
                fillOpacity={1}
                fill="url(#colorBalance)"
                activeDot={{ r: 6, strokeWidth: 0, fill: "#3b82f6", stroke: "#fff" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default BalanceChart;