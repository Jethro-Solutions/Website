"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Header from "./header";
import Footer from "./footer";

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Base layout component that wraps the content of each page
 * Serves as the foundation for all pages, including layout elements
 */
export default function BaseLayout({ children, className }: BaseLayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
} 