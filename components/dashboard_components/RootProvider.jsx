'use client';

import { Toaster as Sonner } from "@/components/dashboard_ui/sonner";
import { TooltipProvider } from "@/components/dashboard_ui/tooltip";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function RootProvider({ children }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <TooltipProvider>
                    <Sonner />
                    {children}
                </TooltipProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
