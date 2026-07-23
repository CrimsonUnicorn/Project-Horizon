import {type ReactNode } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="w-full grid min-h-screen w-full  grid-cols-1 md:grid-cols-[260px_1fr]">
      <Sidebar />

      <main className="overflow-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}

export default AppLayout;