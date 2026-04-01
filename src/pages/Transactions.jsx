import Layout from "../layout/Layout";
import transactions from "../data/transactions";
import TransactionTable from "../components/transactions/TransactionTable";

function Transactions() {
  return (
    <Layout>

      <h2 className="text-2xl font-semibold mb-6">
        Transactions
      </h2>

      <TransactionTable transactions={transactions} />

    </Layout>
  );
}

export default Transactions;