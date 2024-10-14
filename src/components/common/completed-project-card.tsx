"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ICardPriceIcon } from "@/models/data-config/card.model";
import { countDecimalPlaces } from "@/utils/numbers";
import { useSpring, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  data: ICardPriceIcon;
  index: number;
}

const CompletedProjectCard = ({
  data: { description, icon, title, additionalTitle },
  index,
}: Props) => {
  const [value, setValue] = useState<number | string>(0);
  // Використовуємо хук useInView з react-intersection-observer
  const { ref, inView, entry } = useInView({
    threshold: 0.2, // спрацьовує, коли 50% елемента у видимій зоні
    triggerOnce: true, // анімація спрацьовує лише один раз
  });
  const spring = useSpring(0, {
    stiffness: 30, // Зменшуємо жорсткість
    damping: 15, // Збільшуємо демпфування для стабілізації
    duration: 1, // Зберігаємо тривалість
  });

  spring.on("change", (value) => {
    const formattedValue = value.toFixed(countDecimalPlaces(title));
    setValue(formattedValue);
  });
  // Скидаємо на 0 перед початком анімації
  useEffect(() => {
    if (inView && entry) {
      // Перш ніж почати анімацію, встановлюємо початкове значення на 0
      spring.set(0);
      // Після цього запускаємо анімацію до кінцевого значення
      spring.set(title);
    }
  }, [inView, entry, spring, title]);
  // Налаштування для плавного зʼявлення картки
  const cardVariants = {
    hidden: { opacity: 0, y: 10 }, // стартова позиція (невидима)
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.3, // затримка на основі індексу
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="inline-block rounded-lg shadow-md bg-white"
    >
      <CardContent className="p-10 flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold text-blue-900">
          {value}
          {additionalTitle}
        </h2>
        <div className="flex items-center space-x-2 mt-2">
          {icon}
          <p className="text-md font-medium text-blue-900">{description}</p>
        </div>
      </CardContent>
    </motion.div>
  );
};

export default CompletedProjectCard;
