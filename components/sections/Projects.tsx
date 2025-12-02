import { ProjectItem } from "../own_made/ProjectItem";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-4 text-balance">
          Projects
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Here you can see some of the projects I&apos;ve done on my own time.
        </p>
      </div>
      <ProjectItem />
    </section>
  );
}
