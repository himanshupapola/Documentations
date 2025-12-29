---
title: 04. Serverless Intro
sidebar_label: A4. Serverless Intro
sidebar_position: 4
---

# 🌐 4. What is Serverless?

**Serverless** is a modern cloud computing paradigm where developers **focus on writing code** without worrying about **server management, provisioning, or scaling**. AWS automatically provisions and scales the resources as needed.

| **Feature**              | **Description**                                     |
| ------------------------ | --------------------------------------------------- |
| **No Server Management** | Developers don't manage or provision servers.       |
| **Automatic Scaling**    | AWS scales resources automatically based on demand. |
| **Pay per Execution**    | You only pay when your code runs.                   |
| **Event-Driven**         | Code runs in response to events or triggers.        |
| **Stateless**            | Each function invocation is independent.            |

---

### 🧠 Concept Overview

- Developers **deploy code or functions**, not servers.
- **Originally**: Serverless = _Function as a Service (FaaS)_ — pioneered by **AWS Lambda**.
- **Now**: The term includes **fully managed services** like databases, messaging, and storage.
- **Note**: There **are still servers** behind the scenes — you just **don’t manage or see them**.

---

## 🧩 Examples of Serverless Services

| **Service**         | **Type**   | **Description**                                                  |
| ------------------- | ---------- | ---------------------------------------------------------------- |
| **Amazon S3**       | Storage    | Upload files without managing any server; scales automatically.  |
| **Amazon DynamoDB** | Database   | Create tables that auto-scale without provisioning servers.      |
| **AWS Fargate**     | Containers | Run Docker containers without managing EC2 instances.            |
| **AWS Lambda**      | Compute    | Run functions in response to events — the pioneer of Serverless. |

---

## 💡 Summary

> **Serverless = Managed + Scalable + No Infrastructure Management**

- Developers **focus on code**, not servers.
- **Ideal for event-driven, stateless applications**.
- Introduced by **AWS Lambda**, now extended across multiple AWS services.
