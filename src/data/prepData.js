// ============================================================
//  Interview Prep Data — FAANG focused
//  Monesh Venkul Vommi
// ============================================================

export const dsaPatterns = [
  {
    id: 1,
    name: "Sliding Window",
    category: "Array",
    difficulty: "Medium",
    description:
      "Maintain a window of elements that satisfies a condition, expanding right and contracting left to avoid re-processing elements.",
    keyInsight:
      "When you see 'subarray/substring of length k' or 'minimum/maximum window satisfying a condition', think sliding window. The window shrinks from the left when an invariant is violated.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(k)",
    examples: [
      "Longest Substring Without Repeating Characters",
      "Minimum Window Substring",
      "Maximum Sum Subarray of Size K",
    ],
    template: `def sliding_window(arr, k):
    left = 0
    window_sum = 0
    max_sum = float('-inf')

    for right in range(len(arr)):
        # Expand window
        window_sum += arr[right]

        # Shrink when window > k
        if right - left + 1 > k:
            window_sum -= arr[left]
            left += 1

        # Update result
        if right - left + 1 == k:
            max_sum = max(max_sum, window_sum)

    return max_sum`,
  },
  {
    id: 2,
    name: "Two Pointers",
    category: "Array",
    difficulty: "Easy",
    description:
      "Use two indices moving toward each other or in the same direction to solve problems in O(n) that would otherwise require O(n²).",
    keyInsight:
      "Sorted array + pair/triplet sum? Two pointers from both ends. Linked list cycle/middle? Slow-fast pointers. The key is identifying that two elements need to be compared/combined.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    examples: ["Two Sum II (sorted)", "3Sum", "Container With Most Water"],
    template: `def two_pointers(arr, target):
    left, right = 0, len(arr) - 1

    while left < right:
        current_sum = arr[left] + arr[right]

        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1   # Need larger sum
        else:
            right -= 1  # Need smaller sum

    return []`,
  },
  {
    id: 3,
    name: "Fast & Slow Pointers",
    category: "Array",
    difficulty: "Medium",
    description:
      "Two pointers moving at different speeds. The fast pointer moves 2x faster. Useful for cycle detection and finding the middle of a linked list.",
    keyInsight:
      "Floyd's cycle detection: if there's a cycle, fast (2x) and slow (1x) will meet. To find cycle start: after meeting, reset one pointer to head and move both at speed 1 — they meet at cycle start.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    examples: [
      "Linked List Cycle II",
      "Find the Duplicate Number",
      "Middle of Linked List",
    ],
    template: `def detect_cycle(head):
    slow = fast = head

    # Phase 1: detect cycle
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break
    else:
        return None  # No cycle

    # Phase 2: find cycle start
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next

    return slow  # Cycle start node`,
  },
  {
    id: 4,
    name: "Merge Intervals",
    category: "Array",
    difficulty: "Medium",
    description:
      "Sort intervals by start time, then greedily merge overlapping ones. Covers insert interval, meeting rooms, and calendar problems.",
    keyInsight:
      "Sort by start. Two intervals [a,b] and [c,d] overlap if c <= b. Merge by taking max end: [a, max(b,d)]. For meeting rooms: count max overlapping intervals using a min-heap of end times.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    examples: ["Merge Intervals", "Insert Interval", "Meeting Rooms II"],
    template: `def merge_intervals(intervals):
    if not intervals:
        return []

    # Sort by start time
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]

    for start, end in intervals[1:]:
        last_end = merged[-1][1]

        if start <= last_end:          # Overlap
            merged[-1][1] = max(last_end, end)
        else:                           # No overlap
            merged.append([start, end])

    return merged`,
  },
  {
    id: 5,
    name: "Binary Search",
    category: "Array",
    difficulty: "Easy",
    description:
      "Eliminate half the search space each iteration. Works on any monotonic function, not just sorted arrays.",
    keyInsight:
      "Template: find the leftmost position where condition is True. Ask: 'Is the answer at least X?' Binary search on the answer space, not just array index. Check boundaries: lo=0, hi=len-1 vs hi=len.",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    examples: [
      "Search in Rotated Sorted Array",
      "Find Minimum in Rotated Array",
      "Koko Eating Bananas",
    ],
    template: `def binary_search(nums, target):
    lo, hi = 0, len(nums) - 1

    while lo <= hi:
        mid = lo + (hi - lo) // 2   # Avoid overflow

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1

    return -1

# Template for "find leftmost position where cond(x) is True"
def binary_search_condition(arr):
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if condition(arr[mid]):
            hi = mid
        else:
            lo = mid + 1
    return lo`,
  },
  {
    id: 6,
    name: "BFS (Level Order)",
    category: "Graph",
    difficulty: "Medium",
    description:
      "Explore nodes level by level using a queue. Guarantees shortest path in unweighted graphs. Use visited set to avoid re-processing.",
    keyInsight:
      "BFS = queue + visited. For shortest path problems in unweighted graphs, BFS is always O(V+E) and correct. Track distance by either incrementing per level or storing (node, dist) tuples in queue.",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    examples: [
      "Word Ladder",
      "Shortest Path in Binary Matrix",
      "Rotting Oranges",
    ],
    template: `from collections import deque

def bfs(graph, start, end):
    queue = deque([(start, 0)])   # (node, distance)
    visited = {start}

    while queue:
        node, dist = queue.popleft()

        if node == end:
            return dist

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, dist + 1))

    return -1  # Not reachable`,
  },
  {
    id: 7,
    name: "DFS / Backtracking",
    category: "Graph",
    difficulty: "Medium",
    description:
      "Explore all paths recursively, backtracking when a path fails. The foundation for permutations, combinations, and constraint satisfaction.",
    keyInsight:
      "Backtracking = DFS + undo. The template is: make choice → recurse → undo choice. Prune early with constraints. For combinations, use start index to avoid duplicates. For permutations, use a 'used' set.",
    timeComplexity: "O(n!)",
    spaceComplexity: "O(n)",
    examples: ["Permutations", "Subsets", "Word Search"],
    template: `def backtrack(candidates, target):
    result = []

    def dfs(start, current, remaining):
        if remaining == 0:
            result.append(current[:])
            return
        if remaining < 0:
            return  # Prune

        for i in range(start, len(candidates)):
            # Skip duplicates (if sorted)
            if i > start and candidates[i] == candidates[i-1]:
                continue

            current.append(candidates[i])           # Choose
            dfs(i + 1, current, remaining - candidates[i])  # Explore
            current.pop()                            # Undo

    candidates.sort()
    dfs(0, [], target)
    return result`,
  },
  {
    id: 8,
    name: "Dynamic Programming",
    category: "DP",
    difficulty: "Hard",
    description:
      "Break problems into overlapping subproblems, cache results. Top-down (memoization) or bottom-up (tabulation). Identify state and transition.",
    keyInsight:
      "Ask: 'Does the optimal solution contain optimal solutions to subproblems?' State = minimum info needed to describe a subproblem. Transition = how to go from smaller to bigger state. Start with brute-force recursion, then add memo.",
    timeComplexity: "O(n²) typical",
    spaceComplexity: "O(n)",
    examples: [
      "Longest Increasing Subsequence",
      "Edit Distance",
      "Coin Change",
    ],
    template: `# Bottom-up DP — Coin Change example
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0

    for coin in coins:
        for x in range(coin, amount + 1):
            dp[x] = min(dp[x], dp[x - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1

# Top-down memoization template
from functools import lru_cache

def solve(n):
    @lru_cache(maxsize=None)
    def dp(state):
        # Base case
        if state == 0:
            return 0
        # Transition
        return min(dp(state - choice) + 1 for choice in choices if choice <= state)

    return dp(n)`,
  },
  {
    id: 9,
    name: "Tree Traversals",
    category: "Tree",
    difficulty: "Easy",
    description:
      "In-order, pre-order, post-order, and level-order traversals. Each reveals different tree properties. Recursive and iterative variants.",
    keyInsight:
      "In-order of BST = sorted array. Pre-order = serialize tree. Post-order = delete/evaluate subtrees first. For iterative in-order: push left spine, pop and visit, push right. Morris traversal achieves O(1) space.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(h)",
    examples: [
      "Binary Tree Inorder Traversal",
      "Serialize and Deserialize Binary Tree",
      "Construct Tree from Pre+Inorder",
    ],
    template: `# Iterative in-order (avoids stack overflow on deep trees)
def inorder(root):
    result, stack, curr = [], [], root

    while curr or stack:
        while curr:
            stack.append(curr)
            curr = curr.left

        curr = stack.pop()
        result.append(curr.val)    # Visit
        curr = curr.right

    return result

# Universal DFS template (pre/in/post by where you append)
def dfs(node, result):
    if not node:
        return
    result.append(node.val)   # Pre-order: visit before children
    dfs(node.left, result)
    # result.append(node.val) # In-order: visit between children
    dfs(node.right, result)
    # result.append(node.val) # Post-order: visit after children`,
  },
  {
    id: 10,
    name: "Trie (Prefix Tree)",
    category: "String",
    difficulty: "Medium",
    description:
      "Tree where each node represents a character. All descendants share a common prefix. O(L) insert/search where L = word length.",
    keyInsight:
      "Use Trie when: autocomplete, word search in a grid (replace DFS brute-force), longest common prefix, count words with prefix. Each node has children[26] and isEnd flag. Can compress with Patricia trie.",
    timeComplexity: "O(L) per op",
    spaceComplexity: "O(ALPHABET × N × L)",
    examples: [
      "Implement Trie",
      "Word Search II",
      "Design Add and Search Words",
    ],
    template: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def search(self, word: str) -> bool:
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.is_end

    def starts_with(self, prefix: str) -> bool:
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return True`,
  },
  {
    id: 11,
    name: "Heap / Priority Queue",
    category: "Array",
    difficulty: "Medium",
    description:
      "Use a min or max heap for problems involving 'top K', 'K closest', or streaming median. Python's heapq is a min-heap.",
    keyInsight:
      "Top K largest → min-heap of size K (pop when size > K). Top K smallest → max-heap of size K. Streaming median → two heaps: max-heap for lower half, min-heap for upper half. Balance after each insert.",
    timeComplexity: "O(n log k)",
    spaceComplexity: "O(k)",
    examples: [
      "Kth Largest Element",
      "Top K Frequent Elements",
      "Find Median from Data Stream",
    ],
    template: `import heapq

# Top K largest elements
def top_k_largest(nums, k):
    min_heap = []
    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)   # Remove smallest
    return list(min_heap)

