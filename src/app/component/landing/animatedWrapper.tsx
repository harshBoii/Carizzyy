'use client';
import { LazyMotion, domAnimation, m } from 'framer-motion';

export { m };

export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] as const } },
};

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function MotionProvider({ children }: Props) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

export const viewportOnce = { once: true, margin: '-60px' };
