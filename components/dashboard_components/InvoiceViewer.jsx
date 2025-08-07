import { motion } from "framer-motion";
import { FileText, Calendar, DollarSign, User } from "lucide-react";
import { Button } from "@/components/dashboard_ui/button";
import { Badge } from "@/components/dashboard_ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/dashboard_ui/dialog";

const getStatusColor = (status) => {
    switch (status) {
        case "paid":
            return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800";
        case "pending":
            return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800";
        case "overdue":
            return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800";
        default:
            return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800";
    }
};

export function InvoiceViewer({ invoice, isOpen, onClose }) {
    if (!invoice) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <FileText className="h-5 w-5 text-primary" />
                        </div>
                        Invoice {invoice.id}
                    </DialogTitle>
                </DialogHeader>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    {/* Invoice Header */}
                    <div className="flex items-center justify-between p-6 bg-muted/50 rounded-lg">
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold">{invoice.id}</h3>
                            <p className="text-muted-foreground">Invoice Details</p>
                        </div>
                        <Badge variant="outline" className={getStatusColor(invoice.status)}>
                            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                        </Badge>
                    </div>

                    {/* Invoice Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <User className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Client</p>
                                    <p className="font-medium">{invoice.client}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Due Date</p>
                                    <p className="font-medium">{invoice.dueDate}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <DollarSign className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Amount</p>
                                    <p className="text-2xl font-bold text-primary">{invoice.amount}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Invoice Items (Mock Data) */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Invoice Items</h4>
                        <div className="border rounded-lg overflow-hidden">
                            <div className="bg-muted/50 p-3 border-b">
                                <div className="grid grid-cols-4 gap-4 text-sm font-medium">
                                    <span>Description</span>
                                    <span>Quantity</span>
                                    <span>Rate</span>
                                    <span className="text-right">Total</span>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="grid grid-cols-4 gap-4 text-sm">
                                    <span>Web Development Services</span>
                                    <span>1</span>
                                    <span>{invoice.amount}</span>
                                    <span className="text-right font-medium">{invoice.amount}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                        <Button className="flex-1">Download PDF</Button>
                        <Button variant="outline" className="flex-1">Send Email</Button>
                        <Button variant="outline" onClick={onClose}>Close</Button>
                    </div>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
}
