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
  imageDescription: React.ReactNode;
  url?: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    year: "Jun 2025 - January 2026",
    company: "AiR Laboratory",
    location: "Queretaro, QR, Mexico",
    logo: "/air.svg",
    title: "Research Assistant",
    type: "Full-time",
    description:
      "Built, trained, and deployed AI architecture with specialized control for greenhouse environments to make an agricultural robot autonomous at the AiR (Artificial Intelligence and Robotics) Laboratory. Adapted the LaneATT deep learning architecture for autonomous navigation, achieving 91% F1 score with 48ms inference time and 1.67° average yaw error in field trials.",
    side: "right" as const,
    imageDescription: (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <img
          src="/jackal1.webp"
          alt="AiR Laboratory"
          width={500}
          height={500}
          loading="lazy"
          className="h-20 md:h-44 lg:h-60 w-full lg:col-span-2 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
        <video
          src="/jackal2.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="h-20 md:h-44 lg:h-80 w-full lg:col-span-1 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    ),
    url: "https://github.com/Joel-Milla/RealTime-LaneATT",
  },
  {
    id: 2,
    year: "Oct 2023 - Jun 2024",
    company: "MedTracker",
    location: "Monterrey, NL, Mexico",
    logo: "/MedTracker.svg",
    title: "Founder",
    type: "Full-time",
    description:
      "Founded AI-powered healthcare startup developing clinical copilot that instantly analyzes patient biometric data and symptom history to support medical decisions. Took one semester off school to work full-time on the idea.",
    side: "left" as const,
    imageDescription: (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <img
          src="/MedTracker1.webp"
          alt="MedTracker"
          width={500}
          height={500}
          loading="lazy"
          className="h-20 md:h-44 lg:h-80 w-full lg:col-span-1 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
        <img
          src="/medtracker2.png"
          alt="MedTracker"
          width={500}
          height={500}
          loading="lazy"
          className="h-20 md:h-44 lg:h-60 w-full lg:col-span-2 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    ),
    url: "https://github.com/Joel-Milla/MedTracker_MbApp",
  },
  {
    id: 3,
    year: "Jun 2023 - Sep 2023",
    company: "Google",
    location: "New York City, NY, United States",
    logo: "/google_logo.svg",
    title: "Software Engineer Intern",
    type: "Internship",
    description:
      "Collaborated with the YouTube Education team to enhance content discovery for 14M+ learners struggling to find relevant educational videos by extracting, rendering, and transferring academic metadata across Google's data infrastructure to display useful information on YouTube pages. Deployed personalized badge features impacting 2M+ users within 3 months.",
    side: "right" as const,
    imageDescription: (
      <div className="grid grid-cols-2 gap-4">
        <img
          src="/yt1.webp"
          alt="YouTube Education"
          width={500}
          height={500}
          loading="lazy"
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <img
          src="/yt2.webp"
          alt="YouTube Education"
          width={500}
          height={500}
          loading="lazy"
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
      </div>
    ),
  },
];