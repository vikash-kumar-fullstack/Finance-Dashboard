import Layout from "../layout/Layout";
import transactions from "../data/transactions";
import { getHighestSpendingCategory } from "../utils/generateInsights";
import InsightsPanel from "../components/insights/InsightsPanel";

function Insights() {

  const highestCategory =
    getHighestSpendingCategory(transactions);

  return (
    <Layout>

      <h2 className="text-2xl font-semibold mb-6">
        Financial Insights
      </h2>

      <InsightsPanel
        highestCategory={highestCategory}
      />

    </Layout>
  );
}

export default Insights;