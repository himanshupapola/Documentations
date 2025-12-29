---
title: 03. EKS
sidebar_label: A3. EKS
sidebar_position: 3
---

# 03. Amazon EKS

**Amazon EKS (Elastic Kubernetes Service)** is a **fully managed Kubernetes service** that makes it easy to **run Kubernetes clusters** on AWS or on-premises.

Kubernetes (often called _K8s_) is an **open-source system** for automating the **deployment, scaling, and management** of containerized applications.

---

### 🧩 What is Kubernetes?

- **Kubernetes** is a **container orchestration platform** originally developed by Google.
- It manages clusters of servers that run **containers** (usually Docker containers).
- It decides **where to run containers**, **how to scale them**, and **how they communicate**.

---

### ⚙️ EKS Architecture

EKS consists of:

- **Control Plane (Managed by AWS):**  
  Manages the Kubernetes API, scheduling, and cluster operations.
- **Worker Nodes:**  
  EC2 instances or **Fargate tasks** where your containers actually run.
- **Pods:**  
  Smallest deployable unit in Kubernetes — usually runs one or more containers.

| **Feature**                | **Description**                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| **Managed Control Plane**  | AWS runs and scales the Kubernetes control plane for you.                                    |
| **Runs on EC2 or Fargate** | Choose between self-managed EC2 instances or serverless Fargate.                             |
| **Highly Available**       | Control plane runs across multiple AWS Availability Zones.                                   |
| **Integration**            | Works seamlessly with IAM, VPC, CloudWatch, and ECR.                                         |
| **Multi-Cloud Capability** | Kubernetes is **cloud-agnostic** — you can run workloads across AWS, Azure, GCP, or on-prem. |

---

## 🖼️ Architecture Diagram (Conceptual)

```
          +----------------------+
          |   Developers / CI-CD |
          +----------+-----------+
                     |
                     v
          +----------------------+
          |  Amazon EKS Cluster  |
          | (Managed Control Plane) |
          +----------+-----------+
                     |
          +----------+-----------+
          |   Worker Nodes       |
          | (EC2 or Fargate)     |
          +----------+-----------+
                     |
          +----------+-----------+
          |   Pods / Containers  |
          | (Docker, etc.)       |
          +----------+-----------+
                     |
                     v
          +----------------------+
          |   Amazon ECR         |
          | (Stores Container Images) |
          +----------------------+
```

---

## 🧭 Flow Summary

1. Developers build and push container images to **Amazon ECR**.
2. **EKS Control Plane** manages the cluster and schedules **pods**.
3. **Worker Nodes** (EC2 or Fargate) run these pods.
4. EKS integrates with **IAM**, **CloudWatch**, and **VPC** for security and monitoring.

---

### 🧩 ECS vs EKS

---

| **Feature**                | **ECS**              | **EKS**                           |
| -------------------------- | -------------------- | --------------------------------- |
| **Container Orchestrator** | AWS proprietary      | Kubernetes (open-source)          |
| **Control Plane**          | Managed by AWS       | Managed by AWS                    |
| **Multi-Cloud**            | No (AWS only)        | Yes (cloud-agnostic)              |
| **Launch Types**           | EC2 & Fargate        | EC2 & Fargate                     |
| **Complexity**             | Easier               | More flexible but complex         |
| **Use Case**               | AWS-native workloads | Multi-cloud / hybrid environments |

<div align="center">
  <img
    src="/img/aws/08/image_03.png"
    alt="IAM Roles Example"
    width="500"
  />
</div>
