import Image from "next/image";
import { Experience } from "@/public/data/experiences";

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative" id="experience">
      {/* Vertical connecting line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

      {/* Timeline items */}
      <div className="space-y-24" id="experience">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative">
            {/* Logo container in center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-48 h-48 rounded-full bg-background border-8 border-border flex items-center justify-center overflow-hidden">
                <Image
                  src={exp.logo || "/placeholder.svg"}
                  alt={`${exp.company} logo`}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content positioned left or right */}

            <div
              className={`grid grid-cols-2 gap-24 items-center ${
                exp.side === "left" ? "text-right" : ""
              }`}
            >
              {exp.side === "left" ? (
                <>
                  {/* Content on left */}
                  <div className="pr-32">
                    <p className="text-2xl font-bold mb-2">{exp.year}</p>
                    <h2 className="text-4xl font-bold mb-1">
                      <span className="text-blue-500">{exp.company},</span>
                    </h2>
                    <p className="text-3xl font-bold mb-6">{exp.location}</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  <div />
                </>
              ) : (
                <>
                  {/* Content on right */}
                  <div />
                  <div className="pl-32">
                    <p className="text-2xl font-bold mb-2">{exp.year}</p>
                    <h2 className="text-4xl font-bold mb-1">
                      <span className="text-blue-500">{exp.company},</span>
                    </h2>
                    <p className="text-3xl font-bold mb-6">{exp.location}</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
