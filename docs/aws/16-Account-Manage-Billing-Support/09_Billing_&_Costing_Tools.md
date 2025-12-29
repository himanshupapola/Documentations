---
title: 09. AWS Billing & Costing
sidebar_label: A09. AWS Billing & Costing
sidebar_position: 9
---

s

# 🧾 09. AWS Billing & Costing Tools

---

## 1. Estimate Costs

- We have _AWS Pricing Calculator_

| Purpose | Estimate monthly or yearly AWS costs before deployment |
| ------- | ------------------------------------------------------ |
| URL     | [https://calculator.aws](https://calculator.aws)       |

### Steps

- Add AWS services (e.g., EC2, S3, Load Balancer)
- Configure instance type, storage, and pricing model
- Compare On-Demand vs. Savings Plans vs. Reserved Instances
- Create detailed estimates and share reports

🧠 **Tip:**  
Use **AWS Pricing Calculator** to **estimate** cost before deployment — not to track real usage.

---

## 2. Tracking Costs

- We have _Billing Dashboard, Cost Allocation Tags, Cost and Usage Reports, Cost Explorer_

### 🧮 1. Billing Dashboard

| Purpose | Get a **high-level view** of AWS costs and forecasts   |
| ------- | ------------------------------------------------------ |
| Shows   | Month-to-date spend, forecast, service-level breakdown |
| Access  | AWS Console → Billing & Cost Management                |

### 🏷️ 2. Cost Allocation Tags

- Used to track our AWS cost on a detailed level.

- Purpose: Assign metadata (tags) to group and track costs

- Tags are used to organize resources and create Resource group.

- To edit tags got to **Resource group and tag editor**

### Types

- **AWS-generated** tags (e.g., `aws:createdBy`)
- **User-defined** tags (e.g., `user:Department`, `user:Project`)

**Use Cases:** Cost grouping, resource management, reporting

💡 **Tip:** Tags can be managed through the **Tag Editor** and used in **Cost and Usage Reports** or **Budgets**.

### 📊 3. Cost and Usage Report (CUR)

- The AWS Cost & Usage Report contains the most comprehensive set of AWS cost and usage data available, including additional metadata
  about AWS services, pricing, and reservations (e.g., Amazon EC2 Reserved Instances (RIs))

- The AWS Cost & Usage Report lists AWS usage for each service
  category used by an account and its IAM users in hourly or daily line
  items, as well as any tags that you have activated for cost allocation
  purposes.

| Purpose      | Get the **most granular** cost and usage data           |
| ------------ | ------------------------------------------------------- |
| Format       | CSV / Parquet — delivered to an S3 bucket               |
| Includes     | Metadata, pricing, reservations, and tags               |
| Integrations | Analyze via **Athena**, **Redshift**, or **QuickSight** |

🧠 **Exam Tip:**  
CUR provides **hourly or daily-level** detail and is the **most detailed** report for cost analysis.

### 📈 4. AWS Cost Explorer

Purpose: **Visualize**, **analyze** and **manage** costs over time

### Features

- Custom cost/usage reports (daily, monthly, or hourly)
- Filter by service, account, region, or tag
- Forecast spending **up to 12 months ahead**
- Get **Savings Plan recommendations**

🧠 **Exam Tip:**  
Use **Cost Explorer** to **forecast 12-month future usage and costs** — this is an AWS exam favorite question!

---

## 3. Monitor Against Costs Plans

- _Billing Alarms & Budgets_

### ⏰ 1. Billing Alarms (CloudWatch)

| Purpose      | Notify when actual cost crosses a threshold |
| ------------ | ------------------------------------------- |
| Location     | Only available in **us-east-1**             |
| Metric       | Actual billing metric (not forecast)        |
| Notification | Email via Amazon SNS                        |

🧠 **Note:** Billing alarms are **simple** — no filtering or forecasting.

### 💰 2. AWS Budgets

- Create budget and send alarms when costs exceeds the budget

- For Reserved Instances (RI)
  • Track utilization
  • Supports EC2, ElastiCache, RDS, Redshift

| Purpose    | Set cost or usage limits with alerts       |
| ---------- | ------------------------------------------ |
| Types of   | Cost, Usage, Reservation, Savings Plan     |
| Alerts     | Up to **5 SNS notifications** per budget   |
| Filters by | Service, Linked Account, Tag, Region, etc. |
| Frequency  | Daily, Monthly, Quarterly, or Annually     |

| Example | You can create a `$10 monthly budget` with email alerts at 80% actual or forecasted usage. |

🧠 **Exam Tip:**  
**Budgets** support **forecast-based alerts**, unlike Billing Alarms.

---

## 🔍 Summary Table

| Tool                 | Purpose                   | Level of Detail | Forecast       | Integration         |
| -------------------- | ------------------------- | --------------- | -------------- | ------------------- |
| Pricing Calculator   | Estimate before using AWS | N/A             | ✅             | —                   |
| Billing Dashboard    | High-level monthly view   | Basic           | ✅             | —                   |
| Cost Allocation Tags | Organize resources by tag | Medium          | —              | ✅                  |
| Cost & Usage Report  | Deep-dive raw data        | Very High       | —              | ✅                  |
| Cost Explorer        | Graphs & trends           | High            | ✅ (12 months) | ✅                  |
| Billing Alarms       | Basic threshold alerts    | Low             | ❌             | CloudWatch          |
| Budgets              | Custom alerts & limits    | Medium          | ✅             | SNS / Cost Explorer |

---

📘 **Quick Exam Recap**

- **Estimate cost?** → Pricing Calculator
- **High-level monthly view?** → Billing Dashboard
- **Tag-based tracking?** → Cost Allocation Tags
- **Detailed cost data?** → Cost & Usage Report (CUR)
- **Visualize & forecast costs?** → Cost Explorer
- **Threshold alert?** → Billing Alarm
- **Forecast alert?** → AWS Budgets