# Streaming median with two heaps
class MedianFinder:
    def __init__(self):
        self.lo = []   # max-heap (negate values)
        self.hi = []   # min-heap

    def add_num(self, num):
        heapq.heappush(self.lo, -num)
        heapq.heappush(self.hi, -heapq.heappop(self.lo))
        if len(self.hi) > len(self.lo):
            heapq.heappush(self.lo, -heapq.heappop(self.hi))

    def find_median(self):
        if len(self.lo) > len(self.hi):
            return -self.lo[0]
        return (-self.lo[0] + self.hi[0]) / 2`,
  },
  {
    id: 12,
    name: "Union-Find (DSU)",
    category: "Graph",
    difficulty: "Hard",
    description:
      "Disjoint Set Union tracks connected components with near O(1) operations using path compression and union by rank.",
    keyInsight:
      "Path compression + union by rank gives O(α(n)) ≈ O(1) amortized. Use for: number of connected components, redundant connections, accounts merge, number of islands (dynamic). DSU is simpler than DFS for these problems.",
    timeComplexity: "O(α(n)) ≈ O(1)",
    spaceComplexity: "O(n)",
    examples: [
      "Number of Connected Components",
      "Redundant Connection",
      "Accounts Merge",
    ],
    template: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]

    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return False  # Already connected
        # Union by rank
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
        self.components -= 1
        return True`,
  },
];

