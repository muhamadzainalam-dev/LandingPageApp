"use client";

import { motion } from "framer-motion";
import {
  Clock,
  FileText,
  FolderOpen,
  Users,
  Check,
  ChevronDown,
  Star,
  Menu,
  X,
  Play,
  Eye,
  Send,
  Zap,
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function LandingPage() {

  const AuthRedirect = () => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('Authenticated');

      if (isAuthenticated === 'true') {
        router.replace('/Dashboard'); // or router.push()
      }
    }, [router]);

    return null; // or a loader/spinner
  };

  AuthRedirect()


  const [openFaq, setOpenFaq] = useState(null);

  const companies = [
    {
      name: "Fiverr",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/640px-Fiverr_Logo_09.2020.svg.png",
    },
    {
      name: "Upwork",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Upwork_Logo.svg/640px-Upwork_Logo.svg.png",
    },
    {
      name: "Freelancer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/FL_LOGO-REDUCTION.png?20161102055750",
    },
    {
      name: "PeoplePerHour",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/PeoplePerHour.com_2018_logo.png/640px-PeoplePerHour.com_2018_logo.png",
    },
    {
      name: "Dribbble",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Dribbble_logo.svg/640px-Dribbble_logo.svg.png",
    },
    {
      name: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/LinkedIn_Logo_2013_%282%29.svg/640px-LinkedIn_Logo_2013_%282%29.svg.png",
    },
    {
      name: "Behance",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/640px-Behance_logo.svg.png",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Time Tracking",
      description:
        "Track time automatically or manually with our intuitive timer. Never lose track of billable hours again.",
    },
    {
      icon: FileText,
      title: "Invoice Generation",
      description:
        "Generate professional invoices instantly from your tracked time. Get paid faster with automated billing.",
    },
    {
      icon: FolderOpen,
      title: "Project Management",
      description:
        "Organize your work by projects and clients. Keep everything structured and easily accessible.",
    },
    {
      icon: Users,
      title: "Client History",
      description:
        "Maintain detailed records of all client interactions and project history in one place.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Start Timer or Log Task",
      description:
        "Begin tracking time with one click or manually log completed tasks.",
      icon: Play,
    },
    {
      number: "02",
      title: "Review Time Sheet",
      description:
        "Review and edit your time entries before generating invoices.",
      icon: Eye,
    },
    {
      number: "03",
      title: "Generate Invoice",
      description:
        "Create professional invoices and send them directly to clients.",
      icon: Send,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      image:
        "data:image/jpeg;base64,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",
      quote:
        "This tool has completely transformed how I manage my freelance business. I'm saving 5+ hours per week on admin tasks.",
    },
    {
      name: "Mike Chen",
      role: "Web Developer",
      image: "/logo.png",
      quote:
        "The automatic time tracking is a game-changer. I never miss billable hours anymore and my clients love the detailed invoices.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Consultant",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFRUXGBgVGBUYFxcVGBcXFxUXGhUXGBcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGS0fIB0tLS0tLSstLSstLS0rLS0tLS0tLS0tLS0tLS0uLS0tKy0tLS0tLS0wKy0tLS0tKy0tN//AABEIAOAA4AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xAA/EAABAwEFBAgEAwcDBQAAAAABAAIRAwQFEiExBkFRYQcTInGBkaGxMsHR8EJSYhUjkqKy4fFDcoIUJDNzwv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgEEAgMBAQAAAAAAAAABAhEDBBIhMRMiMkFRFCP/2gAMAwEAAhEDEQA/AO1REVWoiIgIiICIiAiIgIrdotDWNLnuDQN5XKXpt3SYS2k0vPHciHXoo3pdIFYvALWxyBHrK8tXSDXDuzTZHA4j6iFJtJKLhLp6RWOIbXp4P1NOIeIOY9V21mtDKjQ9jg5pzBBkHxQXURFCRERAREQEREBERAREQEREBERAREQEREBWbZaW02F7zDWiSVeUfbb3x1j+qaeww5/qf9B7oNPtJfdSu47m/hby4laAvjU5ry8rRhEbz58l1mxewdWu0VazcDNQN5UZZTGbqccLldRo7psgdjJnMQ10TBmVi2ym5h7THRxGinChsvZ2AAMWuvu46RYQAAsP9Hl0f5vHtB1aVs9mdpqtlqAgksJ7dPcRxHA81sdobhLJIbA+9FxVbI8wunCzKOTPG419G3dbWVqbajDLXAEHvWSod6O9qjQqCjUM0nnL9Djv7jv8DxUwtM5hLNJl29REUJEREBERAREQEREBERAREQEREBEQoNXtHeYoUXOkYiIb38VEzq8gveeLs10e3l5Y6nVg6ZHkN/mfYLiL2tPZLR3fX1xeSIb7o7uwWq1dbUEtaZg+inrrGtbA3blC/Q+/J45qRLyvenTyNRoPAuC4+bdz07uGT45W4rWsRqtLbKuIrBdbi9mMGRquOvO/67SWtLWiYxHM+E5BVxw2vlnI6e87PLSSon2ou406kgdl2Y+YW/Zehc4TWc50x8e/u0Pdmtpe1h66zOkdoDEDzC34/wDnXLyf9IjSlIMqdthrxNayMJMkDCe8fUQfFQrZ6ZbJHxcYmByC7DovvwU3mk8w17uzwBORHjAhdWXlzY+EtoiKi4iIgIiICIiAiIgIiICIiAiIgLWbQ3q2z0S8xyHEwtmo76SbSTUZTnIAnxUjjbVXc8mo49p0keO/3WjvKpu+/vXzWdbLSGytPVcXFTIra6/Yio4U34SQCe1GpA3DvV+1UKtQhzKORPxuIyg/qzjgZz4BXuihzXVHU3DMGYPNTLWu6zRjcxnkFy559ud8Ovi4+7CXbm9gbA7q3NqCWkQ35rR1dnsVdwyOZAB08t676w2+m+SyAxjsMyAJj+65S+b4osquwuMmYw/mWMyu7p0ZYTU2puzYIMIJwNaM4a3M+JV++rOGAtGkLX0dqqwbhqnx+qxK17l7oO9W+1vlS9knhxF60202OcJBdLPGdR3AT5LUXZVa17Q6Y0MbhGveNfBZG1db/uHM3NPuAfmtTS1nmu7CfV5+d8p22O2kpWimymarTXa2HMOTjhyxAHXKCYXSKCbiqub1FbF/4rQwEEZtDnEkg64HAOBGkyp2BUVMoiIoSIiICIiAiIgIiICIiAiIgKIulZ7m2kcMIIPofZSheF60aNN1So8BrTBjPOYiBvncom28vhtsIcxpDWaE6meW7T0UxFcWahcZWTZqALWu+9YXlks0gnuHor9N8Mjx9T9FZWM7Yy19TbWZ/FiZ6SPYBSPfd/ucC0SoftBLXBwMEHEDwIiD5qStn76pWimS4DHADhwInPuM5Fc3Nj57nV0/JqXFsrDWszbOBWqYXkl4DScc8cvnktFUdL5pNqVNTLm4RHfvW8u+4GAdaxsVAXZ55g6iRnCxrwtlU9nA4xkBiBHpmfFZyx0du5+mkttrrucGBtMcSJIHLXMrOa0BreORPeq7LYXmXOBHOIA5BafaS1kMeGHQETwG9W93UY5XTkb4tIqV6j9xcYPIZA+ix6ToKshXaGq644d7rt7mu9psNRwObnAHkQ8EE8gB5lSRcl6VYFKswB4EYpMPA0cMoz71Dd03u6gHMOjokESDGmW48x6qV9kbxfUohwZ1jfhkES2Bpmc9VWrx1aLxmmkcl6oWEREBERAREQEREBERAQoiCLtpLhrUmtAfIc4ggyZMkg+MBcVa3S0yc/Pv++alvbeqw03AmMI13y6chz081EFCiXYgciTmOW7w0UoWrCDnwn7HujAA88B8sz7+quVXBggLWPeT4qVb4VWiricTu3dy8stqfTcHscWuG8ex4hW3BeQpU3UlbIbfFgw1mZby33hdVbNtLOW/uxmeUKH7oZmumo2eQuTPDHbu4+TLTa3jtA6pk3ILQXhSmm4cR7rYCzLx1KckmoZbvtwZpkK7ZS3EMchu+NdFmX9TDH4RrEn5LWLql3HFZq6b27AXPwNcQ2oRTJMfCXDEQOMNOSmHo/sop2JgH4i58TMS7SeWQ8FCAqObhwkiM/EHJdls30hVbPT6t9EVQCSDjwESZI+EzmSp1VpYmBFx12dI1kqECoH0Sd7gHM/ibmO8hdfTqBwBaQQcwQZBHIhV0tLtUiIoSIiICIiAiIgIiICpqNkakcxHzVSpqjJBG9/1haLQ6jTaA2mc3b3OIlznOOYaB96LkL9rsp1cFIZNETvLufn6LfstYYLQSe1UIHOZdPhmPMLlbdRhrnb5xR3j/CQaqvVcXTv9AvKbxqdVTikxzWVaKAYNQSFZT2w60T4e/wDkL2gyTCoiVfsFUNeJ7volRPbe3bY101isxVm6GBw0g8F0ljsvJcmeTuwwY9O75GixrTZRSpPqvya0Fx48h3nILqKVBcP0n3kBgsrTwqVP/hvu7waqce8stLcsmGO6j21Vi97nu1cZP08NFba1XMKVRAhejrTzfYDHNX6eSsgZt7lfBzncPdShcLl33RPemGq+zucYeMbG7sbfi8S3+lR4wbzv9uC2dwW7qbTRqzGB7Sf9sw/+UlLPBLqvoFERYtxERAREQEREBERB45wAk5ALk7+2heWubQE7i45AeK39+McaFQNmY3axIkDwlcPb6o/6fCyZyLj+VuKCffwlByVoHaMEuzku0k74G4LU3nX3DTfz5LNvi0dWSxnAT3kZrUF2KAdfvNJE2rdRkYXA5nMcfuVj1Ad6vVsnA8IEcgqrZUz0y4KzOxjzkOaNpnXlKuEDCD4LxvyUodrspVxgcvdSLdtnMaKKtgLU0Wg03fjzb3jUeXsppu9kALh55qvQ6e7xK2GlTdUeYYxpc48A0SfZQDe1udXrVKztXuLo4D8LfAADwUs9Ld59VZG0QYdWdB/9bIc7+bAPEqHCtulw1O7+sOrz3e3+DArVY5q+ArLRLl1OR5WMEdyvP3DirFp+JXKju2FKF8oAvGgoWjefvuUidNhazn2Cg58zhcJJmQ17g0z3ALfLl+jQzd9POe1UgflHWOy9z4rqFjfbaehERQkREQEREBERBRW0z03qP70fTp9c9sOZJZG4tc38J5OK6+9auZbrlk3iTOZ5CFHF61zUcWgCGz5wMR5mchwSjlrQzEXOOhOfitZUeGuMf3Wa/KSe8n2C19dwP1UxGT2jWAkkSd3IIwYiT5Be2ek0zLgrJ7JMFSq9qiMgVSHZITnKra0H79VKqqzVHMc17cnNIcDzCn3Zm+G1qLKjd4BI4cR4HJQDC7LYC/Oqx0nHIfvB3fjHsfErHn4+7Hf8b9PyduWv696T7z662ubPZotbTHeRiefNwH/FckFctVoNSo+o7V7nPPe4kn3VIC2xx7ZIxzy7srR2itUBmrr1QzJWVWLQe0rg+PwVh5kq/S+LwUDKVDgqwF44cNfZSJc6J6pNjc0/grOA8WscfVxXaKOeh20HDaKc5A03jjLg5rvRjVIypfbTH0IiKqwiIgIiICIiDUX3RMtcNXB1MxrBGLLn2fVRnaWGhXdlibhOQMYwcQkHvUvVqYJaTuM+hHzUadIlSmSDTGYJa5w0c7XDzj5hBH9WpkQRJBz7vrr5rGwgu5equ2n4yeOf1Vp5jOPvirfpT9rtei0DLgsamN50nzVFSoSrlF4GufBD2qqCD98VdfRDWTxWPWqSqHvJ1KlFegq42oRmMjn6gg+hKtBVBSqvUyrpMKxRcAB5Lx9TNBce9WXFC5UkoKYXS7I7K2m3OeKLQA34qjyWsGUxigyc9ACtpsBsIbZFau7BZwd3xVI1j8rdRPlxUzXVZ6TKeGi0U6FPIRkHEaxxE6nefFc3LzzHxHXw9Ncvtl4iG7TsDbWU6byxp6x2AUw4YxrBIMDCYyM7xorNo2ItzRJoHuxMJ/qUz3lAayq9pL8Q6pknU5DLiZOuiv3josb1WcdP+PBEHRvUqULeKLwW9axzS1wjNoxgjj8JH/JS6uNqWRrrTSLsi2q1wI1BDuPA6HkSuyXThn3zbjz4+y6ERFZUREQEREBERBpL+tDz+7ZlMNc7X45AgcPFR30g0uqfTpYpw08UAYQC5xGk/p1JzUoXtZsTcQGYjzacTf5gFqn7MWe1VjXqg1JazC0khrQBpl8WcnPiq55zCbq2GFzuog5rdSVaqAkr6DfsnYWjKy0f4Afdc/fFwWQAxZ6Q7mgeyznVY39Nb0eUntCgVQaujv8AuUB7RSbBJM55QP8AKtO2PtYbiDMQ4DI+q1+TH+uf4spdaaFo4rwBZNpsdVhh1N7TzaVaNneBJY4DjhMK+4pcaoXrSqZzXqlV63IzwVLUeqmNRAVsNnbofaq7KLZzMuI3NHxH74rWvKmrofuVtOz9a5ox1CXSdcP4R3R7rLm5OzHbfg4+/LTqrJdrMDKTOzRpgAxlMfhB9ytrSLYkx1bdG6Axy/L9FdtDQW4dBv7uAWsbWFRxLuzSac/1EfhHLj5d3m7evJ4Kz29bSqvmXEtps/LP4zzgHuBWTbTksOxnrX9cZgSKc8N7vHQcu9X7dUyVbd1ppylqP75n+9v9QXWrjqrpr0x+tv8AUF2K9Dg/F5fUfkIiLZgIiICIiAiIgEK3YKOFzgNMoHgri9s3xHw9gsOp/B0dL+au1HJcVftWDG5dzVbIWivS6RUkLgxuq9DKbnhxly2AVrW0HRrZ8z/ZSSy68sojguXuC6TZ65e8y0gAEAyInULuaVqp4ZDgRyMq+V7qyk7fLDF0U97R5fNeG7mbmr22X5SYNZ5b1qqe0zXOzDgO76KvbUzL+s+vcdB47VGm7vY0+4XM3l0cWGoZ6oMPFhLPQZei6qhe9J2jlX/1zDvSZZY+qduN9xGds6JaJ+CtUb34XD2C5e6Oj+vXDy1+BrXFoL2Oa50HI4NW5bip1baGletDd0DuWk6jkn7UvTcdvpD1l6JnyOstAjeG09fEuyUoWCzGmxrGhoDRAyP1WxJC8NULPPkzz/Jpx8WHH+MWsL4115bliWyw42BhccIyAEDLfJ1WW+0BYr7Qq+Wu4u0gGtHJYNvrZFevrFay3VslOOPlGWTAswm00x+sHyz+S7FcbcvatTOWI/yldkvR4Z9Xl81+wiItWQiIgIiICIiAqKToefD2Vaxqz8LpWHUT6N+mv3Z9SorDnrX2i8BnnmtdXvDmuHteh3abirWCwrTgcMwD98VqjanHeq21eansR3sS8rpa/Rzx3Pd9VrKd0V2fBUdHB2Y+vqugFcbyqjbWK0uUUsxrWUqtVg7bJ5t+iy7NeVM5YoPNZD7wpxmQtZb6lA5uhTJv2rbr1S/bxq03UhSqa4nHQyBAGvetjQvh8DEM4XIWp1GQ4OcCDlmSO4hZ1nv1sQ8QOKtePwznJ5810/7Z4rw3wI1WlbaqbswQQqKlZir2L97e/tMcVWLcOK5Z9UDMFW/2lGqn4z5HVvtg4rAvC0dlaYXoFYq2ovMyY4KZhS8k06LZFuKs5+5rfVxEegK65aHY2hFAvI+NxI7m5D1xLfLtwmsXDnd0REVlRERAREQEREBa6+muwSATGoGZjwWxRRljMpqrY5XG7iO61peNA4+BWttF5kGCYI3HI+qleVBO213PbaqzntJa+o5zXxIIc4kZ8RMRyVMeCLZdRk3H7TO5yr/aT+IUd1KMKlsjQkeMK3wxT56kQ2953jzXotB1dUACj3rn/md/EVQZOpJ781Hwnz131W9KI1qgeInyWO7aGyt4vPGCf7LixTEIxqt8MRebJ11XbcARTpecD2Wptu1NpqAiQ0HgJ91p4XjlaceM/Sl5Mr7q6bfWnF1j5/3FZNO/LQP9QnvAK15XgCnUU3W2O0Nc72+R+qlXYO4W1LIytaWYn1CXtBJAbT0YIBgzGLP8yhWF9F7KXg2vY6FVoABYAWjRrmdlwHIFpUXGNMcrfdX23JZh/oUv4Gn5Ky7Zyykz1QHIOcB5AwtqijUW3XjGAAAAADIAZADcAF6iICIiAiIg/9k=",
      quote:
        "Simple, powerful, and exactly what I needed. The client management features are outstanding.",
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out TimeTracker Pro",
      features: [
        "1 Project",
        "Time tracking & basic reports",
        "Invoice generation (with watermark)",
        "Email support",
        "Access to web dashboard",
      ],
      cta: "Start For Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "Ideal for active freelancers & solo entrepreneurs.",
      features: [
        "Unlimited projects",
        "Advanced time tracking",
        "Professional invoicing",
        "Client portal access",
        "Detailed analytics",
        "Priority support",
      ],
      cta: "Start With Pro",
      popular: true,
    },
    {
      name: "Team Plan",
      price: "$29",
      period: "per month",
      description:
        "Perfect for small teams or agencies who need collaboration.",
      features: [
        "Everything in Pro",
        "Up to 5 team members",
        "Team time tracking dashboard",
        "Team-based invoice splitting",
        "Shared clients & projects",
        "Admin panel + role management",
        "Email & in-app chat support",
      ],
      cta: "Start With Team",
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const faqs = [
    {
      question: "What’s included in the Free plan?",
      answer:
        "The Free plan includes 1 active project, basic time tracking, and invoice creation with a watermark. It's a great way to start without any commitment.",
    },
    {
      question: "Can I upgrade later if I need more features?",
      answer:
        "Yes! You can upgrade to Pro or Team plans anytime to unlock unlimited projects, branded invoices, team features, and more.",
    },
    {
      question: "Is my data safe and secure?",
      answer:
        "Yes. We use bank-grade encryption and store your data in secure, SOC 2-compliant data centers. Your privacy and safety are our priority.",
    },
    {
      question: "Can I customize invoices with my brand?",
      answer:
        "Absolutely. Paid plans allow you to customize your invoices with your logo, brand colors, and templates—perfect for a professional look.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes. We provide a 30-day money-back guarantee if you're not satisfied. Just contact our support and we’ll handle it quickly.",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Users",
    },
    {
      icon: Clock,
      value: "2M+",
      label: "Hours Tracked",
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#fafcfd] py-20 lg:py-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl hero-font font-bold text-gray-900 font-funnel leading-tight">
                <span className="text-gray-900">Track Time -</span>{" "}
                <span className="text-blue-600">Generate Invoice -</span>
                <span className="text-gray-900">Get Paid</span>{" "}
              </h1>
              <p className="text-xl text-gray-700 mt-6 leading-relaxed">
                The simplest way for freelancers to track time, manage projects,
                and generate professional invoices. Stop losing money on
                unbilled hours.
              </p>
              <Link href="/Home/pages/Auth">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold mt-8 hover:bg-blue-700 shadow-lg"
                >
                  Start Tracking Free
                </motion.button>
              </Link>
              <p className="text-sm text-gray-500 mt-3">
                No credit card required • 14-day free trial
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        Today's Activity
                      </h3>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Active
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">
                            Website Redesign
                          </span>
                        </div>
                        <span className="font-mono text-gray-900">2:34:12</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">Client Meeting</span>
                        </div>
                        <span className="font-mono text-gray-900">1:15:30</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700">Code Review</span>
                        </div>
                        <span className="font-mono text-gray-900">0:45:22</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Today</span>
                        <span className="text-2xl font-bold text-gray-900 font-mono">
                          4:35:04
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-[#fafcfd]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <p className="font-dm text-muted-foreground text-sm uppercase tracking-wider">
              Trusted By Teams At
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex space-x-16 whitespace-nowrap"
            >
              {/* First set */}
              {companies.map((company, index) => (
                <motion.div
                  key={`first-${index}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 h-8 w-32 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full w-auto max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </motion.div>
              ))}

              {/* Second set for seamless loop */}
              {companies.map((company, index) => (
                <motion.div
                  key={`second-${index}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 h-8 w-32 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full w-auto max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-funnel mb-4">
              Your Complete Toolkit For{" "}
              <span className="text-blue-600">Growth</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Built for freelancers and teams who want to focus on their work,
              not their admin.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl hover:border-blue-600/20 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-funnel">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-funnel mb-4">
              <span className="text-blue-600">How</span> it works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(68, 109, 198, 0.25)",
                }}
                className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 text-center relative group"
              >
                {/* Number circle with icon */}
                <div className="relative inline-block mb-6">
                  <motion.div
                    className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold font-funnel relative group-hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.number}
                    <motion.div
                      className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <step.icon className="w-5 h-5 text-blue-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-funnel group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </motion.div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-funnel mb-4">
              Loved by <span className="text-blue-600">thousands</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join thousands of freelancers who have transformed their business
              with our platform
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={staggerItem}
                className="bg-gradient-to-br from-white to-gray-50/30 p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Simple{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                pricing
              </span>
            </h2>
            <p className="font-dm text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade at any
              time.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`h-full relative group transition-all duration-500 hover:-translate-y-2 ${plan.popular
                    ? "border-2 border-blue-600 shadow-xl scale-105"
                    : "border-blue-100 hover:border-blue-600/30 hover:shadow-xl"
                    }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-dm">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-6">
                    <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="font-bold text-4xl">{plan.price}</span>
                      <span className="font-dm text-muted-foreground ml-2">
                        {plan.period}
                      </span>
                    </div>
                    <p className="font-dm text-muted-foreground">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <Button
                      className={`w-full mb-6 font-dm ${plan.popular
                        ? "bg-blue-600 hover:bg-blue-600/90"
                        : "bg-blue-700 hover:bg-blue-700/90"
                        }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>

                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * featureIndex }}
                          className="flex items-center font-dm text-muted-foreground"
                        >
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-funnel mb-4">
              <span className="text-blue-600">Frequently</span> asked questions
            </h2>
            <p className="text-xl text-gray-700">
              Everything you need to know about our platform
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white border border-gray-200 rounded-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-blue-800 to-blue-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-funnel font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Ready to save time and grow your{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                freelance business?
              </span>
            </h2>
            <p className="font-dm text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of freelancers and teams who trust TimeTracker Pro
              to manage their time and grow their revenue.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-white/90 font-dm text-lg px-8 py-4 group shadow-xl"
              >
                Start Free – No Credit Card Needed
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link href="/Home/pages/Auth">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-blue-900 text-white hover:bg-blue-600/10 font-dm text-lg px-8 py-4 backdrop-blur-sm"
                >
                  Join Now
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300"
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="font-funnel font-bold text-2xl text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="font-dm text-white/80 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
