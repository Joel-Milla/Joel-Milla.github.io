import Timeline from "@/components/own_made/Timeline";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      year: "2019 - Present",
      company: "Google",
      location: "Mountain View, CA",
      logo: "/google_logo.svg",
      description:
        "I currently work as a Software Engineer at Google headquarters in Mountain View, California.",
      side: "right" as const,
    },
    {
      id: 2,
      year: "2018 - Present",
      company: "MIT Media Lab",
      location: "Cambridge, MA",
      logo: "/next.svg",
      description:
        "My research on the AlterEgo project, which I demoed at TED 2019, focuses on developing neural network models for a wearable system that allows humans to",
      side: "left" as const,
    },
  ];

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-4 text-balance">
          Timeline
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-16">
          A short summary of my work experience..
        </p>
        <Timeline experiences={experiences} />
      </div>
    </main>
  );
}
