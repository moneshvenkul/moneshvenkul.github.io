// System design flashcard data
export const systemDesignCards = [
  {
    id: 1,
    topic: "Load Balancer",
    icon: "⚖️",
    color: "#00d4ff",
    what:
      "A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes a bottleneck.",
    when:
      "Use when you need horizontal scalability, high availability, or zero-downtime deployments across multiple server instances.",
    types: [
      "Layer 4 (Transport) — routes by IP/TCP without inspecting payload",
      "Layer 7 (Application) — routes by HTTP headers, cookies, or URL path",
      "Round Robin — requests distributed evenly in sequence",
      "Least Connections — routes to the server with fewest active connections",
      "IP Hash — same client always routes to the same server (sticky sessions)",
      "Weighted — servers assigned traffic proportional to their capacity",
    ],
    tradeoffs: [
      "Pro: Eliminates single point of failure and enables horizontal scaling",
      "Pro: Enables health checks and automatic removal of failed nodes",
      "Con: Adds network hop latency and becomes a bottleneck itself if not redundant",
    ],
    examples: [
      "AWS ALB / NLB",
      "NGINX",
      "HAProxy",
      "GCP Cloud Load Balancing",
      "Cloudflare Load Balancing",
    ],
  },
  {
    id: 2,
    topic: "CDN (Content Delivery Network)",
    icon: "🌐",
    color: "#7b2fff",
    what:
      "A CDN is a geographically distributed network of proxy servers that cache and serve static content from locations closer to end users.",
    when:
      "Use when serving static assets (JS, CSS, images, video) to a global audience, or when origin server latency is unacceptable for end users.",
    types: [
      "Push CDN — you upload content to CDN proactively; ideal for large, infrequently changed files",
      "Pull CDN — CDN fetches from origin on cache miss and caches it; ideal for dynamic sites",
      "Edge Functions — compute logic runs at CDN edge nodes (Cloudflare Workers, Lambda@Edge)",
      "P2P CDN — peers share bandwidth (used by video streaming platforms)",
    ],
    tradeoffs: [
      "Pro: Dramatically reduces latency for global users and offloads origin bandwidth",
      "Pro: Provides DDoS protection by absorbing traffic at edge nodes",
      "Con: Cache invalidation is hard — stale content can persist until TTL expires",
    ],
    examples: [
      "Cloudflare",
      "AWS CloudFront",
      "Fastly",
      "Akamai",
      "GCP Cloud CDN",
    ],
  },
  {
    id: 3,
    topic: "Redis Caching",
    icon: "⚡",
    color: "#00ff88",
    what:
      "Redis is an in-memory data structure store used as a cache, message broker, or session store to reduce database load and improve response times.",
    when:
      "Use when read-heavy workloads hit the database repeatedly for the same data, or when you need sub-millisecond response times for hot data.",
    types: [
      "Cache-Aside (Lazy Loading) — app reads cache first, populates on miss",
      "Write-Through — write to cache and DB simultaneously; always consistent",
      "Write-Behind (Write-Back) — write to cache immediately, async flush to DB",
      "Read-Through — cache sits in front of DB; app only talks to cache",
      "TTL-based expiry — keys automatically evicted after a time period",
      "LRU / LFU eviction — evict least-recently or least-frequently used keys",
    ],
    tradeoffs: [
      "Pro: Sub-millisecond reads eliminate DB round-trips for hot data",
      "Pro: Supports complex data structures (sorted sets, lists, streams) beyond simple key-value",
      "Con: Cache invalidation consistency is complex — stale reads possible in cache-aside pattern",
    ],
    examples: [
      "Redis OSS",
      "AWS ElastiCache for Redis",
      "Upstash Redis",
      "GCP Memorystore",
      "Redis Enterprise",
    ],
  },
  {
    id: 4,
    topic: "Message Queue (Kafka)",
    icon: "📨",
    color: "#ff6b35",
    what:
      "A message queue decouples producers from consumers by providing a durable, ordered buffer so services communicate asynchronously without tight coupling.",
    when:
      "Use when services need to communicate without blocking, when you need to absorb traffic spikes, or when you require event replay and audit trails.",
    types: [
      "Point-to-Point (Queue) — one producer, one consumer per message (SQS, RabbitMQ)",
      "Pub/Sub (Topic) — one producer, many consumers each get a copy (Kafka, SNS)",
      "Kafka Partitions — ordered log partitioned for parallel consumption",
      "Consumer Groups — multiple consumers share partition load for scalability",
      "Dead Letter Queue (DLQ) — captures messages that repeatedly fail processing",
    ],
    tradeoffs: [
      "Pro: Decouples producer and consumer lifecycles, enabling independent scaling",
      "Pro: Kafka's durable log allows message replay for reprocessing or new consumers",
      "Con: Introduces eventual consistency — consumers may lag behind producers under load",
    ],
    examples: [
      "Apache Kafka",
      "AWS SQS / SNS",
      "AWS Kinesis",
      "Google Pub/Sub",
      "RabbitMQ",
      "Confluent Cloud",
    ],
  },
  {
    id: 5,
    topic: "SQL vs NoSQL Decision",
    icon: "🗄️",
    color: "#ff2d55",
    what:
      "SQL databases enforce relational schemas with ACID guarantees; NoSQL databases trade strict consistency for flexible schemas and horizontal scalability.",
    when:
      "Choose SQL when data is relational and consistency is critical; choose NoSQL when schema flexibility, massive scale, or specific access patterns (document, graph, time-series) are required.",
    types: [
      "Document Store — JSON documents, flexible schema (MongoDB, Firestore)",
      "Key-Value Store — simple lookups, extremely fast (DynamoDB, Redis)",
      "Wide-Column Store — sparse table with dynamic columns (Cassandra, HBase)",
      "Graph Database — optimized for relationship traversal (Neo4j, Amazon Neptune)",
      "Time-Series DB — optimized for time-stamped data (InfluxDB, TimescaleDB)",
      "Relational (SQL) — tables, joins, ACID transactions (PostgreSQL, MySQL)",
    ],
    tradeoffs: [
      "Pro (SQL): ACID transactions and JOINs make complex relational queries reliable and consistent",
      "Pro (NoSQL): Horizontal sharding scales writes beyond a single master node",
      "Con (NoSQL): No standard query language; denormalization leads to data duplication",
    ],
    examples: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "Cassandra",
      "CockroachDB",
      "Firestore",
    ],
  },
  {
    id: 6,
    topic: "Microservices Architecture",
    icon: "🔬",
    color: "#ffd60a",
    what:
      "Microservices decompose a monolithic application into small, independently deployable services each owning a bounded domain and its data.",
    when:
      "Use when teams need to scale independently, deploy frequently, or when different services have radically different scaling or technology requirements.",
    types: [
      "Domain-Driven Design (DDD) — services aligned to business bounded contexts",
      "Sidecar Pattern — helper process runs alongside each service (logging, auth proxy)",
      "Strangler Fig — incrementally migrate monolith by replacing features with microservices",
      "Service Mesh — infrastructure layer (Istio, Linkerd) handles mTLS, retries, observability",
      "Event-Sourcing — services communicate by emitting and consuming domain events",
    ],
    tradeoffs: [
      "Pro: Independent deployment and scaling per service accelerates team autonomy",
      "Pro: Fault isolation — a failure in one service does not cascade to others",
      "Con: Distributed system complexity — network latency, partial failures, and distributed tracing are hard",
    ],
    examples: [
      "Netflix OSS",
      "AWS ECS / EKS",
      "Kubernetes + Istio",
      "Consul",
      "gRPC",
      "Envoy Proxy",
    ],
  },
  {
    id: 7,
    topic: "API Gateway",
    icon: "🚪",
    color: "#00d4ff",
    what:
      "An API Gateway is a single entry point that handles cross-cutting concerns — routing, auth, rate limiting, and SSL termination — on behalf of backend services.",
    when:
      "Use when you have multiple microservices that clients call directly and you need centralized auth, rate limiting, analytics, or request aggregation.",
    types: [
      "Request Routing — forward requests to the correct downstream service",
      "Authentication / Authorization — verify JWT or API key before forwarding",
      "Rate Limiting — cap requests per client to prevent abuse",
      "SSL Termination — decrypt TLS at the gateway, plain HTTP internally",
      "Request Aggregation (BFF) — combine multiple service calls into one client response",
      "Schema Validation — reject malformed payloads early",
    ],
    tradeoffs: [
      "Pro: Centralizes cross-cutting concerns so services stay lean and focused",
      "Pro: Single place to enforce security policies, rotate keys, and monitor traffic",
      "Con: Becomes a single point of failure and latency bottleneck if not clustered and optimized",
    ],
    examples: [
      "AWS API Gateway",
      "Kong",
      "NGINX",
      "Apigee",
      "Traefik",
      "AWS App Mesh",
    ],
  },
  {
    id: 8,
    topic: "Circuit Breaker Pattern",
    icon: "⚡",
    color: "#7b2fff",
    what:
      "The Circuit Breaker prevents a service from repeatedly calling a failing dependency by detecting failure thresholds and short-circuiting calls until recovery.",
    when:
      "Use in any microservice that makes synchronous HTTP or RPC calls to downstream dependencies, to prevent cascading failures across the service graph.",
    types: [
      "Closed State — normal operation; all requests pass through",
      "Open State — dependency is failing; all requests fail fast with a fallback",
      "Half-Open State — limited probe requests sent to test if dependency recovered",
      "Fallback Strategy — return cached data, default value, or graceful degradation",
      "Bulkhead Pattern — isolate thread pools per dependency to limit blast radius",
    ],
    tradeoffs: [
      "Pro: Prevents cascading failures and frees resources when a dependency is down",
      "Pro: Fast-fail with fallback gives users a degraded-but-functional experience",
      "Con: Requires careful threshold tuning — too sensitive causes false trips, too loose allows thundering herds",
    ],
    examples: [
      "Netflix Hystrix (legacy)",
      "Resilience4j",
      "Polly (.NET)",
      "AWS App Mesh",
      "Istio Circuit Breaking",
    ],
  },
  {
    id: 9,
    topic: "Database Sharding",
    icon: "🔀",
    color: "#00ff88",
    what:
      "Database sharding partitions data across multiple database instances (shards) so each shard holds a subset of the total data, enabling horizontal write scalability.",
    when:
      "Use when a single database instance cannot handle write throughput or data volume, typically at hundreds of millions of rows or thousands of writes per second.",
    types: [
      "Range-Based Sharding — partition by value range (e.g., user IDs 1-1M on shard 1)",
      "Hash-Based Sharding — hash the shard key to evenly distribute rows",
      "Directory-Based Sharding — lookup table maps keys to shards, flexible re-sharding",
      "Geo-Based Sharding — partition by region for data residency compliance",
      "Consistent Hashing — minimizes key redistribution when shards are added or removed",
    ],
    tradeoffs: [
      "Pro: Horizontal scaling of writes and storage beyond single-node limits",
      "Pro: Queries targeting a single shard are faster since they scan less data",
      "Con: Cross-shard queries (JOINs, aggregations) require scatter-gather, adding complexity and latency",
    ],
    examples: [
      "Vitess (MySQL sharding)",
      "Citus (PostgreSQL)",
      "MongoDB sharded clusters",
      "DynamoDB (auto-sharded)",
      "Cassandra consistent hashing",
    ],
  },
  {
    id: 10,
    topic: "Event-Driven Architecture",
    icon: "🎯",
    color: "#ff6b35",
    what:
      "Event-Driven Architecture structures a system around the production, detection, and reaction to events, enabling loosely coupled services that respond to state changes asynchronously.",
    when:
      "Use when services need to react to business events without polling, when you need an audit log of all state changes, or when you want to enable new consumers without modifying producers.",
    types: [
      "Event Notification — lightweight signal that something happened (no payload)",
      "Event-Carried State Transfer — event contains full entity snapshot, no DB lookup needed",
      "Event Sourcing — the event log IS the database; current state is derived by replaying events",
      "CQRS — Command (writes) and Query (reads) models are separated and optimized independently",
      "Saga Pattern — long-running transactions coordinated via compensating events across services",
    ],
    tradeoffs: [
      "Pro: Producers and consumers are fully decoupled — new consumers can be added without changing producers",
      "Pro: Event log provides a complete audit trail and enables temporal queries and replay",
      "Con: Eventual consistency makes it hard to reason about system state at any given moment",
    ],
    examples: [
      "Apache Kafka",
      "AWS EventBridge",
      "Google Pub/Sub",
      "Azure Event Grid",
      "Axon Framework (Event Sourcing)",
    ],
  },
];

