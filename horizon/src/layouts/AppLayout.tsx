import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="grid min-h-screen md:grid-cols-[260px_1fr]">
      <Sidebar />

      <main className="overflow-auto p-8">
        {children}
      </main>
    </div>
  );
}

export default AppLayout;