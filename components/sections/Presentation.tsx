"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Presentation() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4 md:px-12 max-w-5xl mx-auto"
    >
      <div className="flex-1 flex flex-col items-start gap-6">
        <h1 className="text-4xl md:text-6xl font-bold text-left">
          Hi, I&apos;m Joel Milla
        </h1>
        <ContainerTextFlip
          words={["Perception Engineer", "AV Enthusiast"]}
          className="mt-2 text-2xl md:text-3xl text-primary"
        />
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
          I am deeply interested in autonomous vehicles—how they perceive their
          surroundings, localize themselves, and plan intelligent routes.
          Currently pursuing a Bachelor&apos;s in Computer Science at the Tec de
          Monterrey.
        </p>
        <div className="flex gap-4 mt-2">
          <Button
            asChild
            variant="default"
            className="flex items-center gap-2 px-5 py-2 text-base font-semibold"
          >
            <a
              href="https://github.com/Joel-Milla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-5 py-2 text-base font-semibold"
          >
            <a
              href="https://linkedin.com/in/joelmilla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <video
          src="/car camera.webm"
          width={400}
          height={400}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-full object-cover shadow-lg border-4 border-white dark:border-black rotate-90"
          aria-label="Car camera video"
        />
      </div>
    </motion.section>
  );
}
