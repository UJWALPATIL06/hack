import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { DashboardNav } from "./DashboardNav";

export function Root() {
  const location = useLocation();
  const isDashboard = location.pathname.includes('dashboard') || 
                      location.pathname.includes('simulation') ||
                      location.pathname.includes('results') ||
                      location.pathname.includes('visualization') ||
                      location.pathname.includes('comparison') ||
                      location.pathname.includes('ai-recommendation') ||
                      location.pathname.includes('energy-savings') ||
                      location.pathname.includes('report');

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {isDashboard ? <DashboardNav /> : <Navbar />}
      <Outlet />
    </div>
  );
}
