import React from "react";
import { Timeline as TimelineComponent } from "@/components/ui/timeline";
import { Experience } from "@/public/data/experiences";

interface Timeline2Props {
  experiences: Experience[];
}

export default function Timeline({ experiences }: Timeline2Props) {
  const data = experiences.map((exp) => ({
    title: exp.company,
    content: (
      <div className="flex items-start gap-6">
        {/* Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-1">
            <span className="text-blue-500">{exp.company}</span>
          </h2>
          <p className="text-xl font-bold mb-2">{exp.title}</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            {exp.description}
          </p>
          <div className="mt-4">
            {exp.imageDescription}
          </div>
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
