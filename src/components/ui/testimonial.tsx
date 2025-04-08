import React from "react";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatarSrc?: string;
  variant?: "default" | "featured";
}

export function Testimonial({
  quote,
  author,
  role,
  company,
  avatarSrc,
  variant = "default",
  className,
  ...props
}: TestimonialProps) {
  return (
    <div 
      className={cn(
        "relative p-6 rounded-xl border border-[#E8E0D5]/30 dark:border-[#333333]/50",
        variant === "featured" && "bg-[#E8E0D5]/10 border-[#E8E0D5]/50 dark:bg-[#333333]/20 dark:border-[#333333]/70",
        className
      )}
      {...props}
    >
      <Quote className="absolute top-6 left-6 size-6 text-[#E8E0D5]/70 dark:text-[#333333]/70" />
      <div className="mt-8 mb-6 text-lg font-serif">
        "{quote}"
      </div>
      <div className="flex items-center gap-4">
        {avatarSrc && (
          <div className="relative size-12 overflow-hidden rounded-full">
            <Image
              src={avatarSrc}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-medium">{author}</div>
          {(role || company) && (
            <div className="text-sm text-foreground/70">
              {role}{role && company && ", "}{company}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 