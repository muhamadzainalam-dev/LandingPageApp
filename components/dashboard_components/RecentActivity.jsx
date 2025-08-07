import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/dashboard_ui/card";
import { Badge } from "@/components/dashboard_ui/badge";

const activities = [
  {
    id: 1,
    task: "Website Redesign",
    client: "Acme Corp",
    time: "2.5h",
    date: "Today",
    status: "completed",
  },
  {
    id: 2,
    task: "Mobile App Development",
    client: "TechStart Inc",
    time: "4.0h",
    date: "Yesterday",
    status: "in-progress",
  },
  {
    id: 3,
    task: "Brand Identity Design",
    client: "Design Studio",
    time: "3.2h",
    date: "2 days ago",
    status: "completed",
  },
  {
    id: 4,
    task: "API Integration",
    client: "DevCorp",
    time: "1.8h",
    date: "3 days ago",
    status: "completed",
  },
  {
    id: 5,
    task: "Database Optimization",
    client: "DataFlow Inc",
    time: "2.1h",
    date: "4 days ago",
    status: "completed",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 border-green-200";
    case "in-progress":
      return "bg-blue-100 text-blue-800 border-blue-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="bg-card border-border/50 shadow-lg">
        <CardHeader className="border-b border-border/50">
          <CardTitle className="font-heading text-xl text-card-foreground flex items-center">
            <Clock className="h-6 w-6 mr-3 text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/20">
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-card-foreground">
                    Task
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-card-foreground">
                    Client
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-card-foreground">
                    Time
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-card-foreground">
                    Date
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-card-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <motion.tbody
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {activities.map((activity) => (
                  <motion.tr
                    key={activity.id}
                    variants={rowVariants}
                    className="border-b border-border/30 last:border-b-0 hover:bg-muted/10 transition-colors group"
                  >
                    <td className="py-4 px-6 text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {activity.task}
                    </td>
                    <td className="py-4 px-6 text-sm text-muted-foreground">
                      {activity.client}
                    </td>
                    <td className="py-4 px-6 text-sm font-mono text-primary font-semibold">
                      {activity.time}
                    </td>
                    <td className="py-4 px-6 text-sm text-muted-foreground">
                      {activity.date}
                    </td>
                    <td className="py-4 px-6">
                      <Badge
                        variant="outline"
                        className={getStatusColor(activity.status)}
                      >
                        {activity.status}
                      </Badge>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
