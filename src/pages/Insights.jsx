import Layout from "../layout/Layout";
import transactions from "../data/transactions";
import { getHighestSpendingCategory } from "../utils/generateInsights";
import InsightsPanel from "../components/insights/InsightsPanel";

function Insights() {
  const highest = getHighestSpendingCategory(transactions);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Financial Insights
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            AI-driven analysis of your spending habits and financial health.
          </p>
        </div>

        <InsightsPanel highestCategory={highest} />
      </div>
    </Layout>
  );
}

export default Insights;