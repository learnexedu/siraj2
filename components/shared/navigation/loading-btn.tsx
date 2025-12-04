// React & Next
import React from "react";

// components
import Spinner from "@/components/shared/skeleton/spinner";

interface LoadingBtnProps {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
}

export function LoadingBtnEn({
  loading,
  children,
  className,
}: LoadingBtnProps) {
  return loading ? (
    <Spinner
      style={`${className} stroke-zgrey-100 w-5 h-5`}
      title="loading"
      tstyle="text-zgrey-100"
    />
  ) : (
    children
  );
}

