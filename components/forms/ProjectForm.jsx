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
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/dashboard_ui/card";
import { useToast } from "@/hooks/use-toast";

/**
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.onClose
 * @param {Function} props.onSave
 */
export function ProjectForm({ isOpen, onClose, onSave }) {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        client: "",
        description: "",
        deadline: "",
        team: "1",
        status: "active",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.client) {
            toast({
                title: "Error",
                description: "Please fill in required fields",
                variant: "destructive",
            });
            return;
        }

        const project = {
            id: Math.floor(Math.random() * 1000),
            ...formData,
            progress: 0,
            team: parseInt(formData.team),
        };

        onSave(project);
        toast({
            title: "Success",
            description: "Project created successfully",
        });
        onClose();
        setFormData({
            name: "",
            client: "",
            description: "",
            deadline: "",
            team: "1",
            status: "active",
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
                        <CardTitle className="font-heading">Create New Project</CardTitle>
                        <Button variant="ghost" size="sm" onClick={onClose}>
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Project Name *</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter project name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                            </div>

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
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Project description..."
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({ ...formData, description: e.target.value })
                                    }
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="deadline">Deadline</Label>
                                <Input
                                    id="deadline"
                                    type="date"
                                    value={formData.deadline}
                                    onChange={(e) =>
                                        setFormData({ ...formData, deadline: e.target.value })
                                    }
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="team">Team Size</Label>
                                <Select
                                    value={formData.team}
                                    onValueChange={(value) =>
                                        setFormData({ ...formData, team: value })
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1 member</SelectItem>
                                        <SelectItem value="2">2 members</SelectItem>
                                        <SelectItem value="3">3 members</SelectItem>
                                        <SelectItem value="4">4 members</SelectItem>
                                        <SelectItem value="5">5+ members</SelectItem>
                                    </SelectContent>
                                </Select>
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
                                    Create Project
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
