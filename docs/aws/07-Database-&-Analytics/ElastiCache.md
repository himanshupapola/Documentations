---
title: 05. ElastiCache
sidebar_label: A5. ElastiCache
sidebar_position: 5
---

# ⚡ 05. ElastiCache Overview

AWS’s managed **in-memory caching service** that boosts application performance by reducing database load.

**Amazon ElastiCache** is a **fully managed in-memory data store and cache** that provides:

- **Sub-millisecond latency**
- **High throughput**
- **Automatic scaling and management**

It helps improve application performance by **storing frequently accessed data in memory**, reducing load on databases.

---

### 🧠 Supported Engines

| **Engine**    | **Description**                                                                                       | **Use Case**                                                            |
| ------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Redis**     | Advanced key-value store with **replication**, **persistence**, **Pub/Sub**, and **data structures**. | Real-time analytics, leaderboards, caching sessions, message brokering. |
| **Memcached** | Simple, **memory-only caching** system with multi-threaded design.                                    | Simple caching layer to speed up dynamic web applications.              |

---

### ⚙️ How It Works

1. Application queries ElastiCache instead of directly hitting the database.
2. Frequently accessed data is stored in-memory.
3. Cache hit → returns data instantly.
4. Cache miss → data fetched from DB, stored in cache for future requests.

<div align="center">
  <img
    src="/img/aws/07/image_05.png"
    alt="IAM Roles Example"
  />
</div>

> 🧩 **Result:** Reduced latency, faster response times, and decreased load on backend databases.
