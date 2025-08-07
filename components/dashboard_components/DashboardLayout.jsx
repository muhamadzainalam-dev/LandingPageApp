"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";

export function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarWidth = isCollapsed ? 80 : 280;

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      <DashboardHeader sidebarWidth={sidebarWidth} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="transition-all duration-300 pt-16"
        style={{ marginLeft: sidebarWidth }}
      >
        <div className="p-6">
          {children}
        </div>
      </motion.main>
    </div>
  );
}