export const systemDesignTemplates = [
  {
    id: 1,
    title: "URL Shortener (TinyURL)",
    difficulty: "Medium",
    components: [
      "Load Balancer",
      "App Servers",
      "Key Generation Service",
      "SQL Database",
      "Redis Cache",
      "CDN",
    ],
    approach: [
      "Generate a unique 6-7 char base62 key per URL using a Key Generation Service (KGS) that pre-generates keys into a 'used_keys' table.",
      "App servers request a batch of keys from KGS to avoid distributed lock contention on every write.",
      "Store mapping in SQL: (short_key PK, long_url, created_at, expires_at, user_id). Index on short_key.",
      "Cache hot URLs in Redis with TTL matching expiry. Cache miss → DB lookup → cache populate.",
      "For reads: client → CDN (cache miss) → Load Balancer → App Server → Redis → DB. Return 301 (permanent) or 302 (temp) redirect.",
      "For custom aliases: check availability in DB, store same as auto-generated keys.",
    ],
    considerations: [
      "Collision prevention: KGS marks keys as used before handing out to app servers. App servers hold in-memory batch of ~1000 keys.",
      "Analytics: write click events to Kafka, process with Flink/Spark, store aggregates in Cassandra.",
      "Data cleanup: TTL-based cleanup job runs nightly, deletes expired rows and returns keys to available pool.",
      "Rate limiting: Redis sliding window counter per IP/user to prevent abuse.",
      "DB scaling: read replicas for read-heavy traffic. Shard by first character of short key if needed.",
    ],
    keyNumbers: [
      { label: "Writes/sec", value: "200" },
      { label: "Reads/sec", value: "20K" },
      { label: "Redirects/day", value: "1.7B" },
      { label: "Storage/5yr", value: "~15GB" },
      { label: "Cache hit rate", value: "~80%" },
      { label: "p99 latency", value: "<10ms" },
    ],
  },
  {
    id: 2,
    title: "Twitter / News Feed",
    difficulty: "Hard",
    components: [
      "API Gateway",
      "User Service",
      "Tweet Service",
      "Fan-out Service",
      "Timeline Cache",
      "Cassandra",
      "Kafka",
      "Redis",
    ],
    approach: [
      "Push model (fan-out on write): when user tweets, Fan-out Service writes tweet ID to each follower's timeline cache in Redis. Best for most users.",
      "Pull model (fan-out on read): for celebrities with millions of followers, don't pre-populate. Merge celebrity tweets at read time.",
      "Hybrid: push for users with <1M followers; pull for celebrities. Merge at read time.",
      "Timeline cache stores sorted set of (tweet_id, timestamp) per user in Redis, capped at ~800 entries.",
      "Store tweets in Cassandra partitioned by (user_id, tweet_id DESC). Snowflake IDs embed timestamp for chronological sorting.",
      "Media (images/video) stored in S3, served via CDN. Metadata in tweets table.",
    ],
    considerations: [
      "Hot user problem: celebrities like @BarackObama have 130M followers. Async fan-out via Kafka to avoid blocking.",
      "Cache invalidation: tweets deleted → remove from timeline caches asynchronously via Kafka tombstone event.",
      "Eventual consistency acceptable for timelines — users expect slight delay.",
      "Thundering herd on celebrity tweets: use Kafka consumer groups to distribute fan-out work across workers.",
      "Read your own writes: write to user's own timeline cache synchronously, propagate to followers async.",
    ],
    keyNumbers: [
      { label: "Tweets/day", value: "500M" },
      { label: "MAU", value: "500M" },
      { label: "Reads/writes", value: "100:1" },
      { label: "Fan-out factor", value: "~200" },
      { label: "Cache size/user", value: "~3KB" },
      { label: "Timeline p99", value: "<50ms" },
    ],
  },
  {
    id: 3,
    title: "Rate Limiter",
    difficulty: "Medium",
    components: [
      "API Gateway",
      "Rate Limiter Middleware",
      "Redis Cluster",
      "Config Service",
      "Analytics DB",
    ],
    approach: [
      "Sliding Window Log: store request timestamps in Redis sorted set. Check count in last window. Most accurate but memory-heavy.",
      "Sliding Window Counter: hybrid of fixed-window. Estimate = prev_window_count × (1 - elapsed%) + curr_window_count. Memory efficient.",
      "Token Bucket: Redis HASH stores (tokens, last_refill_time). On request: calculate tokens added since last refill, cap at max, decrement 1.",
      "Leaky Bucket: queue requests and process at constant rate. Use Redis list + worker. Good for smoothing bursts.",
      "Store limits in Config Service (e.g., Zookeeper): per API key, per user, per endpoint. Cache locally in app server memory with short TTL.",
      "Return 429 Too Many Requests with Retry-After header. Log to analytics for alerting.",
    ],
    considerations: [
      "Distributed rate limiting: use Redis INCR + EXPIRE in Lua script for atomicity. Avoids race conditions.",
      "Rule hierarchy: global > per-user > per-endpoint. Take minimum across all matching rules.",
      "Soft limits vs hard limits: soft limit logs + alerts; hard limit rejects request.",
      "Client SDK: expose getRemainingTokens() so clients can self-throttle. Send X-RateLimit-Remaining headers.",
      "Bypass list: internal services and trusted IPs bypass rate limiting. Check at gateway level.",
    ],
    keyNumbers: [
      { label: "Algorithms", value: "4 types" },
      { label: "Redis ops/req", value: "1-2" },
      { label: "Latency add", value: "<1ms" },
      { label: "Config TTL", value: "60s" },
      { label: "HTTP Status", value: "429" },
      { label: "Accuracy", value: "99.9%" },
    ],
  },
  {
    id: 4,
    title: "Distributed Message Queue",
    difficulty: "Hard",
    components: [
      "Producers",
      "Brokers",
      "ZooKeeper / KRaft",
      "Topic Partitions",
      "Consumer Groups",
      "S3 (offload)",
    ],
    approach: [
      "Topics are split into ordered, immutable partitions. Each partition is a append-only log on disk (mmap for performance).",
      "Producers write to partition determined by key hash (or round-robin). Broker acknowledges after commit to ISR (In-Sync Replicas).",
      "Each partition is replicated across N brokers (typically 3). Leader handles reads/writes; followers replicate.",
      "Consumers in a consumer group each own exclusive partitions. Rebalance triggers when consumer joins/leaves.",
      "Offsets stored in internal __consumer_offsets topic or externally. Consumer commits offset after processing.",
      "For exactly-once semantics: idempotent producers (acks=all + enable.idempotence=true) + transactional API.",
    ],
    considerations: [
      "Ordering guarantee: only within a partition, not across partitions. Use single partition or ordered keys for global order.",
      "Retention policy: time-based (7 days default) or size-based. Tiered storage offloads cold data to S3.",
      "Consumer lag monitoring: Lag = latest_offset - consumer_offset. Alert if lag grows unboundedly.",
      "Dead letter queue: after N retries, route failed messages to DLQ topic for inspection.",
      "Backpressure: if consumer is slow, it holds the offset. Producer should not be allowed to get too far ahead.",
    ],
    keyNumbers: [
      { label: "Throughput", value: "millions/sec" },
      { label: "Replication", value: "3x" },
      { label: "Retention", value: "7 days" },
      { label: "Partition limit", value: "~200K/cluster" },
      { label: "p99 latency", value: "<5ms" },
      { label: "Durability", value: "99.9999%" },
    ],
  },
  {
    id: 5,
    title: "Search Autocomplete",
    difficulty: "Hard",
    components: [
      "Browser Client",
      "API Gateway",
      "Trie Service",
      "Query Aggregation",
      "Frequency DB",
      "CDN",
      "Redis Cache",
    ],
    approach: [
      "Build a Trie on the backend. Each Trie node stores: character, children map, top-K suggestions (max 5) with frequencies.",
      "Offline aggregation: collect raw queries in Kafka → batch Spark job aggregates frequency → updates Trie DB daily.",
      "Serve suggestions from in-memory Trie replica on each server. Prefix cache in Redis for top queries.",
      "Client-side: debounce 300ms, cache last N prefix results in browser. Only send request on cache miss.",
      "Personalization: merge global Trie top-K with user's recent queries. Weight recency.",
      "Gradual rollout: new Trie snapshot deployed via blue-green. Route 10% traffic to test.",
    ],
    considerations: [
      "Trie size on disk can be large (~GB for all English queries). Serialize to disk with Protobuf. Load into memory on start.",
      "Update frequency: real-time updates have high overhead. Batch update every 1hr or daily is acceptable for suggestions.",
      "Filter offensive queries using a blocklist trie queried before returning suggestions.",
      "Multi-language support: separate Trie per language/locale. Client sends Accept-Language header.",
      "Cold start: pre-load top 1000 prefixes on server boot from Redis to avoid Trie misses during warmup.",
    ],
    keyNumbers: [
      { label: "Queries/day", value: "5B" },
      { label: "Suggestions", value: "top 5" },
      { label: "Debounce", value: "300ms" },
      { label: "Cache hit", value: "~95%" },
      { label: "Update lag", value: "~1hr" },
      { label: "p99 latency", value: "<50ms" },
    ],
  },
];

export const behavioralQuestions = [
  {
    id: 1,
    category: "Leadership",
    question:
      "Tell me about a time you led a project under tight deadlines with an ambiguous scope.",
    star: {
      situation:
        "At Fidelity, our team was handed a 6-week timeline to migrate a legacy monolith endpoint serving retirement account data to a microservices architecture — with requirements still being finalized by the business team.",
      task:
        "As tech lead, I had to scope the work, align 4 engineers on priorities, and deliver without full clarity on the final requirements.",
      action:
        "I implemented a '70% confidence' rule — we built the core migration for well-understood requirements first, then used feature flags to stub the ambiguous parts. I held daily 15-minute syncs focused purely on blockers. I also created a risk log shared with the PM so decisions escalated quickly.",
      result:
        "Delivered on time with zero production incidents. The feature-flag approach meant we shipped the ambiguous features in the 2 weeks after launch without a re-deploy. The PM called it out as a model for other migrations.",
    },
  },
  {
    id: 2,
    category: "Conflict",
    question:
      "Describe a situation where you had a technical disagreement with a senior engineer. How did you handle it?",
    star: {
      situation:
        "During a code review at Ascendion, a senior engineer pushed back on my choice to use an event-driven pattern for a notification service, preferring a synchronous REST call for simplicity.",
      task:
        "I needed to either defend my approach with evidence or yield gracefully — without damaging the relationship or shipping the wrong design.",
      action:
        "Instead of arguing in the PR, I wrote a 1-page design doc comparing both approaches with latency benchmarks, failure modes, and operational complexity. I proposed a 2-hour design review and invited the architect.",
      result:
        "The architect supported the event-driven approach after seeing the failure-mode analysis. The senior engineer later told me the doc changed his view on when async patterns are justified. The service has processed 50M+ events with 99.99% reliability.",
    },
  },
  {
    id: 3,
    category: "Failure",
    question:
      "Tell me about your biggest technical failure and what you learned.",
    star: {
      situation:
        "I once deployed a database migration script that added a NOT NULL column without a default value to a 50M-row production table — causing a 40-minute outage.",
      task:
        "I was responsible for the schema change and had approved the deployment plan myself, thinking the migration would be fast.",
      action:
        "I immediately initiated rollback, communicated to stakeholders every 10 minutes, and worked with DBA to add the column as nullable first, backfill, then add constraint. Post-incident, I wrote a runbook for large migrations and introduced a pre-deploy schema review gate.",
      result:
        "Outage was resolved in 40 minutes. The runbook I wrote was adopted by 3 other teams and is now standard in our deployment checklist. No similar incidents in the 2 years since.",
    },
  },
  {
    id: 4,
    category: "Innovation",
    question:
      "Give an example of a time you identified and solved a problem nobody else had noticed.",
    star: {
      situation:
        "While reviewing metrics at Fidelity, I noticed our RAG pipeline had a 23% 'hallucination rate' on financial queries — but no one was tracking this systematically.",
      task:
        "The team was focused on retrieval recall metrics; accuracy of generated answers wasn't being measured. I took it upon myself to investigate.",
      action:
        "I built an automated evaluation harness using GPT-4 as a judge against a golden dataset of 500 Q&A pairs. I found the root cause: retrieved context chunks were too large (512 tokens), diluting relevant content. I reduced chunk size to 128 with 20-token overlap.",
      result:
        "Hallucination rate dropped from 23% to 6% in 2 weeks. The evaluation framework became a permanent CI gate — every model change is now scored against the golden dataset before promotion.",
    },
  },
  {
    id: 5,
    category: "Prioritization",
    question:
      "Tell me about a time you had to say no to a stakeholder request.",
    star: {
      situation:
        "A product manager requested an AI-powered feature that would summarize client portfolios in natural language — with a 2-week deadline for a board demo at Fidelity.",
      task:
        "The timeline was technically impossible for a production-ready feature, but the PM was under pressure from executives.",
      action:
        "I scheduled a 30-minute meeting and came with three options: (1) demo-quality mock for the board, (2) production MVP in 6 weeks, (3) full feature in 12 weeks. I quantified the risks of rushing each. I advocated for option 1 + 2 in parallel.",
      result:
        "PM agreed to the demo-mock for the board and a proper 6-week build. The board loved the demo. We shipped production in 7 weeks (1 week delay due to compliance review). The PM said having options with tradeoffs made the 'no' easy to accept.",
    },
  },
  {
    id: 6,
    category: "Collaboration",
    question:
      "Describe a time you helped a struggling teammate without being asked.",
    star: {
      situation:
        "A junior developer on my team was consistently missing sprint commitments. In standups they'd say 'still in progress' for 3 consecutive days on the same ticket.",
      task:
        "As a senior, it wasn't formally my responsibility, but the team velocity was suffering and I could see the junior was frustrated.",
      action:
        "I asked if we could do a casual 'rubber duck' session over lunch (no pressure). In 20 minutes I realized they were stuck on async/await — a conceptual gap, not a skill gap. I pair-programmed with them for 2 hours and built a personal 1-pager on async patterns in our stack.",
      result:
        "They closed that ticket the same day. Over the next sprint they completed 40% more story points. Six months later, they were pair-programming with the next new hire using the same 1-pager.",
    },
  },
  {
    id: 7,
    category: "Ownership",
    question:
      "Tell me about a time you went beyond your job description to ensure success.",
    star: {
      situation:
        "During a major product launch at Ascendion, our QA team was reduced due to org restructuring 2 weeks before go-live.",
      task:
        "As a backend engineer, testing wasn't my role — but the launch was at risk of shipping with critical bugs.",
      action:
        "I wrote an end-to-end integration test suite covering the 15 critical user journeys using Cypress, trained 3 other developers to run and interpret tests, and set up a shared test report in Slack.",
      result:
        "We caught 4 critical bugs pre-launch that manual QA had missed. Launch was on time with zero P0 incidents in the first 30 days — a first for that product line.",
    },
  },
  {
    id: 8,
    category: "Data-Driven",
    question: "Tell me about a time you used data to change a decision.",
    star: {
      situation:
        "The team decided to migrate our caching layer from Redis to Memcached to reduce infrastructure cost — a decision made in a 30-minute meeting based on a vendor's pricing pitch.",
      task:
        "I had concerns that Memcached would hurt performance for our use case (complex serialized objects), but couldn't argue intuitively.",
      action:
        "I ran a 48-hour shadow traffic experiment routing 5% of requests to both caches. I measured p50/p95/p99 latency, cache hit rate, CPU, and memory for both. Prepared a 5-slide deck with clear charts.",
      result:
        "Data showed Memcached had 3.2x higher p99 latency for our object sizes. Migration was cancelled. The experiment framework I built became the standard for evaluating infrastructure changes.",
    },
  },
  {
    id: 9,
    category: "Adaptability",
    question:
      "Describe a time you had to quickly learn a new technology to deliver a project.",
    star: {
      situation:
        "Midway through a project at HCL, the client mandated a switch from REST to GraphQL for their mobile app integration — 3 weeks into a 10-week engagement.",
      task:
        "I had 0 production GraphQL experience. I needed to become proficient enough to design the schema, implement resolvers, and train 2 junior developers.",
      action:
        "I spent the first weekend doing a structured deep-dive: official docs + 2 real-world codebases on GitHub + building a throwaway CRUD app. I identified the 20% of GraphQL concepts covering 80% of our use case (queries, mutations, N+1 with DataLoader). I documented a 'starter guide' for the team.",
      result:
        "We delivered the GraphQL API on time. Mobile app load time improved 35% due to precise field selection. The starter guide I wrote reduced onboarding time for 2 contractors we hired later.",
    },
  },
  {
    id: 10,
    category: "Metrics Impact",
    question: "Tell me about the highest-impact technical work you've done.",
    star: {
      situation:
        "The investment analytics platform at Fidelity was running batch reports taking 14+ hours — preventing analysts from running ad-hoc queries during market hours.",
      task:
        "Reduce report generation time to enable real-time querying for 500+ analysts.",
      action:
        "I redesigned the pipeline: replaced sequential SQL scans with parallel Spark jobs, introduced incremental processing (only process changed portfolios), and added result caching keyed by portfolio hash. Used columnar Parquet storage instead of row-based CSV.",
      result:
        "Report time dropped from 14 hours to 22 minutes — a 97% improvement. Real-time ad-hoc queries became possible. Analysts estimated saving 2 hours per day each. Infrastructure cost dropped 40% due to shorter compute windows.",
    },
  },
];
