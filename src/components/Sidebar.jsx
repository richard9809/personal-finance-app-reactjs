import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const tabs = [
    {
      icon: "/images/icon-nav-overview.svg",
      name: "Overview",
      path: "/"
    },
    {
      icon: "/images/icon-nav-transactions.svg",
      name: "Transactions",
      path: "/transactions"
    },
    {
      icon: "/images/icon-nav-budgets.svg",
      name: "Budgets",
      path: "/budgets"
    },
    {
      icon: "/images/icon-nav-pots.svg",
      name: "Pots",
      path: "/pots"
    },
    {
      icon: "/images/icon-nav-recurring-bills.svg",
      name: "Recurring bills",
      path: "/recurring"
    }
  ];

  return (
    <nav className="sidebar-tabs">
      <img
        className="logo"
        src="/images/logo-large.svg"
        alt="Logo Image"
        width="120"
      />
      <div className="tabs">
        {tabs.map((tab, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              isActive ? "sidebar-tab active" : "sidebar-tab"
            }
            to={tab.path}
          >
            <img
              className="icon"
              src={tab.icon}
              alt="Icon tab"
              width="25"
              height="25"
            />
            <span className="tab-name">{tab.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="tab-button">
        <img
          src="/images/icon-caret-left.svg"
          alt="Button Icon"
          width="25"
          height="25"
        />
        <span>Minimize Menu</span>
      </div>
    </nav>
  );
}

export default Sidebar