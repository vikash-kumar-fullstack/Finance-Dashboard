function InsightsPanel({ highestCategory }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">
          Highest Spending Category
        </h3>

        <p className="text-xl font-bold mt-2">
          {highestCategory.category}
        </p>

        <p className="text-gray-600">
          ₹{highestCategory.amount}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">
          Spending Insight
        </h3>

        <p className="text-lg mt-2">
          Most of your expenses are in
          <span className="font-semibold">
            {" "} {highestCategory.category}
          </span>
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">
          Savings Observation
        </h3>

        <p className="text-lg mt-2">
          Your income currently exceeds your expenses,
          indicating positive cash flow.
        </p>
      </div>

    </div>
  );
}

export default InsightsPanel;