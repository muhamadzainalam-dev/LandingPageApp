'use client';

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard_components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/dashboard_ui/card";
import { Button } from "@/components/dashboard_ui/button";
import { Badge } from "@/components/dashboard_ui/badge";
import { Plus, FolderOpen, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectForm } from "@/components/forms/ProjectForm";

const initialProjects = [
  {
    id: 1,
    name: "E-commerce Platform",
    client: "Acme Corp",
    status: "active",
    progress: 75,
    team: 4,
    deadline: "Feb 15, 2024",
  },
  {
    id: 2,
    name: "Mobile App Design",
    client: "TechStart Inc",
    status: "active",
    progress: 45,
    team: 3,
    deadline: "Jan 30, 2024",
  },
  {
    id: 3,
    name: "Brand Identity",
    client: "Design Studio",
    status: "completed",
    progress: 100,
    team: 2,
    deadline: "Jan 10, 2024",
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects)
  const [showForm, setShowForm] = useState(false)

  const handleAddProject = newProject => {
    setProjects([newProject, ...projects])
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div />
          <Button className="dashboard-gradient" onClick={() => setShowForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FolderOpen className="h-6 w-6 text-primary" />
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        project.status === "active"
                          ? "bg-green-100 text-green-800 border-green-200"
                          : "bg-blue-100 text-blue-800 border-blue-200"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-card-foreground">
                    {project.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {project.client}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium text-card-foreground">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="dashboard-gradient h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {project.team} members
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.deadline}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <ProjectForm
          isOpen={showForm}
          onClose={() => setShowForm(false)}
          onSave={handleAddProject}
        />
      </div>
    </DashboardLayout>
  );
}
