import Layout from "../layout/Layout";
import transactions from "../data/transactions";
import { calculateSummary } from "../utils/calculateSummary";
import SummaryCards from "../components/dashboard/SummaryCards";

function Dashboard() {

  const { income, expenses, balance } = calculateSummary(transactions);

  return (
    <Layout>

      <h2 className="text-2xl font-semibold mb-6">
        Dashboard Overview
      </h2>

      <SummaryCards
        balance={balance}
        income={income}
        expenses={expenses}
      />

    </Layout>
  );
}

export default Dashboard;