import Layout from "../layout/Layout";
import transactions from "../data/transactions";
import TransactionTable from "../components/transactions/TransactionTable";
import { useState, useContext, useEffect } from "react";
import { RoleContext } from "../context/RoleContext";

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
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactionsData)
    );
  }, [transactionsData]);

  let filteredTransactions = transactionsData.filter((t) => {
    const matchesSearch =
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || t.type === filter;
    return matchesSearch && matchesFilter;
  });

  filteredTransactions = [...filteredTransactions].sort((a, b) => {
    if (sort === "date") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sort === "amount") {
      return b.amount - a.amount;
    }
    return 0;
  });

  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Transactions
        </h2>
        {role === "admin" && (
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-md shadow-blue-500/30 flex items-center gap-2">
            <span>+</span> Add Transaction
          </button>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 flex flex-col md:flex-row gap-4 transition-colors duration-300">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search descriptions or categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
          />
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-48 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
        >
          <option value="all">All Types</option>
          <option value="income">Income Only</option>
          <option value="expense">Expense Only</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full md:w-48 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
      </div>

      <TransactionTable transactions={filteredTransactions} />
    </Layout>
  );
}

export default Transactions;