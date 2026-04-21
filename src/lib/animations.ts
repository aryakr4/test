const STAGGER_STEP = 0.05;
const STAGGER_CAP = 12;

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: Math.min(i, STAGGER_CAP) * STAGGER_STEP,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};
