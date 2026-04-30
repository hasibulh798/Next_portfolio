export const PROJECTS = [
  {
    id: "foodhub",
    title: "FoodHub – Fullstack Food Ordering Platform",
    description: "A fullstack food ordering platform where users can browse restaurants, view menus, and interact with a dynamic backend API system.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1600",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://foodhub-frontend-1q87.vercel.app/",
    githubUrl: "https://github.com/hasibulh798/foodhub-backend-api",
    overview: "FoodHub is a comprehensive solution for food delivery and restaurant management. It connects food lovers with their favorite local restaurants through a seamless, intuitive interface.",
    features: [
      "Secure authentication system (JWT/HTTP-only cookies)",
      "Dynamic restaurant listings with real-time availability",
      "Interactive menu system with category filtering",
      "Robust REST API integration for data consistency",
      "Fully responsive design for mobile, tablet, and desktop",
      "Real-time order state management with TanStack Query"
    ],
    challenges: [
      "Implementing secure authentication using HTTP-only cookies between frontend and backend to prevent XSS attacks.",
      "Handling complex CORS issues in production deployment across different subdomains (Vercel + Backend).",
      "Managing server state efficiently using TanStack Query to reduce unnecessary API calls and improve UX.",
      "Designing type-safe forms using Zod validation for robust user input handling.",
      "Fixing API integration issues and async race conditions in the React UI during high-frequency updates.",
      "Solving environment variable mismatches between local development and Vercel production environments.",
      "Systematic debugging of backend API failures using Postman and custom logging middleware."
    ],
    futureImprovements: [
      "Payment gateway integration with Stripe or SSLCommerz for real-time transactions.",
      "Real-time order tracking system using WebSockets for better user engagement.",
      "Transitioning to Prisma ORM for a more scalable and type-safe database architecture.",
      "Adding a Redis caching layer for API response optimization.",
      "Building a dedicated admin analytics dashboard for restaurant owners.",
      "Fine-tuning micro-interactions and performance optimization for lower latency."
    ]
  }
];

export const SKILLS = {
  frontend: ["React", "Next.js", "Tailwind CSS", "Shadcn/ui"],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB", "PostgreSQL", "Prisma"],
  stateManagement: ["TanStack Query", "REST API integration"],
  validation: ["Zod"],
  tools: ["Git", "GitHub", "Postman", "npm", "VS Code"]
};

export const EDUCATION = [
  {
    degree: "BSc",
    institution: "Govt Azizul Haque College, Bogra",
    period: "Session: 2019–2020",
    description: "Focused on computer science fundamentals and advanced mathematics."
  },
  {
    degree: "HSC",
    institution: "Ullapara Science College, Sirajganj",
    period: "Passing Year: 2019",
    description: "Major in Science with a focus on Physics, Chemistry, and Mathematics."
  },
  {
    degree: "SSC",
    institution: "Chandaikona ML High School",
    period: "Passing Year: 2017",
    description: "General science background with early exposure to computer logic."
  }
];
