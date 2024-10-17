import PFAFilterButton from "../components/PFAFilterButton";
import PFASearchInput from "../components/PFASearchInput";
import PFASortButton from "../components/PFASortButton";

const Transactions = () => {
  return (
    <div className="transaction-page">
      <h1>Transactions</h1>

      <div className="card">
        <div className="card-header">
          <div className="table-filters">
            <PFASearchInput placeholder="Search transaction" />
            <div className="filter-buttons">
              <PFASortButton />
              <PFAFilterButton />
            </div>
          </div>
        </div>

        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th className="recepient">Recipient/Sender</th>
                <th className="category">Category</th>
                <th className="date">Transaction Date</th>
                <th className="amount">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="recepient">
                  <img
                    src="/assets/images/avatars/emma-richardson.jpg"
                    alt="avatar"
                  />
                  <span>Emma Richardson</span>
                </td>
                <td className="name">Emma Richardson</td>
                <td className="category">General</td>
                <td className="date">29 Aug 2024</td>
                <td className="amount">75.50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <p>Card Footer</p>
        </div>
      </div>
    </div>
  );
}

export default Transactions