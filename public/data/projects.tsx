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
    period: "Jan 2025 — May 2025",
    role: "Developer",
    projectName: "LiDAR-Based Perception System",
    description:
      "Developed a point cloud processing pipeline for autonomous vehicle perception using KITTI dataset, enabling real-time object clustering and multi-frame tracking in urban environments. Implemented custom RANSAC-based plane segmentation to separate road surfaces from obstacles, followed by KD-tree optimized Euclidean clustering for object identification. Built a particle filter algorithm to track moving objects (such as cyclists) across sequential point cloud frames, maintaining temporal consistency. Enhanced processing efficiency through voxel grid filtering and region-of-interest selection, achieving sub-0.2 second processing times per frame while handling high-resolution LiDAR data from urban datasets.",
    technologies: ["C++", "PCL", "RANSAC", "KD-Tree", "Particle Filter"],
    url: "https://github.com/Joel-Milla/Lidar_Obstacle_Detection",
  },
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
