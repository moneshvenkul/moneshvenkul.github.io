export const currentlyBuilding = [
  {
    name: "ContextFlow — Multi-Agent RAG Orchestrator",
    description:
      "An open-source framework for orchestrating multi-agent RAG pipelines with dynamic context routing, reranking, and hallucination scoring. Built on LangGraph with pluggable vector stores.",
    tech: ["Python", "LangGraph", "FastAPI", "Qdrant", "OpenAI API", "Redis"],
    status: "In Progress",
  },
  {
    name: "WealthLens — Personal Finance Dashboard",
    description:
      "A privacy-first personal finance dashboard that aggregates accounts via Plaid, visualizes net worth over time, and surfaces AI-driven anomaly alerts for unusual spending patterns.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Plaid API",
      "PostgreSQL",
      "Recharts",
      "Vercel",
    ],
    status: "Shipping Soon",
  },
  {
    name: "prcli — AI-Powered PR Review CLI",
    description:
      "A developer CLI tool that pipes git diffs through an LLM to generate structured code-review summaries, flag security issues, and suggest inline improvements — installable via npm.",
    tech: [
      "Node.js",
      "TypeScript",
      "Commander.js",
      "Anthropic API",
      "GitHub API",
    ],
    status: "Planning",
  },
];

export const currentlyLearning = [
  {
    topic: "Rust Systems Programming",
    resource:
      "The Rust Programming Language (Brown University Edition) + rustlings exercises",
    progress: 52,
    icon: "🦀",
  },
  {
    topic: "RLHF & LLM Fine-Tuning",
    resource:
      "Hugging Face TRL library + DeepLearning.AI 'Finetuning LLMs' short course",
    progress: 68,
    icon: "🤖",
  },
  {
    topic: "Kubernetes Advanced Patterns",
    resource: "Kubernetes in Action (2nd ed.) + CKA exam prep on killer.sh",
    progress: 41,
    icon: "☸️",
  },
  {
    topic: "Competitive Math for FAANG Interviews",
    resource:
      "Art of Problem Solving Vol. 2 + NeetCode 150 (hard problems focus)",
    progress: 35,
    icon: "📐",
  },
];

export const weeklyActivity = [
  { day: "Mon", commits: 4 },
  { day: "Tue", commits: 7 },
  { day: "Wed", commits: 2 },
  { day: "Thu", commits: 9 },
  { day: "Fri", commits: 5 },
  { day: "Sat", commits: 1 },
  { day: "Sun", commits: 3 },
];

export const leetcodeStats = {
  solved: 342,
  easy: 128,
  medium: 178,
  hard: 36,
  streak: 28,
  rating: 1847,
};

export const openSourceActivity = {
  totalContributions: 847,
  currentStreak: 12,
  longestStreak: 45,
  repos: 23,
  stars: 156,
  forks: 48,
};
