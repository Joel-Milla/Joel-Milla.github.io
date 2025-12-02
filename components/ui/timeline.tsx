"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();

    // Recalculate when images load
    window.addEventListener("resize", updateHeight);

    // Use a timeout to recalculate after images might have loaded
    const timer = setTimeout(updateHeight, 500);

    return () => {
      window.removeEventListener("resize", updateHeight);
      clearTimeout(timer);
    };
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-4xl md:text-6xl mb-4 text-black dark:text-white max-w-4xl font-bold">
          Timeline
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 md:text-base max-w-sm text-lg">
          A short summary of my work experience...
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-16 absolute left-0 md:left-0 w-16 rounded-full bg-white dark:bg-black flex items-center justify-center border-4 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hidden md:block text-xl md:pl-20 md:text-5xl font-bold  dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
