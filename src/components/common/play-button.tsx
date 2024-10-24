"use client";

import { ThemeColors } from "@/configs/theme-colors";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  width?: number;
  height?: number;
  strokeColor?: string;
  onPlay: (status: boolean) => void;
}

const PlayButton = ({
  width = 48,
  height = 48,
  strokeColor = ThemeColors.blackLight,
  onPlay,
}: Props) => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    onPlay(isPlaying);
  }, []);

  const togglePlay = () => {
    onPlay(!isPlaying);
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.svg
      width={width}
      height={height}
      onClick={togglePlay}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer focus:outline-none"
    >
      <AnimatePresence>
        {!isPlaying ? (
          <motion.g
            key="pause"
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 20 }}
            transition={{ duration: 0.3 }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42 24V24C42 33.942 33.942 42 24 42V42C14.058 42 6 33.942 6 24V24C6 14.058 14.058 6 24 6V6C33.942 6 42 14.058 42 24Z"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.8822 18.1159L29.6462 22.7079C30.6282 23.2879 30.6282 24.7099 29.6462 25.2899L21.8822 29.8819C20.8822 30.4739 19.6182 29.7519 19.6182 28.5899V19.4079C19.6182 18.2459 20.8822 17.5239 21.8822 18.1159V18.1159Z"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.g>
        ) : (
          <motion.g
            key="play"
            initial={{ opacity: 0, scale: 1.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: 0.3 }}
          >
            <path
              d="M28 30V18"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 30V18"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42 24V24C42 33.942 33.942 42 24 42V42C14.058 42 6 33.942 6 24V24C6 14.058 14.058 6 24 6V6C33.942 6 42 14.058 42 24Z"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.g>
        )}
      </AnimatePresence>
    </motion.svg>
  );
};

export default PlayButton;
