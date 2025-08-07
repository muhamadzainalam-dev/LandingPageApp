"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('Authenticated');

    if (isAuthenticated === 'true') {
      router.replace('/Dashboard');
    } else {
      router.replace('/Home');
    }
  }, [router]);

  return null;
};
