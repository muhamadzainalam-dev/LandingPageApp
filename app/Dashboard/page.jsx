'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { DashboardLayout } from "@/components/dashboard_components/DashboardLayout";
import { OverviewCards } from "@/components/dashboard_components/OverviewCards";
import { InvoicesPreview } from "@/components/dashboard_components/InvoicesPreview";
import { TimeTrackerForm } from '@/components/dashboard_ui/TimeTrackerForm';
import { TimerDisplay } from '@/components/dashboard_ui/TimerDisplay';
import { TimeEntriesTable } from '@/components/dashboard_ui/TimeEntriesTable';

export default function HomePage() {
  const [currentState, setCurrentState] = useState('form'); // 'form' or 'timer'
  const [timerData, setTimerData] = useState(null);
  const [timeEntries, setTimeEntries] = useState([]);

  useEffect(() => {
    const savedEntries = localStorage.getItem('timeEntries');
    const savedTimerData = localStorage.getItem('timerData');
    const savedState = localStorage.getItem('currentState');

    if (savedEntries) {
      const parsedEntries = JSON.parse(savedEntries).map((entry) => ({
        ...entry,
        date: new Date(entry.date)
      }));
      setTimeEntries(parsedEntries);
    }

    if (savedTimerData && savedState === 'timer') {
      const parsedTimerData = JSON.parse(savedTimerData);
      parsedTimerData.date = new Date(parsedTimerData.date);
      setTimerData(parsedTimerData);
      setCurrentState('timer');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('timeEntries', JSON.stringify(timeEntries));
  }, [timeEntries]);

  useEffect(() => {
    localStorage.setItem('currentState', currentState);
    if (currentState === 'timer' && timerData) {
      localStorage.setItem('timerData', JSON.stringify(timerData));
    } else {
      localStorage.removeItem('timerData');
    }
  }, [currentState, timerData]);

  const handleStartTimer = (data) => {
    setTimerData(data);
    setCurrentState('timer');
  };

  const handleTimerComplete = (completedEntry) => {
    const newEntry = {
      ...completedEntry,
      id: Date.now().toString(),
    };
    setTimeEntries((prev) => [newEntry, ...prev]);
    setCurrentState('form');
    setTimerData(null);
  };

  const handleTimerCancel = () => {
    setCurrentState('form');
    setTimerData(null);
  };


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
          <div className="h-auto bg-background">
            <div className="w-full mx-auto">
              {currentState === 'form' && (
                <TimeTrackerForm onStartTimer={handleStartTimer} />
              )}

              {currentState === 'timer' && timerData && (
                <TimerDisplay
                  data={timerData}
                  onComplete={handleTimerComplete}
                  onCancel={handleTimerCancel}
                />
              )}
            </div>
          </div>
          <InvoicesPreview />
        </div>

        <TimeEntriesTable entries={timeEntries} />
      </div>
    </DashboardLayout>
  );
}
