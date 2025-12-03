import React from "react";
import { Timeline as TimelineComponent } from "@/components/ui/timeline";
import { Experience } from "@/public/data/experiences";
import { GithubButton } from "./Icons/GithubButton";

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  const data = experiences.map((exp) => ({
    title: exp.company,
    content: (
      <div className="flex items-start gap-6">
        {/* Content */}
        <div className="flex-1">
          <p className="text-lg font-bold mb-2">{exp.year}</p>
          <h2 className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {exp.company}
          </h2>
          <p className="text-xl font-bold mb-2">{exp.location}</p>
          <p className="text-base mb-2">
            {exp.title} ({exp.type})
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            {exp.description}
          </p>
          {exp.url && <GithubButton url={exp.url} />}
          <div className="mt-4">{exp.imageDescription}</div>
        </div>
      </div>
    ),
    image: exp.logo,
  }));

  return (
    <div className="relative w-full overflow-clip">
      <TimelineComponent data={data} />
    </div>
  );
}
