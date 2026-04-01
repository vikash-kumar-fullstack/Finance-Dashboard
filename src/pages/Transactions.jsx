import Layout from "../layout/Layout";
import transactionsData from "../data/transactions";
import TransactionTable from "../components/transactions/TransactionTable";
import { useState, useContext } from "react";
import { RoleContext } from "../context/RoleContext";

function Transactions() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");

  const { role } = useContext(RoleContext);

  let filteredTransactions = transactionsData.filter((t) => {

    const matchesSearch =
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || t.type === filter;

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

      <h2 className="text-2xl font-semibold mb-6">
        Transactions
      </h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full md:w-64"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full md:w-40"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full md:w-40"
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>

      </div>
      {role === "admin" && (
        <button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Transaction
        </button>
      )}

      <TransactionTable transactions={filteredTransactions} />

    </Layout>
  );
}

export default Transactions;