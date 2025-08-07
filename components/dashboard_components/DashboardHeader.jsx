'use client';

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/dashboard_ui/avatar";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardHeader({ sidebarWidth }) {
  const pathname = usePathname();

  const title = () => {
    switch (pathname) {
      case '/':
        return 'Dashboard';
      case '/pages/TimeTracker':
        return 'Time Tracker';
      case '/pages/Projects':
        return 'Projects';
      case '/pages/Invoices':
        return 'Invoices';
      case '/pages/Reports':
        return 'Reports';
      case '/pages/Settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 h-16 bg-background border-b border-border z-20 flex items-center justify-between px-6"
      style={{ left: sidebarWidth }}
    >
      <div className="flex items-center space-x-4">
        <h1 className="font-heading text-2xl font-semibold text-foreground">
          {title()}
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Profile */}
        <Link href="/settings">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              AK
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </motion.header>
  );
}
