import { ProjectItem } from "../own_made/ProjectItem";
import { moreProjects } from "@/public/data/projects";
import { MagicCardDemo } from "../own_made/MagicCardDemo";
import { CarouselProjects } from "../own_made/CarouselProjects";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-4 text-balance">
          Projects
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Here you can see some of the projects I&apos;ve done on my own time.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl font-semibold mb-4 text-balance">
          Featured
        </h2>

        <CarouselProjects />
      </div>
      
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl font-semibold mb-4 text-balance">
          More
        </h2>
        <ProjectItem projects={moreProjects} />
      </div>
    </section>
  );
}