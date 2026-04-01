export function generateBalanceTrend(transactions) {
  let balance = 0;

  const sorted = [...transactions].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return sorted.map((t) => {
    if (t.type === "income") {
      balance += t.amount;
    } else {
      balance -= t.amount;
    }

    return {
      date: t.date,
      balance: balance
    };
  });
}


export function generateCategoryData(transactions) {
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  return Object.keys(categoryMap).map((category) => ({
    category: category,
    value: categoryMap[category]
  }));
}