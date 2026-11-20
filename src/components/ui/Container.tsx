import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "narrow" | "default" | "wide";
type ContainerElement = "div" | "section" | "header" | "footer" | "main" | "article";

export interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  as?: ContainerElement;
  className?: string;
}

const SIZE_CLASSES: Record<ContainerSize, string> = {
  narrow: "max-w-4xl",
  default: "max-w-7xl",
  wide: "max-w-[84rem]",
};

export function Container({
  children,
  size = "default",
  as: Component = "div",
  className,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        SIZE_CLASSES[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
