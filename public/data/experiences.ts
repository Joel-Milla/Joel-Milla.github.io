export type Experience = {
  id: number;
  year: string;
  company: string;
  location: string;
  logo: string;
  title: string;
  type: string;
  description: string;
  side: "right" | "left";
};

export const experiences: Experience[] = [
  {
    id: 1,
    year: "Jun 2023 - Sep 2023",
    company: "Swift LLC",
    location: "Monterrey, NL, Mexico",
    logo: "/swift.svg",
    title: "Founder",
    type: "Part-time",
    description:
      "Founded, incorporated, and operated e-commerce LLC specializing in consumer products ranging from fishing to gardening equipment, leveraging third-party fulfillment networks for global distribution. Generated $6,000+ revenue across three continents within the first operational year.",
    side: "left" as const,
  },
  {
    id: 2,
    year: "Jun 2023 - Sep 2023",
    company: "Google",
    location: "New York City, NY, United States",
    logo: "/google_logo.svg",
    title: "Software Engineer Intern",
    type: "Internship",
    description:
      "Collaborated with the YouTube Education team to enhance content discovery for 14M+ learners struggling to find relevant educational videos. Deployed personalized badge features impacting 2M+ users within 3 months.",
    side: "right" as const,
  },
  {
    id: 3,
    year: "Oct 2023 - Jun 2024",
    company: "MedTracker",
    location: "Monterrey, NL, Mexico",
    logo: "/MedTracker.svg",
    title: "Founder",
    type: "Full-time",
    description:
      "Founded AI-powered healthcare startup developing clinical copilot that instantly analyzes patient biometric data and symptom history to support medical decisions. Took one semester off school to work full-time on the idea.",
    side: "left" as const,
  },
  {
    id: 4,
    year: "Jun 2025 - Present",
    company: "AiR (Artificial Intelligence and Robotics) Laboratory",
    location: "Queretaro, QR, Mexico",
    logo: "/air.svg",
    title: "Research Assistant",
    type: "Full-time",
    description:
      "I adapted the LaneATT deep learning architecture for autonomous navigation in an agricultural robot, achieving 91% F1 score with 48ms inference time and 1.67° average yaw error in field trials.",
    side: "right" as const,
  },
];
