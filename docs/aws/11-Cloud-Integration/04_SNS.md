---
title: 04. SNS
sidebar_label: A4. SNS
sidebar_position: 4
---

# 03. Amazon SNS (Simple Notification Service)

**Amazon SNS** (Simple Notification Service) enables **asynchronous, one-to-many (Pub/Sub)** messaging between distributed systems and microservices. It allows a single message to be **broadcast to multiple subscribers** instantly ideal for **notifications** and **fan-out messaging**.

When one service needs to **send the same message to multiple receivers**, direct integrations can get messy.

Instead of connecting to each service individually, we use **SNS Topics**.

<div align="center">
  <img
    src="/img/aws/11/image_05.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

---

### ⚙️ How It Works

| Component                   | Role                                                         |
| --------------------------- | ------------------------------------------------------------ |
| **Publisher (Producer)**    | Sends a message to an SNS **Topic**.                         |
| **Topic**                   | Acts as a central hub for distributing messages.             |
| **Subscribers (Consumers)** | Receive messages from the topic, all subscribers get a copy. |

✅ One publisher → many subscribers.  
✅ Each subscriber gets **all messages**.  
✅ No need for multiple direct integrations.

---

### 🌐 Example Use Case

**Scenario:** An e-commerce platform where the **Buying Service** needs to notify multiple systems.

| Destination          | Description                              |
| -------------------- | ---------------------------------------- |
| **Email Service**    | Sends order confirmation email.          |
| **Fraud Service**    | Checks order legitimacy.                 |
| **Shipping Service** | Starts shipment preparation.             |
| **SQS Queue**        | Sends order info for further processing. |

✅ All notifications sent **simultaneously** from a single publish action.

---

### ⚡ Scalability & Limits

| Feature                    | Value                                                            |
| -------------------------- | ---------------------------------------------------------------- |
| **Subscribers per Topic**  | Up to **12 million**                                             |
| **Topics per Account**     | Soft limit of **100,000**                                        |
| **Destinations Supported** | SQS, Lambda, Firehose, Email, SMS, Mobile Push, HTTP/S Endpoints |
| **Latency**                | Near real-time (milliseconds)                                    |
| **Delivery Retries**       | Automatic for supported protocols                                |

---

### 🧠 Exam Tips

| Keyword                           | Think Of |
| --------------------------------- | -------- |
| **Notification**                  | SNS      |
| **Pub/Sub model**                 | SNS      |
| **Fan-out pattern**               | SNS      |
| **Broadcast to multiple systems** | SNS      |
| **One-to-many communication**     | SNS      |

---

### 🔁 SNS vs SQS Comparison

| Feature              | **SQS (Queue)**                        | **SNS (Topic)**                                    |
| -------------------- | -------------------------------------- | -------------------------------------------------- |
| **Model**            | Point-to-Point                         | Publish/Subscribe                                  |
| **Message Delivery** | Delivered to **one consumer instance** | Delivered to **all subscribers**                   |
| **Persistence**      | Messages stored until processed        | Messages pushed immediately                        |
| **Use Case**         | Decouple producer and consumer         | Broadcast events to multiple receivers             |
| **Example**          | Order processing queue                 | Send “OrderPlaced” to Email, SMS, Billing services |

---

### 🧩 Fan-Out Pattern

SNS and SQS are often **used together** — SNS sends a message to **multiple SQS queues**.

✅ **Reliable and scalable broadcast**  
✅ Each service processes messages **independently**  
✅ Perfect for **decoupled microservice architectures**

---

## 🧠 Key Takeaway

> **Amazon SNS** allows a single message to be instantly broadcast to multiple subscribers

> Ideal for **notifications**, **alerts**, and **fan-out** integration patterns.

> Think **"Publish/Subscribe"** whenever you need **one-to-many** communication.

---

### SNS Hands On

1. Create Topic (Email is subscribe here)
<div align="center">
  <img
    src="/img/aws/11/image_07.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

2. Publishing message works
<div align="center">
  <img
    src="/img/aws/11/image_08.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

🔹 SQS → Pull model (polling required)
🔹 SNS → Push model (automatic delivery)
