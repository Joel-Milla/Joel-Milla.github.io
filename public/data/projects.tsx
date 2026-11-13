export interface ProjectItemType {
  period: string;
  role: string;
  projectName: string;
  description: string;
  technologies: string[];
  url: string;
}

export interface FeaturedProjectType {
  id: number;
  name: string;
  // Gray subtitle: "Independent Project" or "at <University name>"
  affiliation: string;
  summary: string;
  media: string;
  mediaType: "video" | "image";
  technologies: string[];
  url: string;
}

// Shown in the carousel (components/own_made/CarouselProjects.tsx)
export const featuredProjects: FeaturedProjectType[] = [
  {
    id: 1,
    name: "Sensor Fusion Collision Detection",
    affiliation: "Independent Project",
    summary:
      "C++ LiDAR-camera fusion pipeline that matches KITTI point clouds to YOLOv3 detections to estimate time-to-collision.",
    media: "/lidar_camera.png",
    mediaType: "image",
    technologies: ["C++", "OpenCV", "YOLOv3", "3D LiDAR"],
    url: "https://github.com/Joel-Milla/3D_Object_Tracking",
  },
  {
    id: 2,
    name: "Autonomous Racing F1TENTH Car",
    affiliation: "at Carnegie Mellon University",
    summary:
      "1/10 scale autonomous race car with LiDAR-based planning and control that placed 2nd of 12 teams.",
    media: "/car_driving.mp4",
    mediaType: "video",
    technologies: ["ROS2", "C++", "Pure Pursuit"],
    url: "https://github.com/Joel-Milla/f1tenth_racing",
  },
  {
    id: 3,
    name: "LiDAR-Based Perception System",
    affiliation: "Independent Project",
    summary:
      "C++ LiDAR obstacle detection with RANSAC and KD-tree clustering written from scratch, cutting processing from 1.2 s to 0.2 s per scan.",
    media: "/lidar_tracking.mp4",
    mediaType: "video",
    technologies: ["C++", "PCL", "RANSAC", "KD-Tree"],
    url: "https://github.com/Joel-Milla/Lidar_Obstacle_Detection",
  },
  {
    id: 4,
    name: "Underwater Vehicle Perception",
    affiliation: "at Tec de Monterrey",
    summary:
      "Configured ZED stereo camera on an NVIDIA Jetson for an underwater autonomous vehicle, with a pipeline for depth estimation.",
    media: "/vanttec_uuv.png",
    mediaType: "image",
    technologies: ["C++", "ROS2", "ZED Camera"],
    url: "https://github.com/vanttec/vanttec_uuv_Legacy",
  },
];

// Shown in the list below the carousel (components/own_made/ProjectItem.tsx)
export const moreProjects: ProjectItemType[] = [
  {
    period: "Jan 2025 — May 2025",
    role: "Developer",
    projectName: "Feature Detection System",
    description:
      "Built a camera-based feature tracking system for collision detection, enabling reliable keypoint tracking across sequential image frames. Implemented and evaluated multiple keypoint detectors including Harris, FAST, BRISK, ORB, AKAZE, and SIFT, combined with advanced descriptors (BRISK, BRIEF, ORB, AKAZE, SIFT) and Gaussian/Sobel preprocessing filters. Engineered a robust descriptor matching pipeline using both FLANN and brute force methods with cross-checking validation and k-nearest neighbors distance ratio testing to eliminate false positives. Optimized performance by implementing a ring buffer for image storage and filtering keypoints to vehicle-only regions, achieving 112 keypoint matches across frames in 0.43 seconds while identifying FAST+BRISK, FAST+ORB, and AKAZE as the top-performing detector-descriptor combinations.",
    technologies: ["C++", "OpenCV", "FLANN", "Harris", "FAST", "SIFT", "AKAZE"],
    url: "https://github.com/Joel-Milla/Camera_Keypoints",
  },
  {
    period: "Jan 2025 — May 2025",
    role: "AI Developer",
    projectName: "Somatic Single Nucleotide Variants",
    description:
      "Built an ensemble meta-learning system to identify cancer-specific mutations by combining predictions from four somatic SNV calling algorithms (MuTect, VarScan, FreeBayes, VarDict). Engineered a variant classification pipeline that analyzes VCF files across multiple callers to distinguish true somatic variants from sequencing noise, processing 12GB of genomic data including synthetic and real tumor samples. Achieved 0.94 F1-score on test dataset through feature extraction and consensus modeling.",
    technologies: [
      "Python",
      "VCF",
      "Machine Learning",
      "Genomics",
      "Ensemble Methods",
    ],
    url: "https://github.com/Joel-Milla/Somatic-Single-Nucleotide-Variants-in-Cancer",
  },
  {
    period: "Jan 2025 — May 2025",
    role: "AI Developer",
    projectName: "Facebook Comment Volume Prediction",
    description:
      "Developed a regression system to predict Facebook post engagement levels using the UCI dataset with 50+ features including temporal patterns, page metrics, and comment history. Implemented and compared four machine learning approaches (Decision Tree, Linear Regression, Neural Network, KNN) to handle highly skewed comment distribution. Engineered comprehensive preprocessing pipeline with statistical transformations and dimensionality reduction, with Decision Tree model achieving optimal prediction accuracy.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Decision Trees",
      "Keras",
      "Neural Networks",
      "Feature Engineering",
    ],
    url: "https://github.com/Joel-Milla/Facebook-Comment-Volume",
  },
  {
    period: "Aug 2024 — Dec 2024",
    role: "Developer & Scrum Master",
    projectName: "NeoSync - Neoris",
    description:
      "Built a full-stack AI-powered platform to streamline software pre-sales management, featuring an intelligent chatbot using LLaMA for automated requirement analysis and proposal generation. Architected a RAG (Retrieval-Augmented Generation) pipeline integrating Pinecone vector database with PostgreSQL for semantic search capabilities, enabling efficient document retrieval and context-aware responses. Implemented the application using Next.js, TypeScript, and Supabase, establishing CI/CD workflows with GitHub Actions and Docker for automated deployment. Led agile development as Scrum Master coordinating a team of five developers, delivering the final product presentation to Neoris executive team.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Pinecone",
      "LLaMA",
      "Docker",
      "GitHub Actions",
      "RAG",
    ],
    url: "https://github.com/Joel-Milla/Neosync",
  },
];
