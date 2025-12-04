"use client";
// components
import { ErrorContainer } from "@/components/shared/error/error-container";

// icons
import { Lock } from "lucide-react";

export function ForbiddenError() {
  return (
    <ErrorContainer
      code="403"
      title="Access Denied"
      description="You don't have permission to access this resource. If you believe this is a mistake, please contact our support team for assistance."
      icon={<Lock className="w-10 h-10" />}
      actionLabel="Go to Dashboard"
      actionHref="/dashboard"
      secondaryActionLabel="Contact Support"
      secondaryActionHref="/contact"
    />
  );
}
