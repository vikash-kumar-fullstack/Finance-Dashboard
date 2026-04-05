import Layout from "../layout/Layout";
import transactions from "../data/transactions";
import TransactionTable from "../components/transactions/TransactionTable";
import { useState, useContext, useEffect } from "react";
import { RoleContext } from "../context/RoleContext";
import { Plus, Filter, ArrowUpDown } from "lucide-react";

function Transactions() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");
  const { role } = useContext(RoleContext);

  const [transactionsData, setTransactionsData] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : transactions;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactionsData));
  }, [transactionsData]);

  let filteredTransactions = transactionsData.filter((t) => {
    const matchesSearch =
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || t.type === filter;
    return matchesSearch && matchesFilter;
  });

  filteredTransactions = [...filteredTransactions].sort((a, b) => {
    if (sort === "date") return new Date(b.date) - new Date(a.date);
    if (sort === "amount") return b.amount - a.amount;
    return 0;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Transactions
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">
              Manage and track your recent activity
            </p>
          </div>
          {role === "admin" && (
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 active:scale-95">
              <Plus size={20} />
              <span>Add Transaction</span>
            </button>
          )}
        </div>

        {/* Filter Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 mb-8 flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search descriptions or categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 sm:w-44">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-2xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
              >
                <option value="all">All Types</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            <div className="relative flex-1 sm:w-44">
              <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-2xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
              >
                <option value="date">Sort by Date</option>
                <option value="amount">Sort by Amount</option>
              </select>
            </div>
          </div>
        </div>

        <TransactionTable transactions={filteredTransactions} />
      </div>
    </Layout>
  );
}

export default Transactions;