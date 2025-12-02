import { Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  period: string;
  role: string;
  projectName: string;
  description: string;
  technologies: string[];
  url: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "2024 — PRESENT",
    role: "Senior Frontend Engineer",
    projectName: "Klaviyo",
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
    url: "https://github.com/Joel-Milla?tab=overview",
  },
  {
    period: "2018 — 2024",
    role: "Engineer",
    projectName: "Upstatement",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Contentful",
      "Node.js",
      "PHP",
    ],
    url: "https://github.com/Joel-Milla?tab=overview",
  },
];

export function ProjectItem() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {experiences.map((exp, index) => (
        <Card
          key={index}
          className="border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden"
          style={{
            transform: index > 0 ? `translateY(-${index * 20}px)` : undefined,
            zIndex: experiences.length - index,
          }}
        >
          {/* Top border gradient accent */}
          <div className="absolute inset-x-0 top-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
            <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>
          {/* Left border gradient accent */}
          <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
            <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
          </div>
          {/* Right border gradient accent */}
          <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
            <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
          </div>
          <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 p-8">
            {/* Time Period */}
            <div className="pt-6">
              <p className="text-[#8b9bb8] text-sm font-medium uppercase tracking-wide">
                {exp.period}
              </p>
            </div>

            {/* Content */}
            <div>
              <CardHeader className="p-0 space-y-0">
                <CardTitle className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-3xl">
                  {exp.role}
                </CardTitle>
                <CardDescription className="text-[#8b9bb8] leading-relaxed text-balance pt-4">
                  <p className="text-base mb-2 text-black">{exp.projectName}</p>
                  {exp.description}
                </CardDescription>
              </CardHeader>

              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex transform rounded-lg p-3 bg-white border border-gray-300 text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
                aria-label="GitHub Profile"
              >
                <Github size={14} />
              </a>

              <CardContent className="p-0 pt-6">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-blue-500/10 text-blue-500 text-sm font-medium rounded-full border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
