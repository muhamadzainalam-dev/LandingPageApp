'use client';

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard_components/DashboardLayout";
import { InvoicesPreview } from "@/components/dashboard_components/InvoicesPreview";
import { Card, CardContent } from "@/components/dashboard_ui/card";
import { Button } from "@/components/dashboard_ui/button";
import { Badge } from "@/components/dashboard_ui/badge";
import { Plus, DollarSign, TrendingUp, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { InvoiceForm } from "@/components/forms/InvoiceForm";

const stats = [
  {
    title: "Total Revenue",
    value: "$12,450",
    change: "+12%",
    icon: DollarSign,
  },
  {
    title: "Pending Invoices",
    value: "8",
    change: "-4%",
    icon: FileText,
  },
  {
    title: "This Month",
    value: "$4,250",
    change: "+18%",
    icon: TrendingUp,
  },
];

export default function InvoicesPage() {
  const [showForm, setShowForm] = useState(false)

  const handleAddInvoice = newInvoice => {
    console.log("New invoice created:", newInvoice)
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div />
          <Button className="dashboard-gradient" onClick={() => setShowForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Create Invoice
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        stat.change.startsWith("+")
                          ? "bg-green-100 text-green-800 border-green-200"
                          : "bg-red-100 text-red-800 border-red-200"
                      }
                    >
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-card-foreground">
                      {stat.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Invoices List */}
        <InvoicesPreview />

        <InvoiceForm
          isOpen={showForm}
          onClose={() => setShowForm(false)}
          onSave={handleAddInvoice}
        />
      </div>
    </DashboardLayout>
  );
}
