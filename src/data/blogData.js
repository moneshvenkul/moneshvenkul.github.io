// Blog posts and weekly digest data for Monesh Venkul Vommi's portfolio

export const blogPosts = [
  {
    id: 1,
    title: "How I Cut API Latency by 58% Using Neo4j Graph Traversal",
    slug: "neo4j-graph-traversal-latency-optimization",
    category: "Backend",
    tags: [
      "Neo4j",
      "Graph Database",
      "Cypher",
      "Spring Boot",
      "Performance",
      "Java",
    ],
    date: "2026-03-15",
    readTime: "9 min read",
    excerpt:
      "At Fidelity, our wealth analytics API was crawling under the weight of deeply nested relational JOINs — some endpoints hitting 1.4 seconds on warm cache. By migrating the relationship traversal layer to Neo4j, I reduced median latency to 590ms and p99 to under 900ms without changing a single line of downstream business logic.",
    featured: true,
    content: `## The Problem: Relational JOINs Don't Scale for Relationship-Heavy Data

When I joined the wealth analytics team at Fidelity, one of the first performance tickets in the backlog was titled "Advisor Portfolio API — p99 > 2s." The endpoint returned a full picture of an advisor's book of business: clients, their accounts, holdings, transactions, and the relationships between them. On paper it sounded like a simple read — in practice, it was a 7-table JOIN nightmare.

The query looked something like this:

\`\`\`sql
SELECT a.*, c.*, acc.*, h.*, t.*
FROM advisors a
JOIN advisor_clients ac ON ac.advisor_id = a.id
JOIN clients c ON c.id = ac.client_id
JOIN accounts acc ON acc.client_id = c.id
JOIN holdings h ON h.account_id = acc.id
JOIN transactions t ON t.holding_id = h.id
WHERE a.id = :advisorId
  AND t.date >= :startDate
ORDER BY t.date DESC;
\`\`\`

For an advisor with 150 clients, each holding 10–40 accounts, this produced a Cartesian explosion. EXPLAIN ANALYZE showed nested loop joins consuming 80% of query time. We had indexes, we had connection pooling — we had done everything "right." The data model itself was the problem.

## Why Graph Databases Fit This Domain

Financial advisor relationships are inherently a graph: advisors manage clients, clients own accounts, accounts hold positions, positions derive from securities. The moment you need to traverse those edges — "give me all holdings in accounts owned by clients advised by this advisor in this region" — a relational database is fighting its own JOIN optimizer.

Neo4j stores nodes and relationships as first-class citizens on disk. A relationship traversal is a pointer follow, not an index lookup. For our read pattern, this was a 10–20x theoretical improvement before we even tuned anything.

## Schema Migration Strategy

I modeled the graph with the following node types and relationship types:

\`\`\`cypher
// Node labels
(:Advisor {id, name, region, tier})
(:Client {id, name, riskProfile, aum})
(:Account {id, type, custodian, status})
(:Holding {id, ticker, shares, avgCost})
(:Security {id, ticker, sector, assetClass})

// Relationship types
(:Advisor)-[:MANAGES]->(:Client)
(:Client)-[:OWNS]->(:Account)
(:Account)-[:CONTAINS]->(:Holding)
(:Holding)-[:IS_SECURITY]->(:Security)
\`\`\`

The key insight was not to flatten everything into one mega-node. Keeping Security separate from Holding allowed us to traverse security-level analytics (sector exposure, correlation) without duplicating data per holding.

## The Cypher Query vs. the SQL Query

The equivalent read in Cypher:

\`\`\`cypher
MATCH (a:Advisor {id: $advisorId})-[:MANAGES]->(c:Client)-[:OWNS]->(acc:Account)-[:CONTAINS]->(h:Holding)-[:IS_SECURITY]->(s:Security)
WHERE h.lastUpdated >= $startDate
RETURN a, c, acc, h, s
ORDER BY h.lastUpdated DESC
\`\`\`

That's it. No JOIN clauses. No subqueries. Neo4j's query planner walks the graph edges directly.

## Index Strategy in Neo4j

Naively running the Cypher above on 2M+ nodes was still slow — Neo4j needs hints just like Postgres. I created composite indexes on the lookup properties:

\`\`\`cypher
CREATE INDEX advisor_id_idx IF NOT EXISTS FOR (a:Advisor) ON (a.id);
CREATE INDEX holding_updated_idx IF NOT EXISTS FOR (h:Holding) ON (h.lastUpdated);
CREATE INDEX account_status_idx IF NOT EXISTS FOR (acc:Account) ON (acc.status);
\`\`\`

I also used relationship-level cardinality hints in the query plan. PROFILE showed the planner was previously doing a full node scan on Holding before filtering — adding the date-range index dropped that scan from 1.8M rows to ~12K.

## Spring Boot Integration

On the Java side, I used Spring Data Neo4j 6.x with the \`@Node\` and \`@Relationship\` annotations. The repository pattern stayed identical to our JPA setup, which meant the service layer needed zero changes.

\`\`\`java
@Node("Holding")
public class HoldingEntity {
    @Id
    private String id;
    private String ticker;
    private Double shares;
    private Double avgCost;
    private LocalDate lastUpdated;

    @Relationship(type = "IS_SECURITY", direction = OUTGOING)
    private SecurityEntity security;
}

@Repository
public interface HoldingRepository extends Neo4jRepository<HoldingEntity, String> {

    @Query("MATCH (a:Advisor {id: $advisorId})-[:MANAGES]->(c:Client)" +
           "-[:OWNS]->(acc:Account)-[:CONTAINS]->(h:Holding)-[:IS_SECURITY]->(s:Security) " +
           "WHERE h.lastUpdated >= $startDate RETURN h, s")
    List<HoldingEntity> findByAdvisorAndDate(String advisorId, LocalDate startDate);
}
\`\`\`

## Benchmark Results

I ran load tests using Gatling with 50 concurrent virtual users simulating the production read pattern (150-client advisor book, 90-day window).

| Metric        | PostgreSQL (before) | Neo4j (after) | Delta     |
|---------------|---------------------|---------------|-----------|
| Median (p50)  | 1,410 ms            | 590 ms        | -58.2%    |
| p95           | 1,890 ms            | 720 ms        | -61.9%    |
| p99           | 2,340 ms            | 880 ms        | -62.4%    |
| Throughput    | 34 req/s            | 81 req/s      | +138%     |

CPU on the DB host dropped from 72% average to 31% under the same load profile. The Graph DB actually uses more heap (we bumped from 8GB to 16GB for the Neo4j instance) but the latency trade-off was unambiguous.

## Lessons Learned

**1. Not everything belongs in Neo4j.** We kept transactional data (trade executions, account statements) in PostgreSQL. Neo4j solved a specific problem: multi-hop relationship traversal. Using the right tool for the right job mattered more than any single optimization.

**2. The N+1 problem is worse than you think at depth-3+.** In our old code, we had three levels of lazy loading in Hibernate — advisor → clients → accounts — each triggering a new query. Spring Data Neo4j fetches the entire subgraph in one round trip.

**3. PROFILE is your best friend.** Neo4j's PROFILE command gives you an operator tree similar to EXPLAIN ANALYZE in Postgres. I spent two days purely tuning the query plan before touching any application code.

This optimization became one of the case studies we presented to the platform engineering org at Fidelity, and it directly influenced the decision to adopt Neo4j as a tier-1 data store for relationship-intensive analytics.`,
  },

  {
    id: 2,
    title: "Building Fidelity's First Production RAG Pipeline",
    slug: "fidelity-production-rag-pipeline",
    category: "AI/ML",
    tags: [
      "RAG",
      "LangChain",
      "Pinecone",
      "OpenAI",
      "Python",
      "Enterprise AI",
      "LLM",
    ],
    date: "2026-02-28",
    readTime: "12 min read",
    excerpt:
      "When my team at Fidelity got the green light to productionize a Retrieval-Augmented Generation pipeline for internal compliance Q&A, I expected the hard part to be the LLM. It turned out to be chunking strategy, retrieval evaluation, and convincing the security team that we weren't sending client data to OpenAI.",
    featured: false,
    content: `## Background: Why RAG for Compliance?

Fidelity's compliance team fields thousands of questions a year from advisors: what's the wash-sale lookback period, can an advisor gift securities to a client, which states require specific disclosure language. The answers live in hundreds of PDFs, policy wikis, and regulatory filings — none of it structured, all of it constantly updated.

The first instinct was a traditional keyword search. We tried Elasticsearch. The problem: compliance questions are semantic, not lexical. "Can I front-run a client trade?" doesn't contain the words "front-running" or "personal trading policy" — but a human compliance officer knows exactly which document to pull.

RAG was the right architecture.

## System Architecture Overview

\`\`\`
[Compliance Docs] → [Ingestion Pipeline] → [Pinecone Vector DB]
                                                     ↓
[User Question] → [Query Embedding] → [Retrieval (top-k)] → [Context Window] → [OpenAI GPT-4] → [Answer + Citations]
\`\`\`

The stack:
- **LangChain** for orchestration and chain composition
- **Pinecone** (serverless tier) for vector storage and ANN retrieval
- **OpenAI text-embedding-3-large** for embeddings (3072 dimensions)
- **GPT-4o** for generation
- **FastAPI** serving the retrieval + generation endpoint
- **Spring Boot** API gateway (existing Fidelity infra) fronting the Python service

## The Chunking Problem Nobody Talks About

The single biggest quality lever in a RAG pipeline is not your LLM — it's chunking. I went through three iterations before landing on something production-worthy.

### Attempt 1: Fixed-Size Chunking (Failed)

\`\`\`python
from langchain.text_splitter import CharacterTextSplitter

splitter = CharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_documents(docs)
\`\`\`

This is what every tutorial shows. It worked on toy datasets. In production, it split sentences mid-concept, broke numbered lists across chunks, and — critically — severed the header context from the body. A chunk reading "...the lookback period is 30 days" with no surrounding context was useless for attribution.

### Attempt 2: Recursive Character Splitter (Better)

\`\`\`python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,
    chunk_overlap=150,
    separators=["\\n\\n", "\\n", ". ", " "],
)
\`\`\`

Better — it respected paragraph boundaries. Still failed on tabular content in PDFs. Regulation documents love tables. A table chunk with no column headers was noise.

### Attempt 3: Semantic + Hierarchical Chunking (Production)

I moved to a custom chunker that:
1. Parsed PDFs with **pdfplumber** (not PyPDF2 — the table extraction is far better)
2. Identified heading levels via font-size heuristics
3. Created parent chunks (full section, ~1500 tokens) and child chunks (~400 tokens)
4. Stored parent-child relationships in Pinecone metadata

\`\`\`python
def semantic_chunk(doc_text: str, headings: list[str]) -> list[dict]:
    chunks = []
    current_section = ""
    current_heading = "General"

    for line in doc_text.split("\\n"):
        if line.strip() in headings:
            if current_section:
                parent_id = str(uuid4())
                # Store full section as parent
                chunks.append({
                    "id": parent_id,
                    "text": current_section,
                    "heading": current_heading,
                    "chunk_type": "parent"
                })
                # Split section into child chunks
                child_texts = split_into_sentences(current_section, max_tokens=400)
                for i, child in enumerate(child_texts):
                    chunks.append({
                        "id": str(uuid4()),
                        "text": child,
                        "heading": current_heading,
                        "parent_id": parent_id,
                        "chunk_type": "child"
                    })
            current_heading = line.strip()
            current_section = ""
        else:
            current_section += line + "\\n"

    return chunks
\`\`\`

Retrieval quality jumped significantly. We retrieved child chunks (precise matches) but returned the parent chunk to the LLM (full context). This is sometimes called "small-to-big" retrieval.

## Retrieval Evaluation: You Need Metrics, Not Vibes

The worst thing about early RAG demos is that they "feel" accurate. You ask a few questions, the answers look reasonable, you ship it. Then a compliance officer asks an edge-case question and the system confidently returns the wrong answer from an outdated document.

I built an evaluation harness using **RAGAS**:

\`\`\`python
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_recall

results = evaluate(
    dataset=eval_dataset,  # 150 Q&A pairs from compliance SMEs
    metrics=[faithfulness, answer_relevancy, context_recall]
)

print(results)
# faithfulness: 0.91
# answer_relevancy: 0.87
# context_recall: 0.84
\`\`\`

Our internal target was 0.85 across all three. We hit it after the semantic chunking change. Before that, context_recall was 0.71 — meaning 29% of the time, the relevant document wasn't in the top-k retrieved results.

Key tuning levers:
- **top-k = 6** (not 3, not 10 — 6 gave best precision/recall balance for our corpus size)
- **MMR re-ranking** (Maximal Marginal Relevance) to reduce redundant chunks
- **Metadata filters** for document recency — compliance docs have effective dates; we hard-filtered out anything superseded

## The Security Conversation

Getting approval to use OpenAI's API inside Fidelity's network was a three-month conversation with the security architecture team. Key concerns:

1. **Data residency**: Could client PII reach OpenAI? Answer: No — compliance Q&A never involves client data. We documented this explicitly.
2. **Model training on our inputs**: We used Azure OpenAI Service, which by contract does not use API inputs for model training.
3. **Prompt injection**: Adversarial inputs in the question field could manipulate context. We added a system prompt guardrail and sanitized user inputs.

I wrote a 12-page security design document for this integration. It's the unglamorous part of enterprise AI work that tutorials skip entirely.

## Enterprise Adoption Curve

We soft-launched to 50 compliance staff in Q3 2025. Adoption was slow initially — people didn't trust an AI for compliance decisions, and rightfully so. Two changes accelerated adoption:

1. **Mandatory citations**: Every answer now shows the source document, section, and page number. Users can verify the answer instantly.
2. **Confidence threshold**: If retrieval similarity scores are all below 0.75, the system says "I don't have enough context to answer this confidently" rather than hallucinating.

By Q1 2026, 340 compliance staff were using it daily, with average question resolution time dropping from 4.2 hours (email to SME) to 8 minutes.

## What I'd Do Differently

- **Start with evaluation data.** We built the eval harness after the pipeline, which meant we were flying blind for the first two months. Build your test set on day one.
- **Hybrid search from the start.** Pure vector search misses exact-match queries (regulation numbers, specific dollar thresholds). Sparse + dense retrieval (BM25 + embeddings) outperforms either alone on compliance text.
- **Monitor embedding drift.** When we upgraded from text-embedding-ada-002 to text-embedding-3-large, retrieval quality improved — but we had to re-embed the entire corpus. Version-pin your embedding model in production.`,
  },

  {
    id: 3,
    title: "How I Passed the AWS Solutions Architect Associate Exam in 3 Weeks",
    slug: "aws-solutions-architect-associate-3-weeks",
    category: "Cloud",
    tags: [
      "AWS",
      "Certification",
      "Solutions Architect",
      "Cloud",
      "Study Guide",
    ],
    date: "2026-01-20",
    readTime: "7 min read",
    excerpt:
      "I'd been using AWS professionally for four years before sitting the SAA-C03 exam — and I still had to study hard for three weeks. Here's the precise plan I followed, which services actually show up on the exam, and why most people fail on the scenario questions rather than the concept questions.",
    featured: false,
    content: `## Why I Finally Sat for the Exam

I'd been deploying to AWS since my HCL days — EC2, RDS, Lambda, S3, the usual suspects. But I'd never formalized that knowledge with a certification. After joining Fidelity's cloud platform team, where the architects carry AWS credentials, I decided to close that gap. My manager gave me three weeks of dedicated study time and I hit it hard.

## The Study Plan

### Week 1: Core Services Depth

I used **Adrian Cantrill's SAA-C03 course** on learn.cantrill.io. I know Stephane Maarek and Neal Davis are the popular picks — but Cantrill's course has the best visual diagrams and goes deepest on the "why" behind architectural decisions, which matters for scenario questions.

Daily schedule:
- 2 hours of video (1x speed, pausing to take notes)
- 30 minutes building the thing I just watched in a personal AWS account
- 30 minutes of flashcard review (I used Anki)

Services covered in Week 1:
- **Compute**: EC2 (instance types, placement groups, spot vs. on-demand), Auto Scaling Groups, ECS, EKS overview
- **Storage**: S3 (all storage classes, lifecycle policies, replication), EBS (volume types, snapshots, encryption), EFS
- **Networking**: VPC fundamentals (subnets, route tables, IGW, NAT), Security Groups vs. NACLs

### Week 2: Advanced Services + Hybrid Architectures

Week 2 is where the exam gets interesting — and where people run out of steam. Push through.

- **Databases**: RDS (Multi-AZ vs. Read Replicas — this is a classic exam trap), Aurora (global database, serverless v2), DynamoDB (partition keys, GSI, DAX), ElastiCache
- **Messaging**: SQS (standard vs. FIFO, visibility timeout, DLQ), SNS, EventBridge
- **Identity**: IAM deep dive (policy evaluation logic, SCPs, permission boundaries), Cognito, SSO
- **High Availability / DR**: Route 53 routing policies, Global Accelerator, CloudFront, multi-region patterns

The exam loves comparing **RDS Multi-AZ** (HA, synchronous replication, automatic failover — but NOT a read replica) vs. **Read Replicas** (read scaling, async, can be in another region — but NOT automatic failover). Get this cold.

### Week 3: Practice Exams Only

I stopped watching new content and did nothing but practice exams. Resources:

1. **Tutorials Dojo** by Jon Bonso — the gold standard. The explanations for wrong answers are as valuable as the questions themselves.
2. **AWS Official Practice Question Set** (20 questions, free) — good calibration for the real exam's difficulty level.
3. **Exam Topics** community questions — lower quality but high volume, good for building test stamina.

My scores over the week:
- Day 1: 67% (pass threshold is ~72%)
- Day 3: 74%
- Day 5: 81%
- Day 6: 79%
- Day 7 (exam day): passed — AWS doesn't report exact scores publicly, but my feedback report showed "Proficient" across all domains.

## Scenario Questions: The Real Exam

The SAA-C03 is not a memorization test. It's a "which service fits this scenario" test. Here are the patterns I saw most often:

**Pattern: "Most cost-effective" + variable workload** → Usually Spot Instances + Auto Scaling, or Lambda + DynamoDB instead of always-on EC2 + RDS.

**Pattern: "Minimize operational overhead"** → Managed services (Aurora Serverless, ECS Fargate, RDS) over self-managed EC2.

**Pattern: "Millions of messages, decoupled"** → SQS. If fanout to multiple consumers → SNS + SQS. If event-driven automation → EventBridge.

**Pattern: "Migrate on-prem database with minimal downtime"** → AWS Database Migration Service (DMS) + Schema Conversion Tool (SCT).

**Pattern: "Static website, global users, low latency"** → S3 + CloudFront. Add Route 53 geolocation routing if regional content is needed.

**Pattern: "Shared file system across EC2 instances"** → EFS (Linux) or FSx for Windows File Server (Windows). Not EBS — EBS is single-AZ, single-instance by default.

## Key Resources (Ranked by ROI)

| Resource | Type | Cost | Value |
|----------|------|------|-------|
| Adrian Cantrill SAA-C03 | Video Course | $40 | Essential |
| Tutorials Dojo Practice Exams | Question Bank | $15 | Essential |
| AWS Free Tier Account | Hands-on | Free | High |
| AWS SAA Exam Guide | PDF | Free | Medium |
| AWS FAQs (S3, EC2, RDS) | Reference | Free | Medium |

Total spend: ~$55 + exam voucher ($150). Three weeks of focused work. Totally worth it.

## What the Cert Actually Gets You

Practically: it's a conversation opener. I now speak the same vocabulary as AWS solution architects during vendor calls, and it gave me credibility when proposing infrastructure changes on the Fidelity platform team. It's not a substitute for hands-on experience — but paired with experience, it signals seriousness.`,
  },

  {
    id: 4,
    title:
      "Vue.js vs React in Enterprise: Lessons from a 1M+ User App at Ascendion",
    slug: "vuejs-vs-react-enterprise-lessons",
    category: "Frontend",
    tags: [
      "Vue.js",
      "React",
      "Frontend",
      "Enterprise",
      "JavaScript",
      "Composition API",
      "Hooks",
    ],
    date: "2025-12-10",
    readTime: "10 min read",
    excerpt:
      "At Ascendion, our team migrated a 1M+ user healthcare portal from Vue 2 to Vue 3, then fielded a serious proposal to rewrite in React. Here's what we learned about performance, developer experience, testing, and team ramp-up — and why the framework choice matters far less than most Twitter arguments suggest.",
    featured: false,
    content: `## The Context

I spent two years at Ascendion building and maintaining a healthcare benefits portal serving over 1 million users. The app was originally built in Vue 2 in 2019, migrated to Vue 3 Composition API in 2023, and by 2024 we were having serious internal debates about whether to rewrite in React.

This isn't a "Vue is better" post or a "React is better" post. It's a documentation of the real trade-offs we encountered on a real production app, with a real team of 12 frontend engineers ranging from 1 to 8 years of experience.

## Performance: Near-Identical in Practice

Every benchmark post you read will show one framework "winning" by 3-8% on some synthetic task. In our application — complex forms, data tables, real-time eligibility checks — we saw no meaningful performance difference after Vue 3.

What mattered more than framework choice:
- **Bundle size**: Vue 3's tree-shaking made our initial bundle 23% smaller than our Vue 2 baseline. React with a similar feature set (React Query, Zustand, React Hook Form) came in comparable.
- **Rendering**: Both use virtual DOM reconciliation. Our performance bottlenecks were always in data fetching, not rendering.
- **Web Workers**: We offloaded eligibility calculation to a Web Worker. Framework-agnostic.

If you're choosing a framework based on benchmark performance for a CRUD application, you're solving the wrong problem.

## Developer Experience: Where They Differ

### Composition API vs. Hooks

This is where the real debate lives. Coming from Vue 2 Options API, our team found Vue 3 Composition API more intuitive than React Hooks. Specifically:

**Vue 3 Composition API (our preference):**
\`\`\`vue
<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const userId = ref(null)
const userData = ref(null)
const isLoading = ref(false)

const displayName = computed(() =>
  userData.value ? \`\${userData.value.first} \${userData.value.last}\` : 'Loading...'
)

watch(userId, async (newId) => {
  if (!newId) return
  isLoading.value = true
  userData.value = await fetchUser(newId)
  isLoading.value = false
})

onMounted(() => { userId.value = getCurrentUserId() })
</script>
\`\`\`

**Equivalent React Hooks pattern:**
\`\`\`jsx
import { useState, useEffect, useMemo } from 'react'

function UserProfile() {
  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const displayName = useMemo(() =>
    userData ? \`\${userData.first} \${userData.last}\` : 'Loading...',
    [userData]
  )

  useEffect(() => {
    setUserId(getCurrentUserId())
  }, [])

  useEffect(() => {
    if (!userId) return
    setIsLoading(true)
    fetchUser(userId).then(data => {
      setUserData(data)
      setIsLoading(false)
    })
  }, [userId])

  // return JSX...
}
\`\`\`

For our team, the Vue version read more naturally. The explicit reactivity (ref, computed, watch) maps to how engineers think about state machines. React's dependency arrays — and the bugs caused by missing/stale closures — were a recurring source of subtle bugs when we prototyped the React rewrite.

That said: React engineers find Hooks perfectly natural. This is a familiarity effect, not a quality difference.

### Template Syntax vs. JSX

Vue templates have stricter separation of concerns — HTML stays HTML-like. This made code reviews easier, especially for engineers who came from backend or non-JS frontend backgrounds. JSX is more powerful and more flexible, which is both its strength and a footgun for large teams.

In our app, we had a component that rendered a dynamic benefits table. The Vue template was immediately readable by a QA engineer who knew HTML/CSS but minimal JavaScript. The JSX equivalent required explaining that JSX is "just JavaScript" — a non-trivial conceptual leap under deadline pressure.

## Testing

This is where I'd give React a slight edge in ecosystem maturity.

**React Testing Library** has become the de facto standard. Documentation is excellent, the "test behavior, not implementation" philosophy aligns with modern testing practice, and the community is enormous.

**Vue Testing Library** (vue-testing-library, the Vue equivalent) is solid but had smaller Stack Overflow coverage and fewer examples for the specific patterns we used (Pinia store testing, Suspense integration).

We used **Vitest** as the test runner for both (Vite-native, very fast), and **Cypress** for E2E. Both frameworks tested identically at the E2E level — Cypress doesn't care whether your button is React or Vue.

Our test suite stats after migration to Vue 3:
- Unit/component tests: 847 tests, ~28s run time
- Integration tests: 126 tests, ~65s run time
- E2E: 94 tests, ~8 minutes in CI

## Team Ramp-Up Time

We onboarded 4 engineers who had React backgrounds but no Vue experience during the Vue 3 migration. Average time to productive contribution: **2.5 weeks**.

We also prototyped a small feature in React to evaluate a potential rewrite. Our Vue-native engineers who learned React for the prototype averaged **3 weeks** to feel comfortable. The Hooks mental model (especially stale closures and dependency arrays) was the primary obstacle.

Neither number is alarming. A competent engineer learns a new framework in a sprint or two. Team familiarity compounds over years — switching frameworks carries a ramp-up tax that's easy to underestimate in rewrite proposals.

## Why We Stayed on Vue 3

We decided against the React rewrite after a six-week evaluation. Driving factors:

1. **Zero business value in the rewrite.** Users don't know or care what framework renders their benefits portal.
2. **$400K+ rewrite cost** (estimated: 3 engineers × 6 months × fully loaded cost) for no user-facing improvement.
3. **Existing Vue 3 codebase was healthy.** Post-migration, the code was idiomatic, well-tested, and had good DX.
4. **Ecosystem sufficient for our needs.** Pinia, Vue Router, VeeValidate, Vitest — every tool we needed existed and was mature.

The engineers who pushed for React made a reasonable argument — React's ecosystem is larger, and React skills are more transferable. But "more transferable skills" is a benefit for engineers, not the business. We're paid to deliver features, not to optimize our resumes.

## The Actual Takeaway

Both frameworks are excellent. Both will be here in five years. The framework that your team already knows deeply, that has good tooling for your use case, and that your hiring pipeline can support — that's the right framework.

The interesting engineering decisions happen above the framework layer: state management architecture, component API design, testing strategy, bundle optimization, accessibility. Spend your energy there.`,
  },
];

export const digestIssues = [
  {
    id: 1,
    week: "March 24, 2026",
    title:
      "Graph AI, LLM Cost Trends, and the Frontend Frameworks You're Actually Deploying",
    links: [
      {
        title:
          "GraphRAG: Using Knowledge Graphs to Improve RAG Accuracy by 40%",
        url: "#",
        source: "Microsoft Research Blog",
        tag: "AI",
      },
      {
        title:
          "The End of the Monolith? How Netflix Thinks About Service Decomposition in 2026",
        url: "#",
        source: "Netflix Tech Blog",
        tag: "Backend",
      },
      {
        title:
          "React Server Components Are Not the React You Know — A Practical Guide",
        url: "#",
        source: "Vercel Engineering Blog",
        tag: "Frontend",
      },
      {
        title:
          "AWS Bedrock vs. Azure OpenAI: An Enterprise Cost Comparison After 12 Months",
        url: "#",
        source: "The Pragmatic Engineer",
        tag: "Cloud",
      },
      {
        title:
          "How to Get a Staff Engineer Promotion: The Visibility Problem Nobody Talks About",
        url: "#",
        source: "Lenny's Newsletter",
        tag: "Career",
      },
    ],
  },
  {
    id: 2,
    week: "March 17, 2026",
    title:
      "Vector Database Showdown, Spring Boot 4 Preview, and the Distributed Systems Reading List",
    links: [
      {
        title:
          "Pinecone vs. Weaviate vs. Qdrant: A Production Vector DB Benchmark in 2026",
        url: "#",
        source: "Towards Data Science",
        tag: "AI",
      },
      {
        title:
          "Spring Boot 4: Virtual Threads, AOT Compilation, and What It Means for Your APIs",
        url: "#",
        source: "Spring.io Blog",
        tag: "Backend",
      },
      {
        title:
          "The 10 Most Common Tailwind CSS Mistakes (And How to Avoid Them)",
        url: "#",
        source: "CSS-Tricks",
        tag: "Frontend",
      },
      {
        title: "Why We Moved from Kubernetes to Nomad — and Then Back Again",
        url: "#",
        source: "Martin Fowler's Blog",
        tag: "Cloud",
      },
      {
        title:
          "The Distributed Systems Reading List Every Senior Engineer Should Complete",
        url: "#",
        source: "High Scalability",
        tag: "Tools",
      },
    ],
  },
  {
    id: 3,
    week: "March 10, 2026",
    title:
      "Agentic AI in Production, Database Indexing Deep Dive, and the System Design Interview Meta",
    links: [
      {
        title:
          "Running LLM Agents in Production: Lessons from 6 Months of Failures",
        url: "#",
        source: "OpenAI Cookbook / Community",
        tag: "AI",
      },
      {
        title:
          "Everything You Thought You Knew About Database Indexes Is Probably Wrong",
        url: "#",
        source: "Use The Index, Luke",
        tag: "Backend",
      },
      {
        title:
          "Micro-Frontends at Scale: How Spotify Manages 300+ Independent Frontend Teams",
        url: "#",
        source: "Spotify Engineering Blog",
        tag: "Frontend",
      },
      {
        title:
          "Multi-Region Active-Active Architecture: Trade-offs Nobody Shows You in the Diagram",
        url: "#",
        source: "AWS Architecture Blog",
        tag: "Cloud",
      },
      {
        title: "How to Approach the System Design Interview at FAANG in 2026",
        url: "#",
        source: "interviewing.io Blog",
        tag: "Career",
      },
    ],
  },
];
