import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TestFramer({ className }: { className?: string }) {
  return (
    <motion.div 
      className={cn("p-4 bg-blue-100 rounded", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Framer Motion Test
    </motion.div>
  );
} 