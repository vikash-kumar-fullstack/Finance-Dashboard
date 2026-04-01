function SummaryCards({ balance, income, expenses }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">Total Balance</h3>
        <p className="text-2xl font-bold mt-2">₹{balance}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">Total Income</h3>
        <p className="text-2xl font-bold text-green-600 mt-2">₹{income}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">Total Expenses</h3>
        <p className="text-2xl font-bold text-red-600 mt-2">₹{expenses}</p>
      </div>

    </div>
  );
}


export default SummaryCards;