import { SiteData } from "./types";

export const CUSTOMIZE_ME: SiteData = {
  hero: {
    firstName: "ALEX",
    lastName: "PULSAR",
    titles: ["AI RESEARCHER", "MACHINE LEARNING ENGINEER", "NEURAL ARCHITECT"],
    bio: "Training extreme-scale neural networks and forging intelligent systems at the boundary of human and machine cognition.",
  },
  about: {
    heading: "SYSTEM // INTELLIGENCE",
    paragraphs: [
      "I am an Artificial Intelligence Engineer specializing in generative models, reinforcement learning, and large-scale distributed inference.",
      "My work focuses on pushing the boundaries of what machines can perceive and understand, optimizing complex topologies to achieve real-time, low-latency intelligence.",
      "This environment is a manifestation of neural architecture—a procedural simulation of the systems I build every day. Scroll down to initialize the data stream."
    ],
    stats: [
      { label: "PARAMETERS TRAINED", value: "850B+" },
      { label: "CUDA CORES DEPLOYED", value: "12K+" },
      { label: "MODELS IN PRODUCTION", value: "14" },
      { label: "PAPERS PUBLISHED", value: "07" },
    ],
  },
  projects: [
    {
      id: "proj-01",
      title: "SYNAPSE A.G.I.",
      category: "CORE RESEARCH",
      description: "A multi-modal foundation model capable of real-time audio-visual reasoning with sub-100ms latency. Trained on a custom distributed GPU cluster.",
      tags: ["PyTorch", "CUDA", "Transformers", "Distributed Training"],
      year: "2025",
      link: "#",
    },
    {
      id: "proj-02",
      title: "NEURAL RENDERER",
      category: "COMPUTER VISION",
      description: "Real-time photorealistic scene generation using Gaussian Splatting and Neural Radiance Fields (NeRFs), optimizing inference via custom shaders.",
      tags: ["C++", "OpenGL", "Python", "Computer Vision"],
      year: "2024",
      link: "#",
    },
    {
      id: "proj-03",
      title: "QUANTUM INFERENCE",
      category: "OPTIMIZATION",
      description: "An open-source library for ultra-low precision (INT4/INT2) model quantization, reducing memory footprint by 80% with minimal accuracy degradation.",
      tags: ["Rust", "ONNX", "TensorRT", "Low-level Optimization"],
      year: "2024",
      link: "#",
    },
  ],
  experience: [
    {
      id: "exp-01",
      role: "PRINCIPAL AI ENGINEER",
      company: "COGNITION LABS",
      period: "2024 - PRESENT",
      description: [
        "Architected extreme-scale distributed training infrastructure for foundation models.",
        "Led a team of 12 researchers in developing novel attention mechanisms.",
        "Reduced inference latency by 60% across the core product line."
      ],
      skills: ["PyTorch", "Kubernetes", "CUDA", "Research Leadership"],
    },
    {
      id: "exp-02",
      role: "MACHINE LEARNING ENGINEER",
      company: "NEURAL DYNAMICS",
      period: "2021 - 2024",
      description: [
        "Built predictive models for high-frequency trading algorithms.",
        "Implemented real-time anomaly detection using unsupervised learning.",
      ],
      skills: ["TensorFlow", "Python", "Data Pipelines", "Time Series"],
    }
  ],
  skills: [
    {
      title: "NEURAL ARCHITECTURE",
      skills: [
        { name: "Transformers & LLMs", level: 98 },
        { name: "Computer Vision (CNN/ViT)", level: 92 },
        { name: "Reinforcement Learning", level: 85 },
      ],
    },
    {
      title: "ENGINEERING & INFRASTRUCTURE",
      skills: [
        { name: "PyTorch / JAX", level: 95 },
        { name: "CUDA / C++", level: 88 },
        { name: "Distributed Systems (Ray, K8s)", level: 90 },
      ],
    }
  ],
  contact: {
    email: "sysadmin@pulsar-ai.net",
    socials: [
      { name: "GITHUB", url: "#", icon: "github" },
      { name: "HUGGING FACE", url: "#", icon: "hf" },
      { name: "LINKEDIN", url: "#", icon: "linkedin" },
    ],
  },
};
