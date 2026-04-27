"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function AnimatedButton({ 
  children, 
  className, 
  href, 
  variant = "primary", 
  ...props 
}: AnimatedButtonProps) {
  
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-full overflow-hidden transition-all duration-300";
  
  const variants = {
    primary: "bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] text-primary-foreground",
    secondary: "bg-accent hover:bg-accent/90 shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:shadow-[0_0_30px_rgba(217,70,239,0.6)]",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/10"
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {/* Liquid/Glow effect overlay */}
      <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full" />
    </>
  );

  const Component = href ? motion.create(Link) : motion.button;
  
  return (
    // @ts-ignore - framer motion dynamic component typing issue
    <Component
      href={href as string}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {content}
    </Component>
  );
}
