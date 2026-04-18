import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const isBase = location.pathname === "/dashboard";

  return (
    <div>
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Manage your profile and settings</p>
      </div>

      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <NavLink to="/dashboard/profile" className={({ isActive }) => `dash-link${isActive ? " active" : ""}`}>
            👤 Profile
          </NavLink>
          <NavLink to="/dashboard/settings" className={({ isActive }) => `dash-link${isActive ? " active" : ""}`}>
            ⚙️ Settings
          </NavLink>
        </aside>

        <div className="dashboard-content">
          {isBase ? (
            <div className="dashboard-home">
              <h2>Select a section</h2>
              <p>Choose Profile or Settings from the sidebar to get started.</p>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
}