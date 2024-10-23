"use client";

import { useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  isPlaying?: boolean;
}

const InfiniteCarousel = ({ children, isPlaying = true }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const xPosition = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  const normalSpeed = 0.05;
  const slowSpeed = 0.01; // Adjust this to your preferred slower speed

  useAnimationFrame((_, delta) => {
    if (!isPlaying) return; // Stop animation if not playing

    if (containerRef.current) {
      const container = containerRef.current;
      const speed = isHovered ? slowSpeed : normalSpeed; // Use slower speed if hovered
      xPosition.current -= speed * delta;

      // Loop back to start when halfway through the content
      if (Math.abs(xPosition.current) >= container.scrollWidth / 2) {
        xPosition.current = 0;
      }

      container.style.transform = `translateX(${xPosition.current}px)`;
    }
  });

  return (
    <>
      <div
        className="overflow-hidden w-full relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-700 before:to-transparent before:z-10 before:w-20 before:left-0 after:absolute after:inset-0 after:bg-gradient-to-l after:from-gray-700 after:to-transparent after:z-5 after:w-20 after:left-[calc(100%-5rem)]"
        onMouseEnter={() => setIsHovered(true)} // Set hover state on enter
        onMouseLeave={() => setIsHovered(false)} // Reset hover state on leave
      >
        <div ref={containerRef} className="flex w-max">
          {children}
          {children}
        </div>
      </div>
    </>
  );
};

export default InfiniteCarousel;
