import { SearchX, ArrowUpRight, ArrowDownLeft } from "lucide-react";

function TransactionTable({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center">
        <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400">
          <SearchX size={32} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">No Transactions</h3>
        <p className="text-sm text-slate-500">Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 lg:space-y-0">
      {/* MOBILE VIEW: Card List (Hidden on Large Screens) */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {transactions.map((t) => (
          <div key={t.id} className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl ${t.type === 'income' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10' : 'bg-rose-50 text-rose-600 dark:bg-rose-500/10'}`}>
                {t.type === 'income' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white leading-tight">{t.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-medium text-slate-400 uppercase">{t.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-xs font-bold text-blue-500 uppercase">{t.category}</span>
                </div>
              </div>
            </div>
            <p className={`font-black text-lg ${t.type === 'income' ? 'text-emerald-500' : 'text-slate-900 dark:text-white'}`}>
              {t.type === 'income' ? '+' : '-'}₹{t.amount.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* DESKTOP VIEW: Table (Hidden on Mobile) */}
      <div className="hidden lg:block bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <th className="py-5 px-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
              <th className="py-5 px-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Description</th>
              <th className="py-5 px-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Category</th>
              <th className="py-5 px-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</th>
              <th className="py-5 px-8 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group">
                <td className="py-5 px-8 text-sm font-medium text-slate-400">{t.date}</td>
                <td className="py-5 px-8 text-sm font-bold text-slate-900 dark:text-white">{t.description}</td>
                <td className="py-5 px-8">
                  <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tight">
                    {t.category}
                  </span>
                </td>
                <td className="py-5 px-8 text-sm font-black text-slate-900 dark:text-white">
                  ₹{t.amount.toLocaleString()}
                </td>
                <td className="py-5 px-8 text-right">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${t.type === "income" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" : "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.type === "income" ? "bg-emerald-500" : "bg-rose-500"}`}></span>
                    {t.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;