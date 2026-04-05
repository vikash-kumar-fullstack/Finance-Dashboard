import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

function SummaryCards({ balance, income, expenses }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
      
      <div className="relative overflow-hidden bg-white/60 dark:bg-slate-900/40 backdrop-blur-lg p-5 lg:p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm transition-all duration-300 hover:-translate-y-1 min-w-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-slate-500 dark:text-slate-400 text-xs lg:text-sm font-medium uppercase tracking-wider">Total Balance</h3>
          <span className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400 shrink-0">
            <Wallet size={16} />
          </span>
        </div>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight wrap-break-word">
          ₹{balance.toLocaleString()}
        </p>
      </div>

      <div className="relative overflow-hidden bg-white/60 dark:bg-slate-900/40 backdrop-blur-lg p-5 lg:p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm transition-all duration-300 hover:-translate-y-1 min-w-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-slate-500 dark:text-slate-400 text-xs lg:text-sm font-medium uppercase tracking-wider">Monthly Income</h3>
          <span className="p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400 shrink-0">
            <TrendingUp size={16} />
          </span>
        </div>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight wrap-break-word">
          ₹{income.toLocaleString()}
        </p>
      </div>

      <div className="relative overflow-hidden bg-white/60 dark:bg-slate-900/40 backdrop-blur-lg p-5 lg:p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm transition-all duration-300 hover:-translate-y-1 min-w-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-slate-500 dark:text-slate-400 text-xs lg:text-sm font-medium uppercase tracking-wider">Total Expenses</h3>
          <span className="p-2 bg-rose-50 dark:bg-rose-500/10 rounded-lg text-rose-600 dark:text-rose-400 shrink-0">
            <TrendingDown size={16} />
          </span>
        </div>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight wrap-break-word">
          ₹{expenses.toLocaleString()}
        </p>
      </div>

    </div>
  );
}

export default SummaryCards;