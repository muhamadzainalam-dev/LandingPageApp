'use client'

import { motion } from "framer-motion";
import { Clock, FileText, DollarSign, FolderOpen } from "lucide-react";
import { Card, CardContent } from "@/components/dashboard_ui/card";

const cards = [
  {
    title: "Hours Tracked",
    value: "38.5",
    subtitle: "This week",
    icon: Clock,
    color: "text-primary",
  },
  {
    title: "Invoices Sent",
    value: "12",
    subtitle: "This month",
    icon: FileText,
    color: "text-accent",
  },
  {
    title: "Earnings",
    value: "$4,250",
    subtitle: "This month",
    icon: DollarSign,
    color: "text-primary",
  },
  {
    title: "Active Projects",
    value: "8",
    subtitle: "In progress",
    icon: FolderOpen,
    color: "text-accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function OverviewCards() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ duration: 0.2 }}
          >
            <Card className="bg-card border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl glass-effect group-hover:scale-110 transition-transform duration-300 ${card.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {card.value}
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-card-foreground">
                    {card.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {card.subtitle}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
