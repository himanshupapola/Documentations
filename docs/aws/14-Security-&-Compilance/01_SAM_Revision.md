---
title: 01. AWS SAM
sidebar_label: A1. AWS SAM
sidebar_position: 1
---

# 🛡️ 01. AWS Shared Responsibility Model

The **AWS Shared Responsibility Model** defines how **security and compliance duties** are divided between **AWS (Security _of_ the Cloud)** and **customers (Security _in_ the Cloud)**.

---

### 1. AWS Responsibility — Security **of** the Cloud

AWS is responsible for protecting the infrastructure that runs all AWS services, including:

- ✅ Hardware, software, networking, and facilities
- ✅ Managed services (e.g., **S3**, **RDS**, **DynamoDB**, **Lambda**)
- ✅ Physical security and environmental controls
- ✅ Patching and maintenance of managed service environments

---

### 2. Customer Responsibility — Security **in** the Cloud

Customers are responsible for securing their data and configurations within AWS services:

- 🔒 Managing **IAM users, roles, and permissions**
- 🧱 Configuring **firewalls and network settings** (e.g., Security Groups, NACLs)
- 🖥️ Managing **guest operating systems** (for EC2)
- 🔑 Applying **encryption** to application data
- ⚙️ Ensuring **secure configurations** and patching responsibilities at the OS/application layer

---

### 3. Shared Controls

Some responsibilities are shared between AWS and the customer:
| Shared Control | AWS Responsibility | Customer Responsibility |
|----------------|--------------------|--------------------------|
| **Patch Management** | Patching infrastructure | Patching guest OS/applications |
| **Configuration Management** | Maintaining AWS-managed services | Configuring your resources securely |
| **Awareness & Training** | Training AWS employees | Training your own personnel |

---

### 4. Example: Amazon RDS

| Responsibility                | AWS                                 | Customer                          |
| ----------------------------- | ----------------------------------- | --------------------------------- |
| **Infrastructure Management** | Manage EC2 hosting RDS, disable SSH | N/A                               |
| **Patching**                  | Automated OS & DB patching          | Manage in-database settings       |
| **Security Groups**           | N/A                                 | Configure inbound rules and ports |
| **Database Access**           | N/A                                 | Manage DB users and permissions   |
| **Encryption & SSL**          | Provide encryption options          | Enable encryption & enforce SSL   |

---

### 5. Example: Amazon S3

| Responsibility         | AWS                                   | Customer                             |
| ---------------------- | ------------------------------------- | ------------------------------------ |
| **Storage Management** | Guarantee unlimited, reliable storage | N/A                                  |
| **Data Separation**    | Prevent cross-tenant access           | N/A                                  |
| **Encryption**         | Provide encryption capabilities       | Enable encryption at rest/in transit |
| **Access Control**     | N/A                                   | Manage bucket policies and IAM roles |
| **Public Access**      | N/A                                   | Configure bucket privacy settings    |

---

## Summary

| Layer                            | AWS Responsibility | Customer Responsibility |
| -------------------------------- | ------------------ | ----------------------- |
| Physical / Infrastructure        | ✅                 | ❌                      |
| Network / Hypervisor             | ✅                 | ❌                      |
| Operating System                 | ❌                 | ✅ (for EC2)            |
| Applications & Data              | ❌                 | ✅                      |
| Managed Services (e.g., RDS, S3) | Shared             | Shared                  |
