---
title: 01. AWS Global Apps
sidebar_label: A1. AWS Global Apps
sidebar_position: 1
---

# 01. Global Applications in AWS

A **Global Application** is deployed across multiple **geographies** (Regions or Edge Locations) to serve users worldwide.

---

### Benefits

- **Decreased Latency**

  - Latency = Time taken for a network packet to reach a server.
  - Deploy apps closer to users (e.g., India users → Asia Region) for faster performance.

- **Disaster Recovery (DR)**

  - If a region fails (earthquake, storms, power outage, politics),  
    failover to another region to maintain uptime.
  - DR plans improve **availability** and **resilience**.

- **Attack Protection**
  - A distributed, multi-region architecture is harder to attack.
  - Increases global application **security and fault tolerance**.

---

### AWS Global Infrastructure

| Component                               | Description                                                                                                |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Regions**                             | Physical locations for deploying applications & infrastructure.                                            |
| **Availability Zones (AZs)**            | Multiple isolated data centers within a Region (high availability).                                        |
| **Edge Locations (Points of Presence)** | Used for content delivery closest to users.                                                                |
| **Global Network**                      | Private AWS network interconnecting regions and AZs via underwater fiber cables for speed and reliability. |

---

### Global Applications in AWS

| Service                      | Purpose                                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Route 53**                 | Global DNS service — routes users to the nearest deployment with least latency; supports DR routing.       |
| **CloudFront**               | Global Content Delivery Network (CDN) — caches and replicates content at Edge Locations to reduce latency. |
| **S3 Transfer Acceleration** | Speeds up global uploads/downloads to Amazon S3.                                                           |
| **AWS Global Accelerator**   | Improves global application availability and performance using AWS global network.                         |

---

### Summary

- Deploy applications **across multiple regions** for performance and reliability.
- Use **Route 53 + CloudFront + Global Accelerator** to improve user experience worldwide.
- Always plan for **Disaster Recovery**.
- Leverage AWS’s **private global network** for high-speed, low-latency global communication.
