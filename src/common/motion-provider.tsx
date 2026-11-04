"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Disables transform/layout animations for users who prefer reduced motion. */
export const MotionProvider = ({ children }: { children: ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);
