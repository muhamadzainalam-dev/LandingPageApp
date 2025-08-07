"use client";

import { DashboardLayout } from "@/components/dashboard_components/DashboardLayout";
import { TimeTracker as TimeTrackerWidget } from "@/components/dashboard_components/TimeTracker";
import { RecentActivity } from "@/components/dashboard_components/RecentActivity";

const TimeTracker = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <TimeTrackerWidget />
        <RecentActivity />
        {/* <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-1">
            <TimeTrackerWidget />
          </div>
          <div className="xl:col-span-2">
            <RecentActivity />
          </div>
        </div> */}
      </div>
    </DashboardLayout>
  );
};

export default TimeTracker;
