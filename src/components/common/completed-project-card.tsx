"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ICardPriceIcon } from "@/models/data-config/card.model";
import { countDecimalPlaces } from "@/utils/numbers";
import { useInView, useSpring, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  data: ICardPriceIcon;
  index: number;
}

const CompletedProjectCard = ({
  data: { description, icon, title, additionalTitle },
  index,
}: Props) => {
  const [value, setValue] = useState<number | string>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "200px", once: true });
  const spring = useSpring(0, {
    bounce: 0, // амплітуда
    duration: 2000, // тривалість в секундах
  });

  spring.on("change", (value) => {
    const formattedValue = value.toFixed(countDecimalPlaces(title));
    setValue(formattedValue);
  });
  useEffect(() => {
    if (isInView) {
      spring.set(title);
    }
  }, [isInView, spring, title]);
  // Налаштування для плавного зʼявлення картки
  const cardVariants = {
    hidden: { opacity: 0, y: 10 }, // стартова позиція (невидима)
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.3, // затримка на основі індексу
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // тригер анімації
      className="inline-block rounded-lg shadow-md bg-white"
    >
      <CardContent className="p-10 flex flex-col justify-center items-center gap-4">
        {/* Number */}
        <h2 className="text-4xl font-bold text-blue-900">
          {value}
          {additionalTitle}
        </h2>

        {/* Icon and Text */}
        <div className="flex items-center space-x-2 mt-2">
          {icon}
          <p className="text-md font-medium text-blue-900">{description}</p>
        </div>
      </CardContent>
    </motion.div>
  );
};

export default CompletedProjectCard;
