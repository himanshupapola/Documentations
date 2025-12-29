---
title: 07. AWS Health Dashboard
sidebar_label: A7. AWS Health Dashboard
sidebar_position: 7
---

# 07. AWS Health Dashboard Overview

**AWS Health Dashboard** provides visibility into the health of AWS services and resources.  
It has two main parts:

| Dashboard Type               | Description                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Service Health Dashboard** | Shows the **status and historical health** of all AWS services **across all regions**.                                         |
| **Account Health Dashboard** | Displays **personalized alerts and guidance** for **your AWS account**. Formerly called _AWS Personal Health Dashboard (PHD)_. |

## 🧩 1. Service Health Dashboard

- Provides a **global view** of AWS service health.
- Shows **current and historical** service status (per day and per region).
- Includes an **RSS feed** for real-time updates.
- Helps track **outages and maintenance events** affecting any region or service.

📍 **Example:**  
View if _Amazon S3 in us-east-1_ experienced downtime yesterday.

## 🧩 2. Account Health Dashboard (Your Accounts)

- Displays **events that directly impact your AWS resources**.
- Provides:
  - **Alerts** for service issues.
  - **Remediation guidance**.
  - **Proactive notifications** for **scheduled maintenance**.
- Can **aggregate health data** across your **entire AWS Organization**.
- Accessible via the **AWS Console** (click the bell 🔔 icon in the top-right corner).

📍 **Example:**  
If there’s an _EC2 instance issue in us-east-2_ affecting your environment, it will appear here.

## 🌍 Global Service

- **Global in scope** — available to all AWS users.
- Shows **outages and maintenance events** that **impact you directly**.
- Includes an **Event Log** for reviewing past issues and actions.

---

## 🧾 Summary Table

| Feature   | Service Health Dashboard     | Account Health Dashboard            |
| --------- | ---------------------------- | ----------------------------------- |
| Scope     | Global (all AWS services)    | Account-specific                    |
| Purpose   | General AWS service status   | Personalized alerts & events        |
| Data Type | Historical & current         | Real-time, resource-specific        |
| Access    | Public dashboard             | AWS Console (🔔 icon)               |
| Old Name  | AWS Service Health Dashboard | AWS Personal Health Dashboard (PHD) |

---

📘 **In short:**

- **Service Health Dashboard** → “How AWS services are doing globally.”
- **Account Health Dashboard** → “How AWS issues affect _you_ personally.”
