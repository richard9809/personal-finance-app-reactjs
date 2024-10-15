import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Transaction from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Pots from "./pages/Pots";
import RecurringBills from "./pages/RecurringBills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/pots" element={<Pots />} />
        <Route path="/recurring" element={<RecurringBills />} />
      </Route>
    </Routes>
  );
}

export default App;
