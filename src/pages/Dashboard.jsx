import Layout from "../layout/Layout";
import transactions from "../data/transactions";
import { calculateSummary } from "../utils/calculateSummary";
import { generateBalanceTrend, generateCategoryData } from "../utils/chartData";

import SummaryCards from "../components/dashboard/SummaryCards";
import BalanceChart from "../components/dashboard/BalanceChart";
import CategoryChart from "../components/dashboard/CategoryChart";

function Dashboard() {
  const { income, expenses, balance } = calculateSummary(transactions);

  const balanceData = generateBalanceTrend(transactions);
  const categoryData = generateCategoryData(transactions);

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

      <SummaryCards
        balance={balance}
        income={income}
        expenses={expenses}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BalanceChart data={balanceData} />
        <CategoryChart data={categoryData} />
      </div>

    </Layout>
  );
}

export default Dashboard;