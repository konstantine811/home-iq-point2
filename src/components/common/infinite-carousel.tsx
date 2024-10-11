"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

interface Props {
  children: React.ReactNode;
  count: number;
}

const InfiniteCarousel = ({ children, count }: Props) => {
  const FAST_DURATION = 5 * count;
  const SLOW_DURATION = 25 * count;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (width > 0) {
      let controls;
      const finalPosition = -width / 2;
      console.log("width", width);
      console.log("count", count);
      console.log("finalPosition", finalPosition);

      if (mustFinish) {
        controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
          ease: "linear",
          duration: duration * (1 - xTranslation.get() / finalPosition),
          onComplete: () => {
            setMustFinish(false);
            setRerender(!rerender);
          },
        });
      } else {
        controls = animate(xTranslation, [0, finalPosition], {
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        });
      }
      return controls?.stop;
    }
  }, [rerender, xTranslation, duration, width, mustFinish]);
  return (
    <div className="relative overflow-hidden h-full w-full">
      <motion.div
        className="absolute flex gap-4 w-full"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
