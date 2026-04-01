export function getHighestSpendingCategory(transactions) {

  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  let highestCategory = null;
  let highestAmount = 0;

  Object.keys(categoryTotals).forEach((category) => {
    if (categoryTotals[category] > highestAmount) {
      highestAmount = categoryTotals[category];
      highestCategory = category;
    }
  });

  return {
    category: highestCategory,
    amount: highestAmount
  };
}