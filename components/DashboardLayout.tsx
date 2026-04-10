import { ReactNode } from "react";
import Head from "next/head";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>AGNUM | Dashboard</title>
        <link rel="icon" type="image/svg+xml" href="/images/Logo-AGNUM.svg" />
        <link rel="shortcut icon" href="/images/Logo-AGNUM.svg" />
      </Head>
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
    </>
  );
}
