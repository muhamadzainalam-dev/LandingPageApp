"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Square, Plus, Clock } from "lucide-react";
import { Button } from "@/components/dashboard_ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/dashboard_ui/card";
import { Input } from "@/components/dashboard_ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/dashboard_ui/select";
import { useToast } from "@/hooks/use-toast";

export function TimeTracker() {
  const { toast } = useToast();
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [manualHours, setManualHours] = useState("");

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    if (seconds > 0) {
      toast({
        title: "Time logged",
        description: `${formatTime(seconds)} has been tracked`
      });
    }
    setSeconds(0);
  };

  const handleAddEntry = () => {
    if (!taskName || !selectedClient || !manualHours) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Entry added",
      description: `${manualHours} hours logged for ${taskName}`
    });

    setTaskName("");
    setSelectedClient("");
    setManualHours("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card className="bg-card border-border/50 shadow-lg">
        <CardHeader className="border-b border-border/50">
          <CardTitle className="font-heading text-xl text-card-foreground flex items-center">
            <Clock className="h-6 w-6 mr-3 text-primary" />
            Time Tracker
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 p-8">
          {/* Timer Display */}
          <div className="text-center py-6">
            <motion.div
              key={seconds}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="text-5xl font-bold text-card-foreground mb-6 font-mono tracking-wider"
            >
              {formatTime(seconds)}
            </motion.div>

            {/* Timer Controls */}
            <div className="flex items-center justify-center space-x-4">
              {!isRunning ? (
                <Button
                  onClick={handleStart}
                  size="lg"
                  className="dashboard-gradient hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start
                </Button>
              ) : (
                <Button
                  onClick={handlePause}
                  variant="secondary"
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl px-8 py-3"
                >
                  <Pause className="h-5 w-5 mr-2" />
                  Pause
                </Button>
              )}

              <Button
                onClick={handleStop}
                variant="outline"
                size="lg"
                className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground shadow-lg hover:shadow-xl px-8 py-3"
              >
                <Square className="h-5 w-5 mr-2" />
                Stop
              </Button>
            </div>
          </div>

          {/* Manual Entry */}
          <div className="border-t border-border/50 pt-8">
            <h3 className="font-heading font-semibold text-card-foreground mb-6 flex items-center">
              <Plus className="h-5 w-5 mr-2 text-primary" />
              Manual Entry
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Input
                placeholder="Task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="bg-input border-border focus:ring-2 focus:ring-primary/20"
              />
              <Select value={selectedClient} onValueChange={setSelectedClient}>
                <SelectTrigger className="bg-input border-border focus:ring-2 focus:ring-primary/20">
                  <SelectValue placeholder="Select client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Acme Corp">Acme Corp</SelectItem>
                  <SelectItem value="TechStart Inc">TechStart Inc</SelectItem>
                  <SelectItem value="Design Studio">Design Studio</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Hours (e.g., 2.5)"
                type="number"
                step="0.1"
                value={manualHours}
                onChange={(e) => setManualHours(e.target.value)}
                className="bg-input border-border focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button
              onClick={handleAddEntry}
              className="dashboard-gradient hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Entry
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
