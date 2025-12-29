---
title: 02. SQS
sidebar_label: A2. SQS
sidebar_position: 2
---

# 02. Amazon SQS (Simple Queue Service)

Amazon **SQS (Simple Queue Service)** is a **fully managed message queuing service** that allows you to **decouple** and **scale** microservices, distributed systems, and serverless applications.

When deploying multiple services, **direct communication (App → App)** can create tight coupling and scaling issues. SQS solves this by acting as a **buffer** between producers and consumers.

---

### ⚙️ How It Works

| Component               | Role                                                                                            |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| **Producer (Sender)**   | Sends messages to the SQS queue. Can be one or many producers.                                  |
| **Queue**               | Stores messages until they are processed or deleted.                                            |
| **Consumer (Receiver)** | Polls (requests) messages from the queue and processes them. Can also be one or many consumers. |

<div align="center">
  <img
    src="/img/aws/11/image_01.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

✅ Multiple producers can send messages.  
✅ Multiple consumers can process messages concurrently.  
✅ Each message is delivered to **only one consumer instance** (point-to-point model).

---

### 🧱 Architecture Example

**Scenario:** A video-sharing platform where users upload videos for processing.

| Layer                          | Description                                                      |
| ------------------------------ | ---------------------------------------------------------------- |
| **Frontend Web Servers**       | Accept user uploads and send “video processing” messages to SQS. |
| **SQS Queue**                  | Temporarily stores video processing requests.                    |
| **Video Processing EC2 Group** | Polls messages from SQS and encodes videos asynchronously.       |

✅ Web and processing layers are **decoupled**  
✅ Each can **scale independently** based on workload  
✅ Processing layer can auto-scale based on **queue length**

<div align="center">
  <img
    src="/img/aws/11/image_02.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

---

### ⚡ Performance & Scaling

- Scales automatically from **1 to tens of thousands** of messages per second.
- Low latency (< 10 ms for send/receive).
- No limit on queue size (unlimited messages).
- Message retention:
  - **Default:** 4 days
  - **Maximum:** 14 days
- **Fully managed and serverless** — no server provisioning required.

---

### 🧠 Exam Tips

| Feature                | Description                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------- |
| **Decoupling**         | Always think **SQS** when you see “decouple application tiers.”                    |
| **Polling**            | Consumers **poll** the queue to receive messages.                                  |
| **Visibility Timeout** | Prevents other consumers from processing a message that’s already being worked on. |
| **Message Deletion**   | Must be deleted after successful processing.                                       |
| **FIFO Queues**        | Ensure message order (First-In-First-Out).                                         |

---

### 🔁 SQS FIFO Queues

| Feature        | Standard Queue      | FIFO Queue                 |
| -------------- | ------------------- | -------------------------- |
| **Order**      | Not guaranteed      | Guaranteed                 |
| **Throughput** | Very high           | Limited (but consistent)   |
| **Use Case**   | Parallel processing | Order-sensitive processing |

**Example:**  
If messages are sent as 1 → 2 → 3 → 4,  
a FIFO queue ensures consumers receive them in the **same order**.

---

### 🧠 Key Takeaway

> **Amazon SQS decouples your applications** by introducing a message queue between producers and consumers.  
> It provides **scalability**, **fault tolerance**, and **asynchronous processing** — all fully managed by AWS.

## SQS Hands On

**Step 1:** Create Queue

<div align="center">
  <img
    src="/img/aws/11/image_03.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>
**Step 2:** Test Queue

<div align="center">
  <img
    src="/img/aws/11/image_04.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>
