---
title: 02. SRM of AWS
sidebar_label: A2. SRM of AWS
sidebar_position: 2
---


# ⚖️ 02. SRM for Amazon RDS

When using databases on AWS, the **Shared Responsibility Model (SRM)** defines who manages which parts of the system.

- **AWS** manages the **infrastructure, backups, patching, and availability**.
- **You (the customer)** manage **data security, configuration, and optimization**.

AWS provides **Managed Database Services** like **RDS, Aurora, and DynamoDB** to simplify operations — reducing the need for manual tasks such as installation, patching, or backups.

---

### 🧩 Responsibility Breakdown

| **Category** | **AWS Responsibility** | **Customer Responsibility** |
|---------------|------------------------|------------------------------|
| **Infrastructure** | Maintain and secure the underlying hardware, networking, and storage used by RDS. | — |
| **Database Software** | Automatically install patches and updates for the RDS engine (if enabled). | Choose engine type, version, and patch schedule. |
| **Backups & Restore** | Perform automated backups, snapshots, and point-in-time recovery. | Set backup retention (1–35 days) and create manual snapshots. |
| **High Availability (HA)** | Manage replication and failover for Multi-AZ deployments. | Choose whether to enable Multi-AZ or not. |
| **Monitoring** | Provide metrics and logs via Amazon CloudWatch. | Monitor database performance and act on alerts. |
| **Security** | Protect RDS infrastructure and handle encryption at rest (AWS KMS). | Manage IAM access, encryption keys (if customer-managed), and credentials. |

---

###  Simplified SRM for AWS Databases

| **AWS Responsibility** | **Customer Responsibility** |
|--------------------------|------------------------------|
| Infrastructure management | Data security and IAM access controls |
| Automated backups & restore | Data encryption and key management |
| OS & DB patching | Application performance tuning |
| Availability & failover | Monitoring and optimization |

---

### Summary

- AWS manages **hardware, availability, backups, and patching**.  
- You manage **data security, access permissions, and optimization**.  
- This shared model ensures **security, reliability, and operational efficiency** for all AWS-managed database services.

