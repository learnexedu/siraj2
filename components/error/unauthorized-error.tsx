"use client";

import { ErrorContainer } from "./error-container";
import { LogOut } from 'lucide-react';

export function UnauthorizedError() {
  return (
    <ErrorContainer
      code="401"
      title="Unauthorized Access"
      description="You need to be logged in to access this page. Please sign in with your credentials to continue."
      icon={<LogOut className="w-10 h-10" />}
      actionLabel="Sign In"
      actionHref="/login"
      secondaryActionLabel="Create Account"
      secondaryActionHref="/register"
    />
  );
}
