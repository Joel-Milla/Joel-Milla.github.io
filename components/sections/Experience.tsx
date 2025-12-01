"use client";

import Timeline from "@/components/own_made/Timeline";
import { experiences } from "@/public/data/experiences";
import { useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    const section = document.getElementById("experience");
    console.log("Section id:", section?.id);
    console.log("Is id 'experience'?", section?.id === "experience");
  }, []);

  return (
    <section
      id="experience"
      className="min-h-screen bg-background py-12 px-4 z-50"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-4 text-balance">
          Timeline
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-16">
          A short summary of my work experience..
        </p>
        <Timeline experiences={experiences} />
      </div>
    </section>
  );
}
