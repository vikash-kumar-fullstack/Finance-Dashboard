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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Dashboard Overview
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm sm:text-base font-medium">
              Your financial summary at a glance.
            </p>
          </div>
        </div>

        <SummaryCards
          balance={balance}
          income={income}
          expenses={expenses}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 w-full">
            <BalanceChart data={balanceData} />
          </div>
          <div className="lg:col-span-1 w-full">
            <CategoryChart data={categoryData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;