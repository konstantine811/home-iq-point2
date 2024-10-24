"use client";

import FullScreenSection from "@/components/common/full-screen-section";
import Zoom from "@/components/svg-icons/zoom";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EleventhSFinishedWork = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const images = [
    "/images/appartment_1.jpg",
    "/images/appartment_2.jpg",
    "/images/appartment_4.jpg",
    "/images/appartment_3.jpg",
    "/images/appartment_5.jpg",
    "/images/appartment_6.jpg",
    "/images/appartment_8.jpg",
    "/images/appartment_7.jpg",
    "/images/appartment_9.jpg",
    "/images/appartment_10.jpg",
    "/images/appartment_11.jpg",
    "/images/appartment_12.jpg",
    "/images/appartment_13.jpg",
    "/images/appartment_7.jpg",
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => setIsCursorVisible(false));
    return () => {
      window.removeEventListener("scroll", () => setIsCursorVisible(false));
    };
  });
  return (
    <FullScreenSection title="Finished work">
      <>
        <motion.div
          style={{
            left: `${position.x - 72 / 2}px`,
            top: `${position.y - 72 / 2}px`,
          }}
          className="fixed z-[1000] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px]"
          // Animate scaling using framer motion
          animate={{
            scale: isCursorVisible ? 1 : 0, // Scale to 1 when visible, 0 when hidden
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <Zoom />
        </motion.div>
        <div
          className="grid grid-cols-2 md:grid-rows-4  md:grid-cols-5 cursor-none"
          onMouseMove={(event) => {
            setPosition({ x: event.clientX, y: event.clientY });
          }}
          onMouseOver={() => setIsCursorVisible(true)}
          onMouseLeave={() => setIsCursorVisible(false)}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative overflow-hidden  hover:after:bg-black/50 after:w-full after:h-full after:z-50 after:absolute after:top-0 after:left-0 after:transition-all group  ${
                index == 3 || index === 7 ? "h-[342px]" : "h-[171px]"
              } ${
                index === 3
                  ? "col-span-full md:col-span-2 md:row-span-2 -order-1 md:order-none"
                  : index === 7
                  ? "md:row-span-2 md:col-span-2 col-span-full md:order-none"
                  : ""
              }`}
            >
              <Image
                src={src}
                alt={`Room ${index + 1}`}
                fill
                className={`object-cover transition-transform duration-300 group-hover:scale-105`}
                priority={index < 2} // Load first two images with priority for performance
              />
            </div>
          ))}
        </div>
      </>
    </FullScreenSection>
  );
};

export default EleventhSFinishedWork;
