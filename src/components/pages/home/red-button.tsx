"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Props {
  title: string;
  className?: string;
}

const RedButton = ({ title, className = "" }: Props) => {
  return (
    <motion.div whileTap={{ scale: 0.99 }}>
      <Button
        className={`min-w-40 w-full bg-red-700 hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 font-extrabold rounded-xl h-12 ${className}`}
      >
        {title}
      </Button>
    </motion.div>
  );
};

export default RedButton;
