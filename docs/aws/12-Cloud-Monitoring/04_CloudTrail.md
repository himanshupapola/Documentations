---
title: 04. AWS CloudTrail
sidebar_label: A4. AWS CloudTrail
sidebar_position: 4
---

# 04. AWS CloudTrail

**AWS CloudTrail** provides **governance, compliance, and auditing** for your AWS accounts. It records **all API calls and events** made across your AWS environment.

---


| Feature                   | Description                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------ |
| **Enabled by default**    | CloudTrail automatically records all API calls and activities.                       |
| **Tracks all interfaces** | Console, SDK, CLI, and service-to-service API calls are logged.                      |
| **Event history**         | Provides a complete history of AWS API calls for audit and troubleshooting.          |
| **Centralized logging**   | Logs can be sent to **Amazon S3** or **CloudWatch Logs** for storage and monitoring. |
| **Multi-region trails**   | Trails can be configured to capture events across all AWS regions.                   |
| **Audit & compliance**    | Helps identify _who did what_, _from where_, and _when_.                             |

---
#### Example Use Case

> 🔍 A user accidentally deleted an S3 bucket.  
> You can use **CloudTrail** to find **who deleted it**, **when**, and **from where** the API call was made.

---
### Integration Options

| Destination         | Purpose                               |
| ------------------- | ------------------------------------- |
| **Amazon S3**       | Long-term log storage and compliance. |
| **CloudWatch Logs** | Real-time monitoring and alerting.    |

---

## Summary

- CloudTrail records **API activity** across AWS accounts.
- Use it to **audit**, **monitor**, and **analyze** actions taken by users and services.
- Trails can log to **S3** or **CloudWatch Logs** for retention and insights.
- CloudTrail Insight give automated analysis of all your CloudTrail events.

📘 **Best Practice:**  
Create a **multi-region trail** and store logs in **S3** with **encryption + lifecycle policies** for secure, long-term auditing.
