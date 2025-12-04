"use client";
// components
import { ErrorContainer } from "@/components/shared/error/error-container";

// icons
import { AlertTriangle } from "lucide-react";

export function NotFoundError() {
  return (
    <ErrorContainer
      code="404"
      title="Page Not Found"
      description="Sorry, the page you're looking for doesn't exist. It might have been moved or deleted. Let's get you back on track."
      icon={<AlertTriangle className="w-10 h-10" />}
      actionLabel="Back to Home"
      actionHref="/"
      secondaryActionLabel="View Programs"
      secondaryActionHref="/#programs"
    />
  );
}
