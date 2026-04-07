import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-shell">
      <div className="dashboard-topbar">
        <div className="dashboard-topbar-inner">
          <div className="dashboard-brand">AGNUM Dashboard</div>
          <form action="/api/dashboard/logout" method="POST" className="dashboard-logout-form">
            <button type="submit" className="dashboard-logout-btn">
              Logout
            </button>
          </form>
        </div>
      </div>
      <main className="dashboard-main">{children}</main>
    </div>
  );
}

