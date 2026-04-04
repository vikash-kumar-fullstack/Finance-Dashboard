import { SearchX } from "lucide-react";

function TransactionTable({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800/60 p-12 text-center">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400 dark:text-slate-500">
          <SearchX size={32} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">No Transactions Found</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Adjust your search or filter settings to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800/60 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200/60 dark:border-slate-700/50">
              <th className="py-5 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
              <th className="py-5 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Description</th>
              <th className="py-5 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Category</th>
              <th className="py-5 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Amount</th>
              <th className="py-5 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
            {transactions.map((t) => (
              <tr key={t.id} className="group hover:bg-white/40 dark:hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{t.date}</td>
                <td className="py-4 px-6 text-sm font-medium text-slate-900 dark:text-slate-200">{t.description}</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
                    {t.category}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                  ₹{t.amount.toLocaleString()}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${t.type === "income" ? "bg-emerald-500" : "bg-rose-500"}`}></span>
                    <span className={`text-xs font-medium capitalize ${t.type === "income" ? "text-emerald-700 dark:text-emerald-400" : "text-rose-700 dark:text-rose-400"}`}>
                      {t.type}
                    </span>
                  </div>
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