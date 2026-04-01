function TransactionTable({ transactions }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h3 className="text-lg font-semibold mb-4">Transactions</h3>

      <table className="w-full text-left">

        <thead className="border-b">
          <tr>
            <th className="py-2">Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b hover:bg-gray-50">

              <td className="py-2">{t.date}</td>

              <td>{t.description}</td>

              <td>{t.category}</td>

              <td className="font-medium">
                ₹{t.amount}
              </td>

              <td>
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    t.type === "income"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {t.type}
                </span>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default TransactionTable;