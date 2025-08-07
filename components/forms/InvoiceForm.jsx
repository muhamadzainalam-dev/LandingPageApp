"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Save } from "lucide-react";
import { Button } from "@/components/dashboard_ui/button";
import { Input } from "@/components/dashboard_ui/input";
import { Label } from "@/components/dashboard_ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/dashboard_ui/select";
import { Textarea } from "@/components/dashboard_ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/dashboard_ui/card";
import { useToast } from "@/hooks/use-toast";

export function InvoiceForm({ isOpen, onClose, onSave }) {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        client: "",
        amount: "",
        description: "",
        dueDate: "",
        status: "pending",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.client || !formData.amount) {
            toast({
                title: "Error",
                description: "Please fill in required fields",
                variant: "destructive",
            });
            return;
        }

        const invoice = {
            id: `INV-${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
            ...formData,
            amount: `$${formData.amount}`,
            createdDate: new Date().toLocaleDateString(),
        };

        onSave(invoice);
        toast({
            title: "Success",
            description: "Invoice created successfully",
        });

        onClose();
        setFormData({
            client: "",
            amount: "",
            description: "",
            dueDate: "",
            status: "pending",
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-md"
            >
                <Card className="bg-card border-border">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="font-heading">Create New Invoice</CardTitle>
                        <Button variant="ghost" size="sm" onClick={onClose}>
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="client">Client *</Label>
                                <Select
                                    value={formData.client}
                                    onValueChange={(value) =>
                                        setFormData({ ...formData, client: value })
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select client" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Acme Corp">Acme Corp</SelectItem>
                                        <SelectItem value="TechStart Inc">TechStart Inc</SelectItem>
                                        <SelectItem value="Design Studio">Design Studio</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="amount">Amount *</Label>
                                <Input
                                    id="amount"
                                    type="number"
                                    placeholder="0.00"
                                    value={formData.amount}
                                    onChange={(e) =>
                                        setFormData({ ...formData, amount: e.target.value })
                                    }
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Invoice description..."
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({ ...formData, description: e.target.value })
                                    }
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="dueDate">Due Date</Label>
                                <Input
                                    id="dueDate"
                                    type="date"
                                    value={formData.dueDate}
                                    onChange={(e) =>
                                        setFormData({ ...formData, dueDate: e.target.value })
                                    }
                                />
                            </div>

                            <div className="flex space-x-2 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={onClose}
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                                <Button type="submit" className="flex-1 dashboard-gradient">
                                    <Save className="h-4 w-4 mr-2" />
                                    Create Invoice
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
