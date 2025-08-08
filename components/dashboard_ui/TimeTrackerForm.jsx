"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon, Clock, Play, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/dashboard_ui/button"
import { Calendar } from "@/components/dashboard_ui/calendar"
import { Input } from "@/components/dashboard_ui/input"
import { Label } from "@/components/dashboard_ui/label"
import { Switch } from "@/components/dashboard_ui/switch"
import { Textarea } from "@/components/dashboard_ui/textarea"
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/dashboard_ui/popover"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/dashboard_ui/form"

const schema = z.object({
    taskName: z.string().min(1, "Task name is required"),
    clientName: z.string().min(1, "Client name is required"),
    date: z.date({ required_error: "Please select a date" }),
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),
    billable: z.boolean().default(true),
    notes: z.string().optional(),

})

export function TimeTrackerForm({ onStartTimer }) {
    const [duration, setDuration] = useState("")
    const nowTime = () => new Date().toTimeString().slice(0, 5)

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            taskName: "",
            client: "",
            date: new Date(),
            startTime: nowTime(),
            endTime: "",
            billable: true,
            notes: "",
        }
    })

    const { watch, handleSubmit, control } = form
    const startTime = watch("startTime")
    const endTime = watch("endTime")

    useEffect(() => {
        if (startTime && endTime) {
            const start = new Date(`1970-01-01T${startTime}:00`)
            const end = new Date(`1970-01-01T${endTime}:00`)
            if (end > start) {
                const diff = end.getTime() - start.getTime()
                const hours = Math.floor(diff / 3600000)
                const minutes = Math.floor((diff % 3600000) / 60000)
                setDuration(`${hours}h ${minutes}m`)
            } else setDuration("")
        } else setDuration("")
    }, [startTime, endTime])

    const onSubmit = data => {
        onStartTimer?.({ ...data, duration })
    }

    return (
        <div className="w-full">
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="p-6">
                    <motion.h1 className="text-2xl font-bold text-primary-foreground flex items-center gap-1">
                        <Clock className="h-6 w-6 mr-3 text-blue-600" />
                        Time Tracker
                    </motion.h1>

                </div>

                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={control}
                                name="taskName"
                                render={({ field }) => (
                                    <FormItem className="md:col-span-2">
                                        <FormLabel>Task Name *</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="What are you working on?"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name="clientName"
                                render={({ field }) => (
                                    <FormItem className="md:col-span-2">
                                        <FormLabel>Client Name *</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="What are you working for?"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Date *</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        className={cn(
                                                            "h-12 justify-start text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {" "}
                                                        <CalendarIcon className="mr-3 h-4 w-4" />
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={date => date > new Date()}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex items-center justify-center">
                                {duration && (
                                    <motion.div className="bg-primary/10 text-primary px-4 py-2 rounded-lg border">
                                        {" "}
                                        <Clock className="w-4 h-4 inline mr-2" />
                                        {duration}
                                    </motion.div>
                                )}
                            </div>

                            <FormField
                                control={control}
                                name="startTime"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Start Time *</FormLabel>
                                        <FormControl>
                                            <Input type="time" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name="endTime"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>End Time *</FormLabel>
                                        <FormControl>
                                            <Input type="time" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={control}
                            name="billable"
                            render={({ field }) => (
                                <FormItem className="flex items-center justify-between border p-4">
                                    <div>
                                        <FormLabel>Billable Hours</FormLabel>
                                        <div className="text-sm text-muted-foreground">
                                            Mark this time as billable
                                        </div>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Notes</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Add notes..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full h-14 bg-blue-600 text-white"
                        >
                            <Play className="w-5 h-5 mr-2" /> Save Time Entry
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
