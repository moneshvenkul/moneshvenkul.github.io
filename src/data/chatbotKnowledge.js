/* ============================================================
   Monesh Venkul Vommi — AI Chatbot Knowledge Base
   ============================================================ */

export const knowledgeBase = [
  {
    id: "greeting",
    keywords: [
      "hi",
      "hello",
      "hey",
      "howdy",
      "sup",
      "what's up",
      "good morning",
      "good evening",
      "greetings",
    ],
    response:
      "Hey there! 👋 I'm Monesh's AI assistant. I can tell you about his experience, skills, projects, and more. What would you like to know?",
  },
  {
    id: "about",
    keywords: [
      "who",
      "monesh",
      "about",
      "introduce",
      "summary",
      "tell me",
      "background",
      "overview",
      "yourself",
      "who are you",
      "person",
    ],
    response:
      "Monesh Venkul Vommi is a **Senior Software Engineer & AI Engineer** with **7+ years** of experience across fintech, enterprise consulting, and edtech. Currently at **Fidelity Investments** in Roanoke, TX, he built the team's first production RAG pipeline that was adopted by 3 enterprise teams within 4 weeks. He's an **AWS Certified Solutions Architect** who works best at the intersection of AI and distributed systems. Open to remote opportunities.",
  },
  {
    id: "current_role",
    keywords: [
      "current",
      "now",
      "currently",
      "today",
      "fidelity",
      "present",
      "latest job",
    ],
    response:
      "Monesh is currently a **Senior Software Engineer at Fidelity Investments** (June 2025 – Present) in Roanoke, TX. His highlights there include:\n\n• Built the team's **first production RAG pipeline** (LangChain + Pinecone) — adopted by 3 enterprise teams in 4 weeks\n• **58% latency reduction** by replacing SQL with Neo4j graph database for financial relationship queries\n• **32% TTI improvement** migrating the advisor portal to Next.js 14 with Bun runtime\n• Ran RAG/LangChain workshops for 4 engineers, cutting onboarding time by 3 weeks",
  },
  {
    id: "experience",
    keywords: [
      "experience",
      "work",
      "job",
      "career",
      "years",
      "history",
      "worked",
      "companies",
      "employers",
    ],
    response:
      "Monesh has **7+ years** of engineering experience across:\n\n🏢 **Fidelity Investments** (Jun 2025–Present) — Senior Software Engineer, RAG pipeline, Neo4j, Next.js 14\n\n🏢 **Ascendion** (Mar 2024–May 2025) — Senior Full Stack Developer, 1M+ users, Vue.js/Java/Spring Boot\n\n🏢 **StemSims** (Jun–Sep 2023) — Full Stack Developer, React + ML simulations\n\n🏢 **HCL Technologies** (Apr 2020–Dec 2022) — Software Engineer, banking microservices, 500K+ daily transactions\n\n🎓 Also: Instructor at AlmaBetter (300+ learners), Technical Instructor on Udemy",
  },
  {
    id: "ascendion",
    keywords: [
      "ascendion",
      "1m",
      "million users",
      "playwright",
      "cypress",
      "vue",
      "vue.js",
      "redis",
      "wcag",
      "accessibility",
    ],
    response:
      "At **Ascendion** (Mar 2024 – May 2025), Monesh:\n\n• Reduced CI/CD pipeline time **45%** migrating from Cypress → Playwright (250+ E2E tests, 95% coverage)\n• Built RESTful APIs (Java/Spring Boot) + Vue.js components serving **1M+ monthly active users** (38% faster page loads)\n• Achieved **WCAG 2.1 AA** compliance across 12 screens, cutting screen-reader latency by 22%\n• Introduced **Redis caching** — reduced DB read load by 30% during peak traffic",
  },
  {
    id: "hcl",
    keywords: [
      "hcl",
      "banking",
      "microservices",
      "transactions",
      "india",
      "spring boot",
      "jenkins",
      "docker banking",
      "99.95",
      "uptime",
    ],
    response:
      "At **HCL Technologies** (Apr 2020 – Dec 2022), Monesh:\n\n• Delivered core banking microservices (Java/Spring Boot) for a **top-5 Indian private bank**\n• Handled **500K+ daily transactions** with **99.95% uptime SLA**\n• Cut API response time **35%** via PostgreSQL optimization, connection pooling & JVM tuning\n• Containerized 8 legacy banking services with **Docker** + Jenkins CI/CD — zero-downtime deploys, 70% less manual deployment effort",
  },
  {
    id: "stemsims",
    keywords: [
      "stemsims",
      "stem",
      "simulations",
      "edtech",
      "gainesville",
      "education",
      "simulation",
    ],
    response:
      "At **StemSims** (Jun – Sep 2023) in Gainesville, FL, Monesh:\n\n• Built React-based interactive **STEM simulations** with real-time data visualization and ML-driven feedback\n• Improved student **session completion rates by 20%** across 300+ concurrent users\n• Redesigned PostgreSQL schemas with composite indexing — **40% faster query times**\n• Shipped a shared UI component library adopted across 6 simulation modules",
  },
  {
    id: "ai_ml",
    keywords: [
      "ai",
      "ml",
      "machine learning",
      "llm",
      "rag",
      "langchain",
      "openai",
      "pinecone",
      "gpt",
      "artificial intelligence",
      "vector",
      "embedding",
      "generative",
    ],
    response:
      "Monesh is a hands-on **AI/ML engineer** with production experience:\n\n🤖 **RAG Pipeline** — LangChain + Pinecone, production at Fidelity, 3 enterprise teams adopted in 4 weeks\n\n🎨 **Sketch-to-Image AI** — Python + Stable Diffusion API + React, sub-3s average latency\n\n🍽️ **AI Meal Planner** — Next.js + OpenAI RAG, 40% reduction in irrelevant recipe recommendations\n\nSkills: LLMs, Prompt Engineering, LangChain, OpenAI API, Pinecone, TensorFlow, PyTorch, Vector Databases",
  },
  {
    id: "neo4j",
    keywords: [
      "neo4j",
      "graph",
      "graph database",
      "58%",
      "latency",
      "relationship",
      "multi-hop",
      "traversal",
    ],
    response:
      "One of Monesh's standout wins at Fidelity: he **slashed query latency by 58%** by replacing relational SQL schemas with a **Neo4j graph database**.\n\nThis enabled multi-hop traversal across client portfolio networks — something traditional SQL couldn't do efficiently. It's a great example of picking the right data model for the problem.",
  },
  {
    id: "nextjs",
    keywords: [
      "nextjs",
      "next.js",
      "ssr",
      "server-side",
      "bun",
      "time-to-interactive",
      "tti",
      "cra",
      "create react app",
    ],
    response:
      "At Fidelity, Monesh migrated the advisor portal from **Create React App → Next.js 14** with:\n\n• **Server-Side Rendering (SSR)** for faster initial loads\n• **Bun** as the JS runtime (significantly faster than Node for builds)\n• Result: **32% improvement in Time-to-Interactive**\n\nHe has deep Next.js expertise including App Router, Server Components, and static optimization.",
  },
  {
    id: "java_spring",
    keywords: [
      "java",
      "spring",
      "spring boot",
      "backend",
      "microservices",
      "api",
      "rest",
      "jvm",
      "hibernate",
    ],
    response:
      "Monesh has **5+ years** of Java/Spring Boot experience, including:\n\n• Banking microservices handling **500K+ daily transactions** (HCL)\n• RESTful APIs serving **1M+ monthly users** (Ascendion)\n• PostgreSQL optimization, connection pooling, JVM tuning\n• Microservices architecture, Docker containerization, CI/CD pipelines",
  },
  {
    id: "skills",
    keywords: [
      "skills",
      "technologies",
      "tech stack",
      "programming",
      "languages",
      "tools",
      "frameworks",
      "know",
      "expertise",
    ],
    response:
      "**Monesh's Tech Stack:**\n\n🤖 **AI/ML:** LLMs, RAG, LangChain, OpenAI API, Pinecone, TensorFlow, PyTorch\n\n💻 **Languages:** Python, Java, TypeScript, JavaScript\n\n⚛️ **Frontend:** Next.js 14, React, Vue.js, GraphQL\n\n⚙️ **Backend:** Spring Boot, Node.js, REST APIs, Microservices\n\n☁️ **Cloud:** AWS (SA Certified), Kubernetes, Docker, Terraform, CI/CD\n\n🗄️ **DB:** PostgreSQL, Neo4j, Redis, MongoDB\n\n🧪 **Testing:** Playwright, Jest, Cypress, WCAG 2.1",
  },
  {
    id: "aws",
    keywords: [
      "aws",
      "amazon",
      "cloud",
      "solutions architect",
      "kubernetes",
      "k8s",
      "docker",
      "terraform",
      "devops",
      "certified",
      "cloud native",
    ],
    response:
      "Monesh is an **AWS Certified Solutions Architect – Associate** with hands-on experience in:\n\n• **Kubernetes** — container orchestration at scale\n• **Docker** — containerized 8 banking services (HCL)\n• **Terraform** — infrastructure-as-code\n• **GitHub Actions / Jenkins** — CI/CD pipelines\n• **Microservices** architecture across multiple productions systems\n\nHe reduced CI/CD pipeline time by 45% at Ascendion.",
  },
  {
    id: "projects",
    keywords: [
      "projects",
      "built",
      "created",
      "side project",
      "personal project",
      "portfolio projects",
      "showcase",
    ],
    response:
      "**Monesh's Key Projects:**\n\n🍽️ **AI Meal Planner** — Full-stack Next.js + OpenAI platform using RAG to retrieve and rank recipes by dietary profile. Reduced irrelevant recommendations by **40%** vs keyword search.\n\n🎨 **Sketch-to-Image Generative AI** — Python + Stable Diffusion API + React converting hand-drawn sketches to photorealistic renders in **sub-3s** average latency.\n\n🔗 **GraphQL API Gateway** — Node.js + Apollo consolidating 5 legacy REST microservices. Cut frontend data-fetching code by **60%** and eliminated 3 redundant API calls per page load.\n\n🏦 **RAG Financial Pipeline** — LangChain + Pinecone for querying thousands of financial documents in plain English at Fidelity.",
  },
  {
    id: "meal_planner",
    keywords: [
      "meal",
      "planner",
      "recipe",
      "food",
      "dietary",
      "openai meal",
      "nutrition",
    ],
    response:
      "**AI Meal Planner** — A full-stack Next.js + OpenAI platform:\n\n• Uses **RAG** to retrieve and rank recipes based on user dietary profiles\n• Reduced irrelevant recommendation rate by **40%** vs traditional keyword search\n• Vector-based similarity matching for personalized suggestions\n• Stack: Next.js, OpenAI API, Pinecone, PostgreSQL",
  },
  {
    id: "sketch_ai",
    keywords: [
      "sketch",
      "stable diffusion",
      "image",
      "generative",
      "photorealistic",
      "drawing",
      "art",
      "diffusion",
    ],
    response:
      "**Sketch-to-Image Generative AI** — Real-time image synthesis tool:\n\n• Converts hand-drawn sketches to photorealistic renders\n• **Sub-3 second** average latency\n• Stack: Python, Stable Diffusion API, React\n• Uses ControlNet-style conditioning for sketch-guided generation",
  },
  {
    id: "graphql",
    keywords: [
      "graphql",
      "apollo",
      "gateway",
      "rest",
      "api gateway",
      "consolidation",
    ],
    response:
      "**GraphQL API Gateway** — Unified gateway built with Node.js + Apollo:\n\n• Consolidated 5 legacy REST microservices into a single GraphQL endpoint\n• Cut frontend data-fetching code by **60%**\n• Eliminated 3 redundant API calls per page load\n• Implemented DataLoader for batching and caching",
  },
  {
    id: "education",
    keywords: [
      "education",
      "degree",
      "university",
      "gpa",
      "masters",
      "bachelor",
      "study",
      "college",
      "school",
      "academic",
    ],
    response:
      "**Monesh's Education:**\n\n🎓 **M.S. Business Analytics** — University of New Haven (Dec 2023)\n• GPA: **4.0/4.0** — Provost Scholarship Recipient\n• Focus: Analytics, predictive modeling, ML, cloud-enabled pipelines\n\n🎓 **B.E. Computer Science** — Sathyabama University (Apr 2020)\n• GPA: **9.2/10**\n• Published Scopus-indexed research on cloud security\n\n📚 **Zero to Mastery Academy** — Advanced Software Engineering (2022–2024)",
  },
  {
    id: "certifications",
    keywords: [
      "certifications",
      "certified",
      "aws cert",
      "github copilot",
      "credentials",
      "badge",
      "license",
    ],
    response:
      "**Monesh's Certifications:**\n\n☁️ **AWS Certified Solutions Architect – Associate** (Amazon Web Services)\n\n🤖 **Microsoft GitHub Copilot Certified** (Microsoft)\n\nPlus: HackerRank certifications in JavaScript, React JS, and Problem Solving (Intermediate).",
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "reach",
      "hire",
      "message",
      "phone",
      "connect",
      "get in touch",
      "talk",
      "interview",
    ],
    response:
      "**Get in touch with Monesh:**\n\n📧 **Email:** mvvenkul@gmail.com\n\n💼 **LinkedIn:** linkedin.com/in/monesh-venkul-vommi-8a80b6174\n\n🐙 **GitHub:** github.com/moneshvenkul\n\n📍 **Location:** Dallas-Fort Worth, TX — Open to Remote\n\n📞 **Phone:** +1 (475) 441-1062\n\nHe's actively open to Senior Software Engineer and AI/ML roles at top-tier companies.",
  },
  {
    id: "faang",
    keywords: [
      "faang",
      "google",
      "amazon",
      "meta",
      "apple",
      "netflix",
      "microsoft",
      "big tech",
      "top companies",
      "tier1",
      "top tier",
    ],
    response:
      "**Is Monesh a FAANG-ready engineer?** Absolutely. Here's why:\n\n✅ **Scale** — APIs handling 1M+ users, banking systems with 500K+ daily transactions\n✅ **AI/ML** — Production RAG pipeline, adopted by 3 enterprise teams\n✅ **System Design** — Neo4j graph traversal, Redis caching, microservices, K8s\n✅ **Metrics** — 58% latency cut, 45% CI/CD improvement, 32% TTI improvement\n✅ **Breadth** — AI + Backend + Frontend + Cloud + Testing\n✅ **Certifications** — AWS Solutions Architect\n✅ **Education** — MS GPA 4.0, BS GPA 9.2\n\nHe's actively open to FAANG and FAANG-adjacent roles.",
  },
  {
    id: "location",
    keywords: [
      "location",
      "where",
      "dallas",
      "fort worth",
      "remote",
      "texas",
      "relocation",
      "based",
      "live",
    ],
    response:
      "Monesh is based in **Dallas-Fort Worth, TX** and is **open to remote** opportunities. He's also open to discussing relocation for the right role at a top-tier company.",
  },
  {
    id: "unique",
    keywords: [
      "unique",
      "different",
      "stand out",
      "special",
      "strength",
      "superpower",
      "competitive advantage",
      "why hire",
    ],
    response:
      "What makes Monesh stand out:\n\n🚀 **AI-First Mindset** — One of the few full-stack engineers who can also own a production RAG pipeline end-to-end\n\n📊 **Metric-Driven** — Every project he touches shows measurable improvement (not just 'built a thing')\n\n🌐 **Full Spectrum** — From Neo4j graph schemas to Next.js SSR to Docker/K8s — he covers the whole stack\n\n🎯 **Enterprise Proven** — Fintech, banking, edtech across multiple countries\n\n🧠 **Educator** — Mentored 300+ engineers at AlmaBetter; ran LangChain workshops at Fidelity",
  },
  {
    id: "availability",
    keywords: [
      "available",
      "open to work",
      "looking",
      "job search",
      "hire",
      "opportunity",
      "open",
      "seeking",
      "actively",
    ],
    response:
      "Yes! **Monesh is actively open** to new opportunities, specifically:\n\n• Senior Software Engineer roles\n• Staff / Principal Engineer roles\n• AI/ML Engineering positions\n• Full-Stack Engineering at FAANG or top-tier companies\n• Remote or Dallas-Fort Worth based\n\nReach him at: **mvvenkul@gmail.com** or LinkedIn.",
  },
  {
    id: "leetcode",
    keywords: [
      "leetcode",
      "competitive",
      "algorithms",
      "data structures",
      "coding",
      "interview",
      "dsa",
    ],
    response:
      "Monesh actively practices on **LeetCode** (username: monesh_venkul) and HackerRank. He has certifications in JavaScript, React JS, and Problem Solving from HackerRank, and has HackerRank Problem Solving (Intermediate) certification — solid signal for FAANG interviews.",
  },
  {
    id: "publications",
    keywords: [
      "research",
      "paper",
      "publication",
      "scopus",
      "academic",
      "cloud security",
      "cryptography",
    ],
    response:
      'Monesh published a **Scopus-indexed research paper** titled:\n\n📄 *"Multi-layer Security in Cloud Storage Using Cryptography"*\n\nThe paper covers implementing advanced cryptographic techniques to create multi-layered defense mechanisms for cloud storage environments — demonstrating his depth in both systems engineering and security fundamentals.',
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "download", "view resume", "pdf"],
    response:
      "You can **view Monesh's resume** via the resume button on this page, or reach out to him directly at mvvenkul@gmail.com to request a copy. His LinkedIn profile at linkedin.com/in/monesh-venkul-vommi-8a80b6174 also has his full work history.",
  },
  {
    id: "tools_page",
    keywords: [
      "tools",
      "free tools",
      "resume enhancer",
      "stack recommender",
      "sql explainer",
      "system design cards",
      "flashcards",
      "tech stack",
      "enhance bullet",
    ],
    response:
      "This site has **4 free AI-powered dev tools** at the /tools page:\n\n⚙️ **Resume Bullet Enhancer** — Paste a weak resume bullet and get an action-verb, metric-driven FAANG-ready version instantly\n\n🔧 **Tech Stack Recommender** — Answer 5 questions about your project and get a tailored stack recommendation\n\n🗄️ **SQL Explainer** — Paste any SQL query and get a plain-English breakdown with clause-by-clause analysis\n\n🃏 **System Design Flashcards** — 10+ cards covering Load Balancers, Caching, CDNs, and more — click to expand full breakdowns\n\nAll client-side — no data leaves your browser. Check them out at the **Tools** link in the nav!",
  },
  {
    id: "prep_page",
    keywords: [
      "interview prep",
      "faang prep",
      "dsa",
      "data structures",
      "algorithms",
      "behavioral",
      "star",
      "system design interview",
      "leetcode patterns",
      "prep",
      "prepare",
      "interview",
      "crack",
    ],
    response:
      "There's a full **FAANG Interview Prep Hub** at the /prep page:\n\n🧩 **DSA Patterns** — Filterable by difficulty & category (Sliding Window, Two Pointers, BFS/DFS, DP, and more) — each with complexity analysis, key insight, and a code template\n\n🏗️ **System Design Templates** — Real templates for URL Shortener, Rate Limiter, Notification Service, and more — components, approach steps, and key numbers\n\n🗣️ **Behavioral Q&As** — Full STAR-formatted answers for Leadership, Conflict, Failure, Innovation questions\n\nThis is distilled from **7+ years of engineering + 300+ LeetCode problems**. Head to **Interview Prep** in the nav!",
  },
  {
    id: "dashboard_page",
    keywords: [
      "dashboard",
      "activity",
      "currently building",
      "building now",
      "github activity",
      "commits",
      "streak",
      "learning",
      "progress",
      "what are you working on",
      "side projects",
    ],
    response:
      "Check out the **Live Dashboard** at /dashboard to see what Monesh is working on right now:\n\n📊 **Open Source Activity** — Total contributions, current streak, stars, forks\n\n📈 **Weekly Commit Chart** — Animated bar chart of this week's commits\n\n🟡 **LeetCode Ring** — Solved count, Easy/Medium/Hard breakdown, contest rating\n\n🚀 **Currently Building** — 3 active projects: ContextFlow (Multi-Agent RAG), WealthLens (Finance Dashboard), prcli (AI PR Review CLI)\n\n📚 **Currently Learning** — Rust, RLHF/Fine-tuning, K8s, Competitive Math — with live progress bars",
  },
  {
    id: "blog_page",
    keywords: [
      "blog",
      "articles",
      "posts",
      "write",
      "writing",
      "technical writing",
      "read",
      "digest",
      "weekly digest",
      "deep dive",
      "tutorial",
    ],
    response:
      "Monesh writes long-form technical posts on the **Blog** page at /blog:\n\n✍️ **Neo4j Graph Traversal** — How he cut API latency 58% at Fidelity by replacing SQL with graph DB\n\n🤖 **Production RAG Pipeline** — Building Fidelity's first LLM pipeline from scratch — chunking, retrieval, security, and enterprise adoption\n\n☁️ **AWS SAA Exam in 3 Weeks** — The exact study plan he used to pass the cert\n\n⚛️ **Vue.js vs React in Enterprise** — Real trade-offs from a 1M+ user healthcare portal\n\nPlus a **Weekly Tech Digest** with curated links across AI, Backend, Frontend, and Cloud. Head to **Blog** in the nav!",
  },
];

export const suggestedQuestions = [
  "Tell me about Monesh",
  "What are his AI/ML skills?",
  "Experience at Fidelity?",
  "Free tools on this site?",
  "Interview prep resources?",
  "Is he open to work?",
];

export function findBestResponse(userInput) {
  const input = userInput.toLowerCase().replace(/[^\w\s]/g, "");
  const words = input.split(/\s+/).filter(Boolean);

  let bestMatch = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (input.includes(keyword)) {
        // Longer keyword matches score higher
        score += keyword.split(" ").length + 1;
      }
    }
    // Also check individual words
    for (const word of words) {
      if (word.length > 2) {
        for (const keyword of entry.keywords) {
          if (keyword === word) score += 0.5;
        }
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.response;
  }

  return "I'm not sure about that specific topic — but I can tell you about Monesh's **experience**, **AI/ML skills**, **projects**, **education**, or how to **contact him**. What would you like to know? 😊";
}