// Resume enhancement rules — action verb upgrades + impact templates
export const resumeEnhancementRules = {
  weakVerbs: {
    "worked on": ["Architected", "Engineered", "Developed", "Built"],
    helped: ["Collaborated to", "Contributed to", "Supported"],
    fixed: ["Resolved", "Debugged", "Patched", "Eliminated"],
    made: ["Delivered", "Implemented", "Shipped", "Launched"],
    did: ["Executed", "Completed", "Delivered", "Achieved"],
    used: ["Leveraged", "Utilized", "Applied", "Deployed"],
    "worked with": ["Collaborated with", "Partnered with", "Coordinated with"],
    improved: ["Optimized", "Enhanced", "Boosted", "Accelerated"],
    created: ["Designed and implemented", "Architected", "Developed"],
    tested: ["Validated", "Verified", "QA-tested", "Automated testing for"],
  },
  metricTemplates: [
    "reducing response time by {X}%",
    "improving throughput by {X}%",
    "serving {X}K+ daily active users",
    "cutting deployment time by {X}%",
    "achieving {X}% test coverage",
    "reducing infrastructure costs by {X}%",
    "increasing conversion rate by {X}%",
  ],
  impactPhrases: [
    "adopted by {X} enterprise teams",
    "used in production across {X} services",
    "scaling to {X}M+ monthly requests",
    "deployed across {X} environments",
  ],
};

export const techStackOptions = {
  projectType: [
    "Web App",
    "Mobile App",
    "Data Pipeline",
    "REST API",
    "Real-time System",
    "CLI Tool",
  ],
  scale: [
    "Prototype / Solo",
    "Startup (< 10 engineers)",
    "Scale-up (10-100)",
    "Enterprise (100+)",
  ],
  budget: [
    "Free / Open Source only",
    "Low ($0-$500/mo)",
    "Medium ($500-5K/mo)",
    "Enterprise (unlimited)",
  ],
  timeline: ["Weekend hack", "1-4 weeks", "1-3 months", "6+ months"],
  team: ["Solo", "2-3 engineers", "Small team (4-10)", "Large team (10+)"],
};

export const techStackRecommendations = {
  // Keyed by projectType-scale combos
  "Web App-Prototype / Solo": {
    frontend: "Next.js 14",
    backend: "Next.js API Routes",
    database: "SQLite / PlanetScale",
    cloud: "Vercel (free tier)",
    testing: "Vitest + Playwright",
    why: "Zero-config, instant deploy, no server management.",
  },
  "Web App-Startup (< 10 engineers)": {
    frontend: "Next.js 14 + TypeScript",
    backend: "Node.js + Fastify",
    database: "PostgreSQL (Supabase)",
    cloud: "AWS ECS / Render",
    testing: "Jest + Cypress",
    why: "Type safety and solid ecosystem for fast iteration.",
  },
  "Web App-Scale-up (10-100)": {
    frontend: "React + TypeScript + Vite",
    backend: "Java Spring Boot",
    database: "PostgreSQL + Redis cache",
    cloud: "AWS (ALB + ECS + RDS)",
    testing: "JUnit + Playwright + K6",
    why: "Battle-tested stack that scales horizontally.",
  },
  "Web App-Enterprise (100+)": {
    frontend: "React + TypeScript + Nx monorepo",
    backend: "Java Spring Boot (microservices)",
    database: "PostgreSQL + Redis + Elasticsearch",
    cloud: "AWS multi-region + Kubernetes",
    testing: "JUnit + Playwright + Gatling",
    why: "Enterprise-grade reliability, observability, and team autonomy.",
  },
  "Data Pipeline-Prototype / Solo": {
    frontend: "Streamlit",
    backend: "Python + FastAPI",
    database: "DuckDB / SQLite",
    cloud: "GCP Cloud Run",
    testing: "pytest",
    why: "Fastest path from data to deployed app.",
  },
  "Data Pipeline-Startup (< 10 engineers)": {
    frontend: "React + Recharts",
    backend: "Python + FastAPI + Celery",
    database: "PostgreSQL + Redis",
    cloud: "AWS Lambda + S3",
    testing: "pytest + Locust",
    why: "Async-first pipeline with managed infra.",
  },
  "Data Pipeline-Scale-up (10-100)": {
    frontend: "React + D3.js",
    backend: "Apache Spark + Python",
    database: "PostgreSQL + S3 Data Lake",
    cloud: "AWS EMR + Glue + Athena",
    testing: "pytest + Great Expectations",
    why: "Distributed processing for TB-scale data.",
  },
  "Data Pipeline-Enterprise (100+)": {
    frontend: "Grafana + React",
    backend: "Apache Spark + Kafka + Flink",
    database: "Snowflake + Delta Lake",
    cloud: "AWS + Databricks",
    testing: "dbt tests + Monte Carlo",
    why: "Real-time streaming meets batch processing at petabyte scale.",
  },
  "REST API-Prototype / Solo": {
    frontend: "N/A (API only)",
    backend: "Node.js + Express",
    database: "MongoDB Atlas (free tier)",
    cloud: "Railway / Render",
    testing: "Jest + Supertest",
    why: "Fastest API to production, flexible schema.",
  },
  "REST API-Startup (< 10 engineers)": {
    frontend: "N/A",
    backend: "Node.js + Fastify + TypeScript",
    database: "PostgreSQL + Prisma ORM",
    cloud: "AWS API Gateway + Lambda",
    testing: "Jest + Pact (contract)",
    why: "Type-safe, serverless-ready, low ops overhead.",
  },
  "REST API-Scale-up (10-100)": {
    frontend: "N/A",
    backend: "Java Spring Boot",
    database: "PostgreSQL + Redis",
    cloud: "AWS ECS + ALB",
    testing: "JUnit + K6 load tests",
    why: "Proven enterprise API stack with horizontal scaling.",
  },
  "REST API-Enterprise (100+)": {
    frontend: "N/A",
    backend: "Java Spring Boot + gRPC",
    database: "PostgreSQL + Redis + Cassandra",
    cloud: "Kubernetes + Istio service mesh",
    testing: "JUnit + Gatling + PactFlow",
    why: "Service mesh handles auth, observability, and circuit breaking.",
  },
  "Real-time System-Prototype / Solo": {
    frontend: "React + Socket.io-client",
    backend: "Node.js + Socket.io",
    database: "Redis Pub/Sub",
    cloud: "Fly.io",
    testing: "Jest + Artillery",
    why: "WebSockets + Redis is the simplest real-time stack.",
  },
  "Real-time System-Startup (< 10 engineers)": {
    frontend: "React + WebSockets",
    backend: "Node.js + uWebSockets.js",
    database: "Redis + PostgreSQL",
    cloud: "AWS EC2 + ElastiCache",
    testing: "Jest + k6 WebSocket tests",
    why: "uWebSockets handles 1M+ concurrent connections on a single node.",
  },
  "Real-time System-Scale-up (10-100)": {
    frontend: "React + WebSockets",
    backend: "Go + gorilla/websocket",
    database: "Redis Cluster + Kafka",
    cloud: "AWS EKS + ElastiCache",
    testing: "Go tests + k6",
    why:
      "Go's goroutines handle millions of concurrent connections efficiently.",
  },
  "Real-time System-Enterprise (100+)": {
    frontend: "React + WebSockets",
    backend: "Go + Kafka + gRPC",
    database: "Kafka + Cassandra + Redis",
    cloud: "Kubernetes + AWS MSK",
    testing: "Go tests + Gatling + Chaos Monkey",
    why:
      "Kafka provides durable, replay-able real-time event streams at any scale.",
  },
  "Mobile App-Prototype / Solo": {
    frontend: "React Native + Expo",
    backend: "Firebase / Supabase",
    database: "Firestore / Supabase DB",
    cloud: "Firebase Hosting",
    testing: "Jest + Detox",
    why: "One codebase, instant OTA updates, no server config.",
  },
  "Mobile App-Startup (< 10 engineers)": {
    frontend: "React Native + TypeScript",
    backend: "Node.js + Fastify",
    database: "PostgreSQL + Redis",
    cloud: "AWS Amplify + ECS",
    testing: "Jest + Detox + Appium",
    why: "Shared TypeScript codebase between mobile and API.",
  },
  "Mobile App-Scale-up (10-100)": {
    frontend: "React Native + TypeScript",
    backend: "Java Spring Boot",
    database: "PostgreSQL + Redis + S3",
    cloud: "AWS EKS + CloudFront",
    testing: "JUnit + Detox + Firebase Test Lab",
    why: "Native performance with enterprise-grade backend.",
  },
  "Mobile App-Enterprise (100+)": {
    frontend: "Flutter (if cross-platform) or Native iOS/Android",
    backend: "Java Spring Boot (microservices)",
    database: "PostgreSQL + Redis + Cassandra",
    cloud: "AWS multi-region + Kubernetes",
    testing: "JUnit + XCTest + Firebase Test Lab",
    why:
      "Native performance for complex animations, Flutter for cross-platform consistency.",
  },
  "CLI Tool-Prototype / Solo": {
    frontend: "N/A",
    backend: "Python + Click / Node.js + Commander",
    database: "SQLite / JSON flat file",
    cloud: "N/A (local tool)",
    testing: "pytest / Jest",
    why:
      "Both ecosystems have great CLI frameworks and wide distribution via pip/npm.",
  },
  "CLI Tool-Startup (< 10 engineers)": {
    frontend: "N/A",
    backend: "Go + Cobra CLI",
    database: "SQLite / Bolt DB",
    cloud: "GitHub Releases",
    testing: "Go tests",
    why: "Go compiles to a single binary — zero dependency install for users.",
  },
};

// Fallback for unmapped combos
export const defaultTechStack = {
  frontend: "React + TypeScript",
  backend: "Node.js + Fastify",
  database: "PostgreSQL + Redis",
  cloud: "AWS",
  testing: "Jest + Playwright",
  why:
    "A balanced, battle-tested full-stack choice suitable for most projects.",
};
