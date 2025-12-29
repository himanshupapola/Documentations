---
title: 06. DynamoDB
sidebar_label: A6. DynamoDB
sidebar_position: 6
---

# 06. Amazon DynamoDB

**Amazon DynamoDB** is a **fully managed, serverless NoSQL database service** that provides fast and predictable performance with seamless scalability. It is designed for applications that require **single-digit millisecond latency** at any scale.

---
### ⚙️ Features

- Fully managed and serverless no servers to manage
- NoSQL database supporting key-value and document models
- Automatically scales with demand
- High availability with replication across 3 Availability Zones (AZs)
- Handles millions of requests per second, trillions of rows, and hundreds of terabytes of data
- Fast and consistent performance with single-digit millisecond latency
- Integrated with AWS IAM for security, authorization, and administration
- Cost-effective with on-demand, provisioned, and auto-scaling capacity modes
- Supports Standard and Infrequent Access (IA) table classes for cost optimization

| **Component**   | **Description**                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Table**       | Container for items (like a collection or table)                                                                   |
| **Item**        | A single record in a table (similar to a row)                                                                      |
| **Attribute**   | A field within an item (similar to a column)                                                                       |
| **Primary Key** | Uniquely identifies each item. Can be: <br/>• Partition key (single key) <br/>• Partition + Sort key (composite key) |
| **Data Model**  | Flexible – you can add attributes without schema changes                                                           |

---
### ⚙️ Performance & Scaling

- **Serverless** – No need to manage infrastructure.
- **Automatic Scaling** – Adjusts read/write capacity based on traffic.
- **High Availability** – Data replicated across **3 AZs** in a region.
- **Durability** – Designed for **99.999% availability**.

---
### ⚡ DynamoDB Accelerator (DAX)

**DAX (DynamoDB Accelerator)** is a **fully managed in-memory cache** for DynamoDB.

| **Feature**     | **Description**                                                       |
| --------------- | --------------------------------------------------------------------- |
| **Purpose**     | Improve read performance by caching frequently accessed data          |
| **Performance** | Up to **10x faster** – from milliseconds to **microseconds**          |
| **Integration** | Fully integrated with DynamoDB (not general-purpose like ElastiCache) |
| **Use Case**    | Ideal for low-latency, high-read workloads                            |

📌 _If the cache is missed, DAX automatically retrieves data from DynamoDB._

---
### 🌍 DynamoDB Global Tables

**Global Tables** enable **multi-region, multi-master replication** of DynamoDB data.

| **Feature**     | **Description**                                  |
| --------------- | ------------------------------------------------ |
| **Purpose**     | Provide low-latency data access across regions   |
| **Replication** | Two-way replication between up to 10 AWS Regions |
| **Access**      | Read/Write in any region (Active-Active)         |
| **Benefit**     | Global high availability and disaster recovery   |

### Example:

- Table in `us-east-1` (N. Virginia)
- Global replica in `eu-west-3` (Paris)
- Both regions can read/write data with **automatic synchronization**.

---
### 🧠 Exam Tips

| **Keyword**                       | **Meaning / Association**        |
| --------------------------------- | -------------------------------- |
| _Serverless Database_             | DynamoDB                         |
| _Low Latency_                     | Single-digit millisecond latency |
| _Caching for DynamoDB_            | DAX                              |
| _Global Multi-Region Replication_ | Global Tables                    |
| _NoSQL / Key-Value Data Model_    | DynamoDB                         |
