import Layout from "../layout/Layout";
import transactions from "../data/transactions";
import { getHighestSpendingCategory } from "../utils/generateInsights";
import InsightsPanel from "../components/insights/InsightsPanel";

function Insights() {
  const highest = getHighestSpendingCategory(transactions);

  return (
    <Layout>
      {/* Added responsive padding and max-width container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-in fade-in duration-500">
        <div className="mb-4 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Financial Insights
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm sm:text-base font-medium leading-relaxed">
            AI-driven analysis of your spending habits and financial health.
          </p>
        </div>

        <InsightsPanel highestCategory={highest} />
      </div>
    </Layout>
  );
}

export default Insights;