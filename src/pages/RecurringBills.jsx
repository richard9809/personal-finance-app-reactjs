import { useState } from "react";
import IconRecurringBills from "../components/icons/IconRecurringBills";
import PFASearchInput from "../components/PFASearchInput";
import PFASortButton from "../components/PFASortButton";
import IconBillPaid from "../components/icons/IconBillPaid";
import JsonData from "../../data.json";

const RecurringBills = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("Latest");

  // Extracting the latest transaction date (Emma Richardson - 19 August 2024)
  const latestTransactionDate = new Date("2024-08-19");
  const dueSoonCutoffDate = new Date(latestTransactionDate);
  dueSoonCutoffDate.setDate(latestTransactionDate.getDate() + 5);

  // Filter recurring transactions for August 2024
  const augustTransactions = JsonData.transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return (
      transactionDate.getMonth() === 7 && transactionDate.getFullYear() === 2024
    );
  });

  // Filter for recurring transactions
  const recurringTransactions = augustTransactions.filter(
    (transaction) => transaction.recurring
  );

  // Group by vendor, showing only one item per vendor
  const uniqueTransactionsByVendor = Object.values(
    recurringTransactions.reduce((acc, transaction) => {
      if (!acc[transaction.name]) {
        acc[transaction.name] = transaction;
      }
      return acc;
    }, {})
  );

  return (
    <div className="recurring-page">
      <h1>Recurring Bills</h1>

      <div className="section-1">
        <div className="card dark-background">
          <div className="card-body">
            <div className="total-bills">
              <IconRecurringBills />
              <div className="info">
                <h4>Total bills</h4>
                <p>$384.98</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="summary-card">
              <h3>Summary</h3>
              <div className="summaries">
                <div className="summary">
                  <span className="name">Paid Bills</span>
                  <span className="amount">2 ($320.00)</span>
                </div>
                <div className="summary">
                  <span className="name">Total Upcoming</span>
                  <span className="amount">6 ($1,230.00)</span>
                </div>
                <div className="summary">
                  <span className="name">Due Soon</span>
                  <span className="amount">2 ($40.00)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-headers">
          <div className="table-filters">
            <PFASearchInput
              placeholder="Search bills"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="filter-buttons">
              <PFASortButton sortType={sortType} onSortChange={setSortType} />
            </div>
          </div>
        </div>
        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>Bill Title</th>
                <th>Due Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="recepient">
                  <img
                    src="/assets/images/avatars/spark-electric-solutions.jpg"
                    alt="avatar"
                  />
                  <span>Spark Electric Solutions</span>
                </td>
                <td className="due-date">
                  <span>Monthly-1st</span>
                  <IconBillPaid />
                </td>
                <td className="amount">$100.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecurringBills;
