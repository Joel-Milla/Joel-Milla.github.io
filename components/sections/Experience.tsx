"use client";

import { experiences } from "@/public/data/experiences";
import Timeline from "../own_made/Timeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-background py-12 px-4 z-50"
    >
      <div className="max-w-6xl mx-auto">
        <Timeline experiences={experiences} />
      </div>
    </section>
  );
}
