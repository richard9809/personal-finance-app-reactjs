import React from 'react'

const Test = () => {
  return (
    <nav id="sidebar" className={isClosed ? "close" : ""}>
      <div className="logo">{isClosed ? <SmallLogo /> : <LargeLogo />}</div>

      <ul className="tabs" role="list">
        <li className="sidebar-tab">
          <NavLink
            className={({ isActive }) => (isActive ? " active" : "")}
            to="/"
          >
            <IconNavOverview isActive={({ isActive }) => isActive} />
            <span className="tab-name">Overview</span>
          </NavLink>
        </li>
        <li className="sidebar-tab">
          <NavLink
            className={({ isActive }) => (isActive ? " active" : "")}
            to="/transactions"
          >
            <IconNavTransactions />
            <span className="tab-name">Transactions</span>
          </NavLink>
        </li>
        <li className="sidebar-tab">
          <NavLink
            className={({ isActive }) => (isActive ? " active" : "")}
            to="/budgets"
          >
            <IconNavBudgets />
            <span className="tab-name">Budgets</span>
          </NavLink>
        </li>
        <li className="sidebar-tab">
          <NavLink
            className={({ isActive }) => (isActive ? " active" : "")}
            to="/pots"
          >
            <IconNavPots />
            <span className="tab-name">Pots</span>
          </NavLink>
        </li>
        <li className="sidebar-tab">
          <NavLink
            className={({ isActive }) => (isActive ? " active" : "")}
            to="/recurring"
          >
            <IconNavRecurringBills />
            <span className="tab-name">Recurring bills</span>
          </NavLink>
        </li>
      </ul>

      <button onClick={toggleSidebar}>
        {isClosed ? <IconCaretRight /> : <IconCaretLeft />}
        <span className="tab-name">Minimize window</span>
      </button>
    </nav>
  );
}

export default Test