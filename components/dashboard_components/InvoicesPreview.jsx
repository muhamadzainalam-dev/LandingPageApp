"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Plus, Eye, Download } from "lucide-react";
import { Button } from "@/components/dashboard_ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/dashboard_ui/card";
import { Badge } from "@/components/dashboard_ui/badge";
import { InvoiceForm } from "../forms/InvoiceForm";
import { InvoiceViewer } from "./InvoiceViewer";

const initialInvoices = [
  {
    id: "INV-001",
    client: "Acme Corp",
    amount: "$1,250",
    status: "paid",
    dueDate: "Jan 15, 2024",
  },
  {
    id: "INV-002",
    client: "TechStart Inc",
    amount: "$890",
    status: "pending",
    dueDate: "Jan 20, 2024",
  },
  {
    id: "INV-003",
    client: "Design Studio",
    amount: "$2,100",
    status: "overdue",
    dueDate: "Jan 10, 2024",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "paid":
      return "bg-green-100 text-green-800 border-green-200";
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "overdue":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

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

export function InvoicesPreview() {
  const [invoices, setInvoices] = useState(initialInvoices)
  const [showForm, setShowForm] = useState(false)
  const [selectedInvoice, setSelectedInvoice] = useState(null)
  const [showViewer, setShowViewer] = useState(false)

  const handleAddInvoice = newInvoice => {
    setInvoices([newInvoice, ...invoices])
  }

  const handleViewInvoice = invoice => {
    setSelectedInvoice(invoice)
    setShowViewer(true)
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <Card className="bg-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-heading text-xl text-card-foreground">
            Recent Invoices
          </CardTitle>
          <Button className="dashboard-gradient" onClick={() => setShowForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            New Invoice
          </Button>
        </CardHeader>
        <CardContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {invoices.map((invoice) => (
              <motion.div
                key={invoice.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-muted/10 rounded-lg border border-border hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">
                      {invoice.id}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {invoice.client}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-bold text-card-foreground">
                      {invoice.amount}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Due {invoice.dueDate}
                    </p>
                  </div>

                  <Badge
                    variant="outline"
                    className={getStatusColor(invoice.status)}
                  >
                    {invoice.status}
                  </Badge>

                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewInvoice(invoice)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
      <InvoiceForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSave={handleAddInvoice}
      />

      <InvoiceViewer
        invoice={selectedInvoice}
        isOpen={showViewer}
        onClose={() => setShowViewer(false)}
      />
    </motion.div>
  );
}
