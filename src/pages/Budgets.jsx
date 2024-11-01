import { defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import JsonData from "../../data.json";
import { useState } from "react";
import BudgetItem from "../components/BudgetItem";

defaults.maintainAspectRatio = true;
defaults.responsive = true;

const Budgets = () => {
  const [budgets] = useState(JsonData.budgets);
  const [transactions] = useState(JsonData.transactions);

  // Get the current date for filtering transactions by month
  const currentMonth = 7; // August (0-indexed)
  const currentYear = 2024;

  // Transform budgets with spentAmount and latestTransactions fields
  const enrichedBudgets = budgets.map((budget, index) => {
    const categoryTransactions = transactions.filter(
      (transaction) => transaction.category === budget.category
    );

    // Calculate the spentAmount for the currentMonth
    const spentAmount = categoryTransactions
      .filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return (
          transactionDate.getMonth() === currentMonth &&
          transactionDate.getFullYear() === currentYear
        );
      })
      .reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);

    // Get the latest transactions regardless of the month
    const latestTransactions = categoryTransactions
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      id: index + 1,
      ...budget,
      spentAmount,
      latestTransactions,
    };
  });

  console.log(enrichedBudgets);

  const cardBudgets = enrichedBudgets.map((budget) => (
    <BudgetItem key={budget.id} budget={budget} />
  ));

  return (
    <div className="budgets-page">
      <div className="section-1 flex-between">
        <h1>Budgets</h1>
        <button className="dark-cta-btn">+ Add New Budget</button>
      </div>
      <div className="budgets-content">
        <div className="summary">
          <div className="card">
            <div className="card-body">
              <div className="chart-container">
                <Doughnut
                  data={{
                    labels: enrichedBudgets.map((budget) => budget.category),
                    datasets: [
                      {
                        label: "Budget $",
                        data: enrichedBudgets.map(
                          (budget) => budget.spentAmount
                        ),
                        backgroundColor: enrichedBudgets.map(
                          (budget) => budget.theme
                        ),
                        hoverBackgroundColor: enrichedBudgets.map(
                          (budget) => budget.theme
                        ),
                        borderColor: enrichedBudgets.map(
                          (budget) => budget.theme
                        ),
                      },
                    ],
                  }}
                  options={{
                    cutout: "70%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="budgets-container">{cardBudgets}</div>
      </div>
    </div>
  );
};

export default Budgets;
