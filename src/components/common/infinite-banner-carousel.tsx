"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // If using Next.js for optimized images
import { IImageConfig } from "@/models/data-config/image-config.model";
import { motion, useAnimationFrame } from "framer-motion";

interface Props {
  images: IImageConfig[];
  height?: number;
  width?: number;
}
const InfiniteBannerCaousel = ({ images, height = 70, width = 100 }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const xPosition = useRef(0);

  useAnimationFrame((_, delta) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const speed = 0.05; // Встановіть швидкість анімації, можна змінити для пришвидшення або уповільнення
      xPosition.current -= speed * delta;

      // Якщо доходимо до кінця першої частини, повертаємося на початок для плавного циклу
      if (Math.abs(xPosition.current) >= container.scrollWidth / 3) {
        xPosition.current = 0;
      }

      container.style.transform = `translateX(${xPosition.current}px)`;
    }
  });

  return (
    <div className="overflow-hidden w-full relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-700 before:to-transparent before:z-10 before:w-20 before:left-0 after:absolute after:inset-0 after:bg-gradient-to-l after:from-gray-700 after:to-transparent after:z-5 after:w-20 after:left-[calc(100%-5rem)]">
      <div ref={containerRef} className="flex w-max">
        {[...images, ...images, ...images].map((image, index) => (
          <div
            key={index}
            style={{ minWidth: width + "px" }}
            className="flex justify-center items-center p-2"
          >
            <Image
              src={image.path}
              alt={image.path}
              width={width}
              height={height}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteBannerCaousel;
