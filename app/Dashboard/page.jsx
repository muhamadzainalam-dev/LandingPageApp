'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { DashboardLayout } from "@/components/dashboard_components/DashboardLayout";
import { OverviewCards } from "@/components/dashboard_components/OverviewCards";
import { TimeTracker } from "@/components/dashboard_components/TimeTracker";
import { RecentActivity } from "@/components/dashboard_components/RecentActivity";
import { InvoicesPreview } from "@/components/dashboard_components/InvoicesPreview";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedHome');
    if (!hasVisited) {
      localStorage.setItem('hasVisitedHome', 'true');
      router.push('/Dashboard/pages/TimeTracker');
    }
  }, [router]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <OverviewCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TimeTracker />
          <InvoicesPreview />
        </div>

        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}
