export interface ProjectItemType {
  period: string;
  role: string;
  projectName: string;
  description: string;
  technologies: string[];
  url: string;
}

export const projects: ProjectItemType[] = [
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
