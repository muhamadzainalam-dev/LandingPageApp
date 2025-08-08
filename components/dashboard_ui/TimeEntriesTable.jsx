"use client"
import React from "react"
import { motion } from "framer-motion"
import { Clock, DollarSign, Calendar, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/dashboard_ui/card"
import { Badge } from "@/components/dashboard_ui/badge"

export function TimeEntriesTable({ entries }) {
    if (entries.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full mx-auto mt-8"
            >
                <Card className="border-border">
                    <CardContent className="p-12 text-center">
                        <Clock className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                        <h3 className=" text-xl font-semibold text-foreground mb-2">
                            No Time Entries Yet
                        </h3>
                        <p className="text-muted-foreground">
                            Start tracking your time to see your entries here
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full mx-auto mt-8"
        >
            <Card className="border-border">
                <CardHeader className="ext-primary-foreground">
                    <CardTitle className=" text-xl font-bold flex items-center gap-3">
                        <Clock className="w-6 h-6 text-blue-600" />
                        Time Entries ({entries.length})
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="border-t border-b border-border">
                                <tr>
                                    <th className="text-left p-4  font-semibold text-foreground">
                                        Task
                                    </th>
                                    <th className="text-left p-4  font-semibold text-foreground">
                                        Client
                                    </th>
                                    <th className="text-left p-4  font-semibold text-foreground">
                                        Date
                                    </th>
                                    <th className="text-left p-4  font-semibold text-foreground">
                                        Duration
                                    </th>
                                    <th className="text-left p-4  font-semibold text-foreground">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {entries.map((entry, index) => (
                                    <motion.tr
                                        key={entry.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="border-t border-border hover:bg-input/30 transition-colors"
                                    >
                                        <td className="p-4">
                                            <div>
                                                <h4 className="font-medium text-foreground mb-1">
                                                    {entry.taskName}
                                                </h4>
                                                {entry.notes && (
                                                    <p className="text-sm text-muted-foreground truncate max-w-xs">
                                                        {entry.notes}
                                                    </p>
                                                )}
                                                {entry.tags && (
                                                    <div className="flex flex-wrap gap-1 mt-2">
                                                        {entry.tags.split(", ").map(tag => (
                                                            <Badge
                                                                key={tag}
                                                                variant="secondary"
                                                                className="text-xs"
                                                            >
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4 text-muted-foreground" />
                                                <span className="text-foreground">{entry.client}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                                <span className="text-foreground">
                                                    {entry.date.toLocaleDateString()}
                                                </span>
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {entry.startTime} - {entry.endTime}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-primary" />
                                                <span className="font-medium text-foreground">
                                                    {entry.actualDuration}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <Badge
                                                variant={entry.billable ? "default" : "outline"}
                                                className="flex items-center gap-1 w-fit"
                                            >
                                                {entry.billable && <DollarSign className="w-3 h-3" />}
                                                {entry.billable ? "Billable" : "Non-billable"}
                                            </Badge>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
