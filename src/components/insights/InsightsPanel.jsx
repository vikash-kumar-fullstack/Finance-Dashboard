function InsightsPanel({ highestCategory }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="group relative overflow-hidden bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 dark:border-slate-800">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-rose-100 dark:bg-rose-900/20 rounded-full blur-3xl group-hover:bg-rose-200 dark:group-hover:bg-rose-900/40 transition-all duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-rose-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">
              Top Expense
            </h3>
          </div>
          
          <p className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
            {highestCategory.category}
          </p>
          <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-orange-400">
            ₹{highestCategory.amount.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="group relative overflow-hidden bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 dark:border-slate-800">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/40 transition-all duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">
              Spending Trend
            </h3>
          </div>
          
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            Most of your expenses are currently concentrated in
          </p>
          <div className="mt-5 inline-block px-5 py-2 bg-linear-to-r from-indigo-500 to-purple-500 rounded-xl shadow-md transform group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold tracking-wide">
              {highestCategory.category}
            </span>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 dark:border-slate-800">
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/40 transition-all duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">
              Health Check
            </h3>
          </div>
          
          <p className="text-xl text-slate-800 dark:text-slate-200 font-bold leading-relaxed">
            Your income exceeds your expenses.
          </p>
          <p className="mt-3 text-emerald-600 dark:text-emerald-500 font-semibold">
            Maintaining a positive and healthy cash flow! Keep it up.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InsightsPanel;