---
title: 02. AWS Consolidated Billing
sidebar_label: A02. AWS Consolidated Billing
sidebar_position: 2
---

# 02. AWS Organizations — Consolidated Billing

Consolidated Billing in **AWS Organizations** allows you to **combine the billing and usage** of multiple AWS accounts under one organization.

| Feature            | Description                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------- |
| **One Bill**       | Receive a single bill for all accounts in your organization.                                |
| **Combined Usage** | Pool the usage of all member accounts to access **volume discounts** and **savings plans**. |

---

### **➡️ Combined Usage and Volume Discounts**

When multiple accounts share resources under Consolidated Billing:

- AWS aggregates the total usage across accounts.
- This aggregation helps unlock **tiered pricing discounts** (e.g., S3, EC2, data transfer).

| Scenario                          | Description                                               |
| --------------------------------- | --------------------------------------------------------- |
| Each account uses 1 TB of S3 data | 6 accounts = 6 TB total                                   |
| AWS applies volume pricing        | Discounts apply starting from 5 TB → all accounts benefit |

---

### **➡️ Reserved Instances (RI) and Savings Plans Sharing**

Reserved Instances (RI) and Savings Plans purchased by **one account** can be **shared** across all accounts in the organization.

### Example:

Let's say we have 5 RI in account B.

| Account | Reserved Instances | EC2 Instances Launched |
| ------- | ------------------ | ---------------------- |
| A       | 0                  | 6(2 RI Benfit)         |
| B       | 5                  | 3                      |

**Result:**

- Total 9 EC2 instances (5 RIs available)
- All 5 RIs apply at the **organization level**
  - 3 instances in Account B use RIs
  - 2 instances in Account A benefit from remaining RIs
- 4 instances (unreserved) billed at On-Demand rates

---

### **➡️ Notes & Exam Tips**

- **RI & Savings Plan sharing** is **enabled by default**.
- You can **disable RI/Savings Plan sharing** for any member account (including the management account).
- **Shared Volume Pricing** and **Shared RI discounts** are **commonly tested** on AWS exams.

---

## Summary

| Feature                     | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| **Combined Usage**          | Aggregate usage across all accounts for better pricing tiers.   |
| **RI/Savings Plan Sharing** | Share cost benefits of Reserved capacity organization-wide.     |
| **Single Invoice**          | Simplifies financial management for large multi-account setups. |
| **Optional Control**        | RI sharing can be disabled per account if needed.               |
