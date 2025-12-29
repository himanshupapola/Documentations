---
title: Sustainability in AWS
sidebar_label: A07. Sustainability in AWS
sidebar_position: 7
---

## Pillar 6: Sustainability in AWS

The **Sustainability** pillar is the newest addition to the **AWS Well-Architected Framework**.  
It focuses on **minimizing the environmental impact** of running cloud workloads by improving **energy efficiency**, **resource utilization**, and **shared responsibility** between AWS and its customers.

Environmental impact refer to in terms of energy consumption, carbon emissions, and resource usage.

### Design Principles

| Principle                         | Description                                                                                                                              |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Understand Your Impact**        | Identify and measure the environmental impact of your workloads. Establish sustainability KPIs and track ROI on efficiency improvements. |
| **Maximize Utilization**          | Use resources efficiently to reduce waste and energy consumption.                                                                        |
| **Adopt New, Efficient Hardware** | Migrate to newer AWS instance types (e.g., **Graviton2**) to take advantage of better performance-per-watt.                              |
| **Use Managed Services**          | Shared infrastructure (e.g., **Lambda**, **Fargate**) optimizes energy usage and promotes sustainability at scale.                       |
| **Reduce Downstream Impact**      | Design systems that minimize resource needs for end-users and reduce hardware upgrade frequency.                                         |

---

### Key AWS Services for Sustainability

| Category                           | Example Services                                                                               | Description                                                                               |
| ---------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Compute Efficiency**             | **EC2 Auto Scaling**, **Lambda**, **Fargate**, **Spot Instances**                              | Match compute supply to demand and leverage spare capacity to reduce waste.               |
| **Energy-Efficient Instances**     | **Graviton2 / Graviton3**, **T-series instances**                                              | Use modern, energy-efficient processors for better sustainability and cost-effectiveness. |
| **Storage Optimization**           | **EFS-IA**, **S3 Glacier**, **EBS Cold HDD**                                                   | Store infrequently accessed data in lower-tier, energy-efficient storage classes.         |
| **Data Lifecycle Management**      | **S3 Lifecycle Configurations**, **S3 Intelligent Tiering**, **Amazon Data Lifecycle Manager** | Automatically transition data to the most efficient storage tier.                         |
| **Global & Distributed Databases** | **RDS Read Replicas**, **Aurora Global Database**, **DynamoDB Global Tables**, **CloudFront**  | Optimize data locality to minimize latency, data transfer, and energy consumption.        |

---

### Best Practices

| Practice                         | Benefit                                                                                            |
| -------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Monitor Energy Efficiency**    | Use **Cost Explorer** and sustainability dashboards to track resource usage and energy metrics.    |
| **Optimize Workload Placement**  | Run workloads in **Regions powered by renewable energy** where possible.                           |
| **Right-Size Resources**         | Continuously adjust instance sizes, storage tiers, and database capacities to fit workload demand. |
| **Use Serverless Architectures** | Eliminate idle capacity and achieve higher utilization rates with **Lambda** and **Fargate**.      |

---

### Summary

| Key Takeaway | Description                                                                              |
| ------------ | ---------------------------------------------------------------------------------------- |
| **Goal**     | Reduce environmental impact through efficient design, utilization, and resource sharing. |
| **Focus**    | Energy efficiency, minimal waste, and hardware modernization.                            |
| **Tools**    | Graviton2, Spot Instances, S3 Lifecycle Policies, CloudFront.                            |
| **Mindset**  | Continuously evaluate, improve, and innovate for long-term sustainability.               |

---

### 🌱 Recommendation

Explore the **[AWS Sustainability in the Cloud](https://aws.amazon.com/sustainability/)** resources and the **AWS Well-Architected Framework Whitepaper** to dive deeper into cloud sustainability strategies.

---
