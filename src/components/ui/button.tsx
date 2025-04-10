import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none select-none",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md hover:shadow-lg hover:translate-y-[-1px] focus:ring-blue-500",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-400",
        destructive: "bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-md hover:shadow-lg hover:translate-y-[-1px] focus:ring-red-500",
        outline: "border-2 border-slate-200 bg-transparent hover:bg-slate-100 focus:ring-slate-400",
        ghost: "bg-transparent hover:bg-slate-100 focus:ring-slate-400",
        link: "bg-transparent underline-offset-4 hover:underline text-blue-600 hover:text-blue-700 p-0 h-auto focus:ring-0",
        glow: "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] hover:translate-y-[-1px] focus:ring-purple-500",
        glass: "backdrop-blur-md bg-black/20 border border-blue-400/30 text-white hover:bg-black/30 focus:ring-blue-400/50 shadow-[0_0_10px_rgba(59,130,246,0.3)]",
        "solid-blue": "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg hover:translate-y-[-1px] focus:ring-blue-500",
      },
      size: {
        xs: "h-8 px-3 text-xs",
        sm: "h-9 px-4",
        md: "h-10 px-5",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10 p-0",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "lg",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, children, icon, iconPosition = "left", ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, rounded, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="mr-3 transition-transform group-hover:translate-x-[-2px]">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-3 transition-transform group-hover:translate-x-[2px]">{icon}</span>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
