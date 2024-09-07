'use client';

import { cn } from "@/lib/utils";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export const Widget = ({
  children,
  hotKey,
  noPadding,
}: {
  children: React.ReactNode,
  hotKey: string,
  noPadding?: boolean;
}) => {
  const [open, setOpen] = useState(true);

  useHotkeys(hotKey, () => setOpen((v) => !v))

  return (
    <div
      className={cn(
        "text-sky-600/60 shadow-[0_0_10px_theme(colors.sky.500/0.5)] border border-sky-500/10 bg-sky-500/30 bg-[repeating-linear-gradient(theme(colors.sky.500/0.1),theme(colors.sky.800/0.1)_1px,theme(colors.sky.500/0.1)_1px,theme(colors.sky.500/0.1)_2px)] transition duration-500",
        !open && "scale-75 opacity-0 pointer-events-none",
        !noPadding && 'p-5',
      )}
    >
      {children}
    </div>
  );
}