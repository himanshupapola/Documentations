---
title: 02. DDoS Protection
sidebar_label: A2. DDoS Protection
sidebar_position: 2
---

# 🛡️ 02. AWS DDoS Protection

Understand how AWS protects applications from **Distributed Denial-of-Service (DDoS)** attacks using built-in and advanced services like **AWS Shield**, **WAF**, **CloudFront**, and **Route 53**.

---

### 🧩 1. What is a DDoS Attack?

A **Distributed Denial-of-Service (DDoS)** attack occurs when multiple systems flood the target server with requests, overwhelming its capacity and causing downtime.

<div align="center">
  <img
    src="/img/aws/14/image_01.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

| Component    | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| **Attacker** | Launches control over multiple bots or compromised devices.     |
| **Bots**     | Send massive numbers of requests to the application server.     |
| **Impact**   | Server becomes unresponsive → users experience service outages. |

---
## 🧰 AWS DDoS Protection Layers

AWS offers **multiple layers of defense** against DDoS attacks.

| Service                                | Role in Protection                                                                                |
| -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **AWS Shield Standard**                | Always-on, free protection for all AWS customers against common DDoS attacks (L3/L4).             |
| **AWS Shield Advanced**                | Paid ($3,000/month/org) enhanced protection with 24/7 support and cost protection during attacks. |
| **AWS WAF (Web Application Firewall)** | Protects Layer 7 (HTTP/S) from web exploits like SQL injection & XSS.                             |
| **Amazon CloudFront**                  | Distributes and caches content globally, absorbing attack traffic at edge locations.              |
| **Amazon Route 53**                    | DNS service that is globally resilient and integrated with Shield for DDoS mitigation.            |
| **Auto Scaling**                       | Automatically scales resources to handle unexpected traffic surges.                               |

---

### 🔐 DDoS-Resilient Application Setup

Users → Route 53 (Shield Protected) → CloudFront (Shield + Cache)
→ AWS WAF → Application Load Balancer
→ EC2 Instances (Auto Scaling Group)

<div align="center">
  <img
    src="/img/aws/14/image_02.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

✅ **Benefits:**

- Global edge protection using CloudFront & Route 53
- Layer 3/4 defense with Shield Standard/Advanced
- Layer 7 filtering via WAF
- Scalability during traffic spikes with Auto Scaling

---

### 🛡️ AWS Shield

| Type                | Description                                                                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Shield Standard** | Default, free protection for all AWS customers. Defends against SYN/UDP floods, reflection attacks, etc.                                                                       |
| **Shield Advanced** | Paid upgrade for enhanced protection on EC2, ELB, CloudFront, Global Accelerator, and Route 53. Includes 24/7 AWS DDoS Response Team (DRT) and cost protection during attacks. |

---

### 🌐 AWS Web Application Firewall (WAF)

Protects **HTTP/S applications (Layer 7)** from malicious traffic.

| Feature                           | Description                                                                            |
| --------------------------------- | -------------------------------------------------------------------------------------- |
| **Deploys On**                    | ALB, CloudFront, API Gateway                                                           |
| **Web ACL (Access Control List)** | Collection of filtering rules applied to web traffic.                                  |
| **Rule Types**                    | IP-based, Header-based, Body-based, SQL Injection, XSS, Geo-blocking, Size constraints |
| **Rate-based Rules**              | Limit requests per IP to mitigate DDoS (e.g., 5 req/sec).                              |

---

## 🧠 5. Exam Tips

| Concept             | Key Point                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------- |
| **Shield Standard** | Enabled automatically for all AWS accounts.                                               |
| **Shield Advanced** | Optional, $3,000/month; includes DRT support and cost protection.                         |
| **WAF**             | Works at Layer 7; supports custom filtering rules.                                        |
| **Combination**     | Use **Shield + WAF + CloudFront + Route 53 + Auto Scaling** for complete DDoS resilience. |

---

## ✅ Summary

AWS provides a **multi-layered defense** approach:

1. **Shield Standard** – baseline protection (free).
2. **Shield Advanced** – enterprise-grade DDoS defense.
3. **WAF** – customizable rules for web exploits.
4. **CloudFront & Route 53** – global edge mitigation.
5. **Auto Scaling** – elasticity during high traffic.

Together, these services **ensure uptime, performance, and resilience** against even large-scale DDoS attacks.

---
