"use client";
// React & Next
import React from "react";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";

interface ErrorContainerProps {
  code: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  actionLabel?: string;
  actionHref?: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
}

export function ErrorContainer({
  code,
  title,
  description,
  icon,
  actionLabel = "Go Home",
  actionHref = "/",
  secondaryActionLabel = "Contact Support",
  secondaryActionHref = "/contact",
}: ErrorContainerProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-lg w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Error code and icon */}
          <div className="flex flex-col items-center mb-8">
            <div className="text-accent mb-4 flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full">
              {icon}
            </div>
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/70 mb-4">
              {code}
            </div>
          </div>

          {/* Content */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={actionHref} className="flex-1">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold h-12 rounded-lg transition-all duration-300">
                {actionLabel}
              </Button>
            </Link>
            <Link href={secondaryActionHref} className="flex-1">
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/5 font-semibold h-12 rounded-lg transition-all duration-300"
              >
                {secondaryActionLabel}
              </Button>
            </Link>
          </div>

          {/* Decorative footer */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-muted-foreground text-center">
              جامعة قناة السويس - كلية الهندسة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
