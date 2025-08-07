"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Clock,
  FolderOpen,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/dashboard_ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/Dashboard", icon: Home },
  { name: "Time Tracker", href: "/Dashboard/pages/TimeTracker", icon: Clock },
  { name: "Projects", href: "/Dashboard/pages/Projects", icon: FolderOpen },
  { name: "Invoices", href: "/Dashboard/pages/Invoices", icon: FileText },
  { name: "Reports", href: "/Dashboard/pages/Reports", icon: BarChart3 },
  { name: "Settings", href: "/Dashboard/pages/Settings", icon: Settings },
];

export function DashboardSidebar({ isCollapsed, setIsCollapsed }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  }, [pathname]);

  const sidebarVariants = {
    expanded: { width: 280 },
    collapsed: { width: 80 },
  };

  return (
    <motion.div
      initial="collapsed"
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-full bg-sidebar shadow-lg border-r border-sidebar-border z-30"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-sidebar-border">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 dashboard-gradient rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-sidebar-foreground">
                  Invocea
                </span>
                <p className="text-xs text-sidebar-foreground/60">Dashboard</p>
              </div>
            </motion.div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg transform scale-[1.02]"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-primary hover:transform hover:scale-[1.01]"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 flex-shrink-0 transition-colors",
                    isActive ? "text-primary-foreground" : "group-hover:text-sidebar-primary"
                  )}
                />
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                      "font-body font-medium",
                      isActive ? "text-primary-foreground" : ""
                    )}
                  >
                    {item.name}
                  </motion.span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-sidebar-border">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-destructive transition-all duration-200",
              isCollapsed && "justify-center px-2"
            )}
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="ml-3"
              >
                Logout
              </motion.span>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
