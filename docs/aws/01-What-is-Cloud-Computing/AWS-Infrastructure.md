---
title: 04 AWS Infrastructure
sidebar_label: A4. AWS Infrastructure
sidebar_position: 4
---

- AWS Regions
- AWS Availability Zones
- AWS Data Centers
- AWS Edge Locations / Points of Presence
--- 
## 🌍 AWS Regions

- AWS has Regions all around the world.
- Each Region is a cluster of data centers.
- Region names look like: us-east-1, eu-west-3, etc.
- Most AWS services are region-scoped, meaning resources stay within that Region.
- Current Oct 2025, there are around 28 regions.

### How to Choose an AWS Region

- Compliance: Keep data within a region as required by law or policy.
- Proximity: Choose a region near your users to reduce latency.
- Services: Not all services/features are in every region.
- Pricing: Varies by region; check AWS Pricing.

![AWS Pricing](/img/aws/01/Image_05.png)

---

## 🏢 AWS Availability Zones (AZs)

- Each AWS Region has multiple Availability Zones (AZs) — usually 3 or more.
- An Availability Zone is one or more data centers with independent power, cooling, and networking.
- AZs within a Region are connected by low-latency, high-speed links.
- Designed to provide fault tolerance — if one AZ fails, others keep running.
- You can deploy applications across multiple AZs for high availability and disaster recovery.

Example:

us-east-1a, us-east-1b, us-east-1c → All belong to US East (N. Virginia) Region.

Regions = geographic locations (e.g., North Virginia)

AZs = isolated data center zones inside a Region

![AWS Pricing](/img/aws/01/Image_06.png)

---

## ⚡ AWS Edge Locations

Edge Locations are data centers that deliver content closer to users.
They speed up content delivery for services like CloudFront.
Reduce latency by caching content near the user’s location.
Amazon has 400+ Points of Presence (400+ Edge Locations & 10+ Regional Caches) in 90+ cities across 40+ countries

---