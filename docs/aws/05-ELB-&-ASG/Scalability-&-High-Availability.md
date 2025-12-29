---
title: 01. Scalability & High Availability
sidebar_label: A1. Scalability & High Availability
sidebar_position: 1
---

# 01. Scalability & High Availability & Elasticity

---

## 🧩 A. Scalability

Scalability is the ability of a system to handle **increased load** by adjusting resources.

---

### 🔸 Two Types of Scalability

| Type                       | Description                                                   | Example                                       |
| -------------------------- | ------------------------------------------------------------- | --------------------------------------------- |
| **Vertical Scalability**   | Increase the capacity of an existing instance (scale up/down) | Upgrading from `t2.micro` → `t2.large`        |
| **Horizontal Scalability** | Increase the number of running instances (scale out/in)       | Multiple EC2 instances behind a Load Balancer |

---

## 🏗️ A1. Vertical Scalability

- Also called **scale up** (or **scale down** when reducing resources).
- Involves increasing **CPU, memory, or I/O** of a single instance.
- Best suited for **non-distributed systems** (for example, traditional databases).

---

### 💡 Example

- **AWS example**
  - Change instance type from **t2.micro → t2.large**.

---

### ⚠️ Limitation

- Limited by **physical hardware constraints**.
- There is always a maximum size an instance can scale to.

---

## 🌐 A2. Horizontal Scalability

- Also called **scale out** (add instances) and **scale in** (remove instances).
- Adds **more machines** instead of upgrading one.
- Requires a **distributed application architecture**.

---

### 💡 Example

- **AWS example**
  - Multiple EC2 instances behind an **Elastic Load Balancer (ELB)**.
  - Managed automatically using an **Auto Scaling Group (ASG)**.

---

## 🧭 B. High Availability

- Ensures applications remain **available even if one AZ fails**.
- Achieved by deploying resources across **multiple Availability Zones**.
- Eliminates **single points of failure** and improves fault tolerance.

---

### 💡 Example

- Two call centers:
  - **New York** and **San Francisco**
- If New York experiences a power outage, San Francisco continues handling traffic.
- The application remains **available**.

---

### ⚙️ High Availability in AWS

AWS typically achieves High Availability using:

- **Auto Scaling Group (Multi-AZ)**  
  Automatically launches instances across multiple AZs.
- **Elastic Load Balancer (Multi-AZ)**  
  Distributes traffic only to healthy instances across AZs.

**How they work together:**

- ELB redirects traffic away from unhealthy instances or AZs.
- ASG replaces failed instances automatically in other AZs.

---

## 🧮 C. Elasticity

- Elasticity extends scalability by **automatically adjusting capacity** based on demand.
- No manual intervention is required.
- Optimizes **performance and cost efficiency**.

---

### 💡 Example

- Traffic spikes at **8 PM**, drops after midnight:
  - ASG scales out during peak hours.
  - ASG scales in during low traffic.
- You **pay only for consumed resources**.

---

### ⚙️ Elasticity in AWS

Elasticity is implemented using:

- **Auto Scaling Groups (ASG)**  
  Scale EC2 instances based on metrics like CPU or request count.
- **Elastic Load Balancer (ELB)**  
  Automatically routes traffic as instances are added or removed.

---

### 🧠 Scalability vs Elasticity

| Concept         | Description                       | Automation          | Example                                    |
| --------------- | --------------------------------- | ------------------- | ------------------------------------------ |
| **Scalability** | Ability to handle increased load  | Manual or automatic | Add more EC2 instances                     |
| **Elasticity**  | Automatic scaling based on demand | **Fully automatic** | ASG adds/removes EC2 instances dynamically |

---

### ✅ Summary

- **High Availability** keeps applications running during failures.
- **Elasticity** ensures efficiency by adjusting capacity automatically.
- Together, they enable **resilient, cost-optimized, cloud-native systems**.

---

## 📊 EC2 Scalability Summary

| Type                   | Action              | Example                | AWS Service Used         |
| ---------------------- | ------------------- | ---------------------- | ------------------------ |
| **Vertical Scaling**   | Scale Up / Down     | t2.micro → t2.large    | Change EC2 Instance Type |
| **Horizontal Scaling** | Scale Out / In      | 1 → many EC2 instances | ASG + ELB                |
| **High Availability**  | Multi-AZ Deployment | Multiple AZs           | Multi-AZ ASG + ELB       |

---

## 🧠 Cloud Concepts Comparison

| Concept         | Definition                       | Key Idea               |
| --------------- | -------------------------------- | ---------------------- |
| **Scalability** | System handles more load         | Grow capacity          |
| **Elasticity**  | System auto-scales with demand   | Pay-per-use efficiency |
| **Agility**     | Rapid deployment of IT resources | Faster innovation      |
