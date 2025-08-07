"use client"
import { DashboardLayout } from "@/components/dashboard_components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/dashboard_ui/card";
import { Button } from "@/components/dashboard_ui/button";
import { BarChart3, Download, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ReportPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div />
          <Button className="dashboard-gradient">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Weekly Time Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center font-heading">
                  <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                  Weekly Time Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Chart placeholder - Weekly time tracking data would go here
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Revenue Trends */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center font-heading">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Revenue Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Chart placeholder - Revenue trends would go here
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center font-heading">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Project Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Chart placeholder - Project timeline would go here
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Client Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center font-heading">
                  <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                  Client Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Chart placeholder - Client distribution would go here
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
