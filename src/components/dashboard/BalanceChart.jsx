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
    <div className="relative overflow-hidden bg-white dark:bg-slate-900 p-4 sm:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-slate-800 dark:text-white text-lg sm:text-xl font-black tracking-tight">
            Balance Trend
          </h3>
          <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
            Live
          </span>
        </div>

        <div className="w-full h-62.5 sm:h-87.5">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" opacity={0.1} vertical={false} />
              <XAxis 
                dataKey="date" 
                stroke="#94a3b8" 
                tick={{ fill: '#94a3b8', fontSize: 10 }} 
                tickLine={false} 
                axisLine={false}
                minTickGap={20}
              />
              <YAxis 
                stroke="#94a3b8" 
                tick={{ fill: '#94a3b8', fontSize: 10 }} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(val) => `₹${val}`} 
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#0f172a", border: "none", borderRadius: "12px", color: "#fff" }}
              />
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#colorBalance)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default BalanceChart;