---
title: 09. IAM Access Analyzer
sidebar_label: A9. IAM Access Analyzer
sidebar_position: 9
---

# 🧩 09. IAM Access Analyzer

**IAM Access Analyzer** is a security feature that helps you **identify AWS resources shared outside your account or organization** — ensuring that only trusted entities have access to your data.

---

### 🧠 What It Does

| Feature                        | Description                                                                                                                             |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Resource Sharing Detection** | Analyzes resource policies to find resources accessible from outside your defined **Zone of Trust**.                                    |
| **Supported Resources**        | Works with **S3 Buckets**, **IAM Roles**, **KMS Keys**, **Lambda Functions & Layers**, **SQS Queues**, and **Secrets Manager Secrets**. |
| **Findings Generation**        | Generates findings whenever a resource is accessible to **external accounts**, **public users**, or **other AWS organizations**.        |
| **Continuous Monitoring**      | Automatically scans and updates findings as configurations change.                                                                      |
| **Policy Validation**          | Helps you validate IAM and resource policies against best practices to reduce overly permissive access.                                 |

---

### 🧭 Zone of Trust

| Term                      | Description                                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Zone of Trust**         | The trusted boundary you define — typically your **AWS Account** or **AWS Organization**.                      |
| **Outside Zone of Trust** | Any principal (user, role, service, or account) outside this boundary triggers an **Access Analyzer finding**. |

<div align="center">
  <img
    src="/img/aws/14/image_08.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

---

## 🧩 Example Findings

| Example                                     | Description                                          |
| ------------------------------------------- | ---------------------------------------------------- |
| 🔓 S3 bucket allows public access           | The bucket policy permits access from `Principal: *` |
| 🔄 IAM role shared with another AWS account | Role trust policy allows external principal          |
| 🔑 KMS key shared externally                | Key policy allows use by another AWS account         |

---

## ⚙️ Integration & Actions

- View and manage findings in the **IAM Console** or via the **AWS CLI/API**.
- Integrates with **AWS Security Hub** for centralized monitoring.
- Supports **automated remediation** using EventBridge and Lambda.

---

**In short:**  
🧩 _IAM Access Analyzer continuously scans your AWS environment to detect and alert you when resources are shared outside your trusted boundaries — helping you maintain least-privilege access and stronger security control._
