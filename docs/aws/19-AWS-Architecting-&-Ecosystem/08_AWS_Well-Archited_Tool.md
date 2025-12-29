---
title: AWS Well-Architected Tool
sidebar_label: A08. AWS Well-Architected Tool
sidebar_position: 8
---

## AWS Well-Architected Tool

The **AWS Well-Architected Tool (WAT)** helps you **review and improve your cloud workloads** based on the **six pillars** of the **AWS Well-Architected Framework**:  
**Operational Excellence**, **Security**, **Reliability**, **Performance Efficiency**, **Cost Optimization**, and **Sustainability**.

It guides you through structured questions, identifies potential **risks**, and provides **actionable recommendations** to align your architecture with AWS best practices.

---

### How It Works

| Step                       | Description                                                                                                                                                                                                                       |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Define Workload**     | Create a new workload in the console. Provide details like workload name, description, owner email, environment (e.g., production), region, and account IDs.                                                                      |
| **2. Apply a Lens**        | Choose one or more lenses to evaluate your workload — such as: • **AWS Well-Architected Framework Lens** • **Serverless Lens** • **SaaS Lens** • **FTR (Foundational Technical Review) Lens** • Or even create a **Custom Lens**. |
| **3. Answer Questions**    | For each pillar, answer detailed questions about your workload design and operations. Mark what applies, what doesn’t, and justify exceptions if needed.                                                                          |
| **4. Review Results**      | After answering, AWS evaluates your workload across the six pillars and highlights **High**, **Medium**, and **Low Risks**.                                                                                                       |
| **5. Get Recommendations** | The tool generates an **Improvement Plan** with **documentation links**, **videos**, and **guidance** on how to fix high-risk areas.                                                                                              |
| **6. Save Milestones**     | Save your review as a **milestone** (e.g., “Initial Review”) to track improvements over time.                                                                                                                                     |

---

### Example Workflow in Console

1. Navigate to **AWS Console → Well-Architected Tool**
2. Click **Define Workload**
3. Fill out workload metadata (name, owner, environment, etc.)
4. Select the **Well-Architected Framework Lens**
5. Start answering pillar-based questions
6. Review identified **risks**
7. Click **Improvement Plan** to view actionable recommendations
8. Save your **milestone** and re-run reviews periodically

---

### Benefits

| Benefit                    | Description                                                                         |
| -------------------------- | ----------------------------------------------------------------------------------- |
| **Structured Reviews**     | Ensures your architecture is evaluated against AWS best practices.                  |
| **Actionable Insights**    | Provides improvement items linked directly to AWS documentation.                    |
| **Risk Awareness**         | Identifies and categorizes architectural risks (High, Medium, Low).                 |
| **Continuous Improvement** | Enables teams to compare progress across milestones and reviews.                    |
| **Collaboration**          | Teams can share workloads, assign review owners, and work jointly on optimizations. |

---

### Summary

| Key Aspect      | Description                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Purpose**     | To evaluate and improve workload design against the Well-Architected Framework.                                                |
| **Focus Areas** | The six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. |
| **Output**      | Detailed risk report and improvement plan with direct AWS guidance.                                                            |
| **Use Case**    | Ideal for solution architects and DevOps teams maintaining production-grade workloads.                                         |

---

### 🔗 Recommendation

Explore the tool at **[AWS Well-Architected Tool Console](https://console.aws.amazon.com/wellarchitected/)**  
and read the **[AWS Well-Architected Framework Whitepaper](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)** for in-depth guidance.

---
