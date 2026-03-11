import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function BackgroundBlur({ className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden",
        className,
      )}
    >
      <div className="absolute -left-[20%] -top-[20%] h-[80%] w-[60%] rounded-full bg-[#FF0087] opacity-[0.12] blur-[120px]" />
      <div className="absolute -right-[20%] -top-[20%] h-[80%] w-[60%] rounded-full bg-[#FF0087] opacity-[0.12] blur-[120px]" />
    </div>
  );
}
