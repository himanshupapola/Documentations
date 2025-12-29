---
title: 01. Docker
sidebar_label: A1. Docker
sidebar_position: 1
---

# 🐳 01. What is Docker?

**Docker** is a **software platform** used to **build, package, and deploy applications** in lightweight, portable units called **containers**.

| Feature                | Description                                                                     |
| ---------------------- | ------------------------------------------------------------------------------- |
| **Containerization**   | Packages applications and their dependencies into a single isolated unit.       |
| **Portability**        | Runs on any operating system, cloud, or machine — no compatibility issues.      |
| **Consistency**        | Ensures applications behave the same in development, testing, and production.   |
| **Efficiency**         | Containers launch in seconds and consume fewer resources than virtual machines. |
| **Scalability**        | Scale containers up or down within seconds to handle varying workloads.         |
| **Flexibility**        | Supports any language, operating system, or technology stack.                   |
| **Ease of Deployment** | Simplifies maintenance, updates, and deployment of applications.                |

---

### 🧱 Why Use Docker?

- Eliminates the “**works on my machine**” problem.
- Simplifies **maintenance**, **testing**, and **deployment** workflows.
- Ideal for **microservices**, **CI/CD pipelines**, and **cloud-native** app development.

---

### 🧩 Docker vs Virtual Machines

| Aspect           | **Docker Container** | **Virtual Machine (VM)** |
| ---------------- | -------------------- | ------------------------ |
| **Startup Time** | Seconds              | Minutes                  |
| **Size**         | Lightweight (MBs)    | Heavy (GBs)              |
| **Isolation**    | Shares OS kernel     | Full OS per VM           |
| **Performance**  | Near-native speed    | Slower due to hypervisor |
| **Use Case**     | Fast, scalable apps  | Full system isolation    |

Docker makes application deployment **faster**, **more consistent**, and **easier to scale**, regardless of the environment.

---
## 🐳 Where Are Docker Images Stored?

**Docker images** are stored in **container registries** — repositories that allow you to **store, manage, and share** container images.

| Type                 | Description                                                          | Example                                     |
| -------------------- | -------------------------------------------------------------------- | ------------------------------------------- |
| **Public Registry**  | Open and accessible to everyone. Useful for sharing images globally. | [Docker Hub](https://hub.docker.com/)       |
| **Private Registry** | Secured and accessible only within your organization or AWS account. | **Amazon ECR (Elastic Container Registry)** |

---
### 🌐 Docker Hub

- The **centralized public registry** maintained by Docker.
- Default location where Docker pulls and pushes images.
- You can host your own **public or private** repositories.
- URL: [https://hub.docker.com/](https://hub.docker.com/)

---
### ☁️ Amazon Elastic Container Registry (ECR)

- A **fully managed AWS service** for storing and managing Docker container images.
- **Integrates with ECS, EKS, and AWS CodePipeline.**
- Provides **private and secure** storage within your AWS environment.
- Supports **image versioning, IAM permissions**, and **lifecycle policies**.
