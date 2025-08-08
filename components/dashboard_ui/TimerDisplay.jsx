"use client";
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Pause, Square, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/dashboard_ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/dashboard_ui/card"

export function TimerDisplay({ data, onComplete, onCancel }) {
    const [seconds, setSeconds] = useState(() => {
        const saved = localStorage.getItem("timerSeconds")
        return saved ? parseInt(saved) : 0
    })
    const [isRunning, setIsRunning] = useState(() => {
        const saved = localStorage.getItem("timerRunning")
        return saved ? JSON.parse(saved) : true
    })
    const [isStopped, setIsStopped] = useState(false)

    useEffect(() => {
        let interval

        if (isRunning && !isStopped) {
            interval = setInterval(() => {
                setSeconds(prev => {
                    const newSeconds = prev + 1
                    localStorage.setItem("timerSeconds", newSeconds.toString())
                    return newSeconds
                })
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [isRunning, isStopped])

    // Save timer state
    useEffect(() => {
        localStorage.setItem("timerRunning", JSON.stringify(isRunning))
    }, [isRunning])

    // Auto-pause on page unload
    useEffect(() => {
        const handleBeforeUnload = () => {
            if (isRunning && !isStopped) {
                setIsRunning(false)
                localStorage.setItem("timerRunning", "false")
            }
        }

        window.addEventListener("beforeunload", handleBeforeUnload)
        return () => window.removeEventListener("beforeunload", handleBeforeUnload)
    }, [isRunning, isStopped])

    // Auto-complete timer when end time is reached
    useEffect(() => {
        const checkEndTime = () => {
            const endTime = new Date(`${data.date.toDateString()} ${data.endTime}`)
            const now = new Date()

            if (now >= endTime && isRunning && !isStopped) {
                handleDone()
            }
        }

        const interval = setInterval(checkEndTime, 1000)
        return () => clearInterval(interval)
    }, [data.date, data.endTime, isRunning, isStopped])

    const formatTime = totalSeconds => {
        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const secs = totalSeconds % 60
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }

    const formatDuration = totalSeconds => {
        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        return `${hours}h ${minutes}m`
    }

    const calculateRemainingTime = () => {
        const endTime = new Date(`${data.date.toDateString()} ${data.endTime}`)
        const now = new Date()
        const remainingMs = endTime.getTime() - now.getTime()

        if (remainingMs <= 0) {
            return "Time exceeded"
        }

        const remainingMinutes = Math.floor(remainingMs / (1000 * 60))
        const hours = Math.floor(remainingMinutes / 60)
        const minutes = remainingMinutes % 60

        return `${hours}h ${minutes}m remaining`
    }

    const handlePause = () => {
        setIsRunning(!isRunning)
    }

    const handleStop = () => {
        setIsRunning(false)
        setIsStopped(true)
    }

    const handleDone = () => {
        const completedEntry = {
            ...data,
            actualDuration: formatDuration(seconds)
        }
        // Clear timer data from localStorage
        localStorage.removeItem("timerSeconds")
        localStorage.removeItem("timerRunning")
        localStorage.removeItem("timerData")
        onComplete(completedEntry)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full mx-auto"
        >
            <Card className="shadow-[var(--shadow-form)] border-border">
                <CardHeader className="text-primary-foreground">
                    <CardTitle className=" text-xl font-bold flex items-center gap-3">
                        <Clock className="w-6 h-6 text-blue-600" />
                        {isStopped
                            ? "Timer Stopped"
                            : isRunning
                                ? "Timer Running"
                                : "Timer Paused"}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="text-center mb-6">
                        <motion.div
                            className={`text-6xl  font-bold mb-2 ${isRunning && !isStopped
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                }`}
                            animate={{ scale: isRunning && !isStopped ? [1, 1.02, 1] : 1 }}
                            transition={{
                                duration: 1,
                                repeat: isRunning && !isStopped ? Infinity : 0
                            }}
                        >
                            {formatTime(seconds)}
                        </motion.div>
                        <p className="text-lg text-muted-foreground">
                            {isStopped ? "Final Duration" : "Elapsed Time"}
                        </p>
                        {!isStopped && (
                            <p className="text-sm text-muted-foreground mt-2">
                                {calculateRemainingTime()}
                            </p>
                        )}
                    </div>

                    <div className="space-y-4 mb-6">
                        <div className="bg-input/50 rounded-lg p-4">
                            <h3 className=" font-semibold text-lg text-foreground mb-2">
                                {data.taskName}
                            </h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-muted-foreground">Client:</span>
                                    <p className="font-medium">{data.clientName}</p>
                                </div>
                                <div>
                                    <span className="text-muted-foreground">Date:</span>
                                    <p className="font-medium">
                                        {data.date.toLocaleDateString()}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-muted-foreground">Planned:</span>
                                    <p className="font-medium">
                                        {data.startTime} - {data.endTime}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-muted-foreground">Billable:</span>
                                    <p className="font-medium">{data.billable ? "Yes" : "No"}</p>
                                </div>
                            </div>
                            {data.notes && (
                                <div className="mt-3">
                                    <span className="text-muted-foreground text-sm">Notes:</span>
                                    <p className="text-sm mt-1">{data.notes}</p>
                                </div>
                            )}
                            {data.tags && (
                                <div className="mt-3">
                                    <span className="text-muted-foreground text-sm">Tags:</span>
                                    <p className="text-sm mt-1">{data.tags}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center">
                        {!isStopped ? (
                            <>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        onClick={handlePause}
                                        variant="outline"
                                        size="lg"
                                        className=" font-semibold"
                                    >
                                        <Pause className="w-5 h-5 mr-2" />
                                        {isRunning ? "Pause" : "Resume"}
                                    </Button>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        onClick={handleStop}
                                        variant="destructive"
                                        size="lg"
                                        className=" font-semibold"
                                    >
                                        <Square className="w-5 h-5 mr-2" />
                                        Stop
                                    </Button>
                                </motion.div>
                            </>
                        ) : (
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    onClick={handleDone}
                                    size="lg"
                                    className="bg-blue-600 hover:from-primary/90 hover:to-secondary/90 text-primary-foreground  font-bold"
                                >
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    Done - Save Entry
                                </Button>
                            </motion.div>
                        )}
                    </div>

                    <div className="mt-4 text-center">
                        <Button
                            onClick={onCancel}
                            variant="ghost"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Cancel & Return to Form
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
