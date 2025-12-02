import { Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectItemType } from "@/public/data/projects";

interface ProjectProps {
  projects: ProjectItemType[];
}

export function ProjectItem({ projects }: ProjectProps) {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      {projects.map((proj, index) => (
        <Card key={index} className="relative border-0 overflow-hidden p-8">
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

          {/* the 1fr_3fr creates a grid-cols where first col is 1/4 and second column occupies 3/4 */}
          <div className="grid md:grid-cols-[1fr_3fr] gap-6">
            {/* Time Period */}
            <p className="text-[#8b9bb8] text-sm font-medium uppercase tracking-wide">
              {proj.period}
            </p>

            {/* Content */}
            <div>
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent pb-1 text-3xl">
                  {proj.projectName}
                </CardTitle>
                <CardDescription className="text-[#8b9bb8] leading-relaxed text-balance">
                  <p className="text-base mb-2 text-black">{proj.role}</p>
                  {proj.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-4 inline-flex transform rounded-lg p-3 bg-white border border-gray-300 text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
                  aria-label="GitHub Profile"
                >
                  <Github size={14} />
                </a>
              </CardContent>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech, techIndex) => (
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
