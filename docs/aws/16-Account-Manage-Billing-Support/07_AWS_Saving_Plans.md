---
title: 07. AWS Savings Plans
sidebar_label: A07. AWS Savings Plans
sidebar_position: 7
---

# 07. AWS Savings Plans

AWS **Savings Plans** offer a flexible way to save on AWS compute usage by committing to a **specific spend ($/hour)** for **1 or 3 years**, instead of committing to specific instance types.

You receive discounts compared to **On-Demand** pricing while maintaining flexibility in how you use AWS compute resources.

| Plan Type                   | Max Discount  | Flexibility | Applies To                                     |
| --------------------------- | ------------- | ----------- | ---------------------------------------------- |
| EC2 Instance Savings Plan   | Up to **72%** | Limited     | Commit To EC2 instances (same family & region) |
| Compute Savings Plan        | Up to **66%** | High        | EC2, Fargate, Lambda(Not limited by family)    |
| SageMaker (ML) Savings Plan | ~28%          | Moderate    | SageMaker Notebooks, Training, Endpoints       |

---

### How It Works

- Commit to a **$ amount per hour** (e.g., `$10/hour`) for a **1-year or 3-year** term.
- Choose **payment options**:
  - **All Upfront** → Highest discount
  - **Partial Upfront** → Medium discount
  - **No Upfront** → Lowest discount
- AWS automatically applies the discount to your **eligible compute usage**.

## Types of Savings Plans

### A. EC2 Instance Savings Plan

- Up to **72%** discount.
- Commitment applies to **specific instance families** (e.g., `C5`) in a **specific region**.
- Covers:
  - Any **size** within the family (`c5.large`, `c5.xlarge`, etc.)
  - Any **Availability Zone**
  - Any **OS** (Linux, Windows)
  - Any **tenancy** (Shared, Dedicated)

---

### B. Compute Savings Plan

- Up to **66%** discount.
- **Most flexible option** — no instance family or region restrictions.
- Applies to:
  - **EC2** (any type, region, OS, tenancy)
  - **AWS Fargate**
  - **AWS Lambda**
- Ideal if you want to move workloads across services or regions.

---

### C. SageMaker (Machine Learning) Savings Plan

- Applies to **Amazon SageMaker** workloads.
- Includes **Notebook instances**, **Training**, and **Endpoints**.
- Discounts vary (~28%) depending on usage and term.
- Works similarly to Compute Plans — commit to a spend per hour.

## How to Purchase a Savings Plan

1. Go to **AWS Management Console → Cost Explorer → Savings Plans**
2. Select **Plan Type**:
   - Compute
   - EC2 Instance
   - SageMaker
3. Choose:
   - **Term length:** 1 year or 3 years
   - **Payment option:** All / Partial / No Upfront
   - **Hourly commitment:** e.g., `$500/hour`
4. Review estimated:
   - Upfront cost
   - Monthly payments
   - Total cost over term
5. Click **Add to Cart** → **Purchase**.

## 5. Example Estimations

- `a1.large` instance → **31%** discount over On-Demand (via Compute Savings Plan)
- `ml.t3.large` Notebook (SageMaker) → **28%** discount

---

## 6. Best Practices

✅ Use **Compute Savings Plan** for flexibility (EC2, Fargate, Lambda).  
✅ Use **EC2 Instance Savings Plan** for predictable, static EC2 workloads.  
✅ Use **SageMaker Savings Plan** for consistent ML workloads.  
✅ Use **AWS Cost Explorer** recommendations before purchasing.  
✅ Combine with **Cost Anomaly Detection** or **Budgets** for tracking savings.
