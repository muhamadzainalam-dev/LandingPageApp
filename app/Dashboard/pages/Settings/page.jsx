"use client";

import { DashboardLayout } from "@/components/dashboard_components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/dashboard_ui/card";
import { Button } from "@/components/dashboard_ui/button";
import { Input } from "@/components/dashboard_ui/input";
import { Label } from "@/components/dashboard_ui/label";
import { Switch } from "@/components/dashboard_ui/switch";
import { Separator } from "@/components/dashboard_ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/dashboard_ui/avatar";
import { User, Bell, Shield, Palette, Save } from "lucide-react";
import { motion } from "framer-motion";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center font-heading">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg" alt="Profile" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                        AK
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Photo
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      defaultValue="Alex Kowalski"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="alex@example.com"
                      className="bg-background border-border"
                    />
                  </div>

                  <Button className="w-full dashboard-gradient">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Notifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center font-heading">
                    <Bell className="h-5 w-5 mr-2 text-primary" />
                    Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      label: "Email Notifications",
                      desc: "Receive updates via email",
                      checked: true,
                    },
                    {
                      label: "Push Notifications",
                      desc: "Browser push notifications",
                      checked: false,
                    },
                    {
                      label: "Weekly Reports",
                      desc: "Weekly productivity summary",
                      checked: true,
                    },
                  ].map((item, idx) => (
                    <div key={idx}>
                      {idx > 0 && <Separator />}
                      <div className="flex items-center justify-between py-3">
                        <div>
                          <Label>{item.label}</Label>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                        <Switch defaultChecked={item.checked} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {/* Security Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center font-heading">
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { id: "current-password", label: "Current Password" },
                    { id: "new-password", label: "New Password" },
                    { id: "confirm-password", label: "Confirm New Password" },
                  ].map((field) => (
                    <div className="space-y-2" key={field.id}>
                      <Label htmlFor={field.id}>{field.label}</Label>
                      <Input
                        id={field.id}
                        type="password"
                        className="bg-background border-border"
                      />
                    </div>
                  ))}

                  <Button variant="outline" className="w-full">
                    Update Password
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Preferences Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center font-heading">
                    <Palette className="h-5 w-5 mr-2 text-primary" />
                    Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { id: "timezone", label: "Timezone", defaultValue: "UTC-5 (Eastern Time)" },
                    { id: "currency", label: "Default Currency", defaultValue: "USD ($)" },
                    { id: "rate", label: "Hourly Rate", defaultValue: "$75" },
                  ].map((pref) => (
                    <div className="space-y-2" key={pref.id}>
                      <Label htmlFor={pref.id}>{pref.label}</Label>
                      <Input
                        id={pref.id}
                        defaultValue={pref.defaultValue}
                        className="bg-background border-border"
                      />
                    </div>
                  ))}

                  <Button className="w-full dashboard-gradient">
                    Save Preferences
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
