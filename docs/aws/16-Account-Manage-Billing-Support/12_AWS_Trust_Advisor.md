---
title: 12. AWS Trusted Advisor
sidebar_label: A12. AWS Trusted Advisor
sidebar_position: 12
---

# 🛡️ AWS Trusted Advisor Overview

AWS Trusted Advisor is a service that provides **real-time account assessments** to help you follow AWS best practices for **cost optimization**, **performance**, **security**, **fault tolerance**, **service limits**, and **operational excellence**.

---

## 📘 1. What is AWS Trusted Advisor?

Trusted Advisor continuously checks your AWS environment and gives **recommendations** to help you:

- **Reduce costs**
- **Improve performance**
- **Enhance security**
- **Increase fault tolerance**
- **Monitor service limits**

You can access it directly from the **AWS Management Console** or programmatically via the **AWS Support API** (available with Business or Enterprise Support Plans).

---

## 🧩 2. Categories of Checks

| Category                   | Description                                   | Example Checks                               |
| -------------------------- | --------------------------------------------- | -------------------------------------------- |
| **Cost Optimization**      | Identify unused or underutilized resources    | Idle EC2 Instances, Unassociated Elastic IPs |
| **Performance**            | Improve the speed and efficiency of workloads | EC2 Instance Type Recommendations            |
| **Security**               | Detect security risks and public resources    | S3 Public Buckets, RDS Public Snapshots      |
| **Fault Tolerance**        | Enhance system availability and resilience    | EBS Snapshot Age, AZ Redundancy              |
| **Service Limits**         | Monitor AWS resource quotas                   | EC2 Instance Limits, DynamoDB Capacity       |
| **Operational Excellence** | Improve operational readiness                 | IAM Role Best Practices, Monitoring Checks   |

---

## 🔐 3. Types of Trusted Advisor Checks

| Type            | Access Level                     | Description                                     |
| --------------- | -------------------------------- | ----------------------------------------------- |
| **Core Checks** | ✅ Free (all AWS accounts)       | Basic security and service limit checks         |
| **Full Checks** | 🔒 Business / Enterprise Support | 100+ comprehensive checks across all categories |

---

## ⚙️ 4. Example Dashboard Insights

When you open **Trusted Advisor** in the console, you’ll see:

- ✅ **Recommendations** (e.g., reduce cost or improve security)
- ⚠️ **Investigations** (items requiring attention)
- 🚫 **Excluded items** (ignored checks)

Example findings:

- S3 bucket with global public access
- Security group rules allowing unrestricted inbound access
- EBS or RDS snapshots shared publicly

---

## 🔗 5. Integration and Programmatic Access

- With **Business** or **Enterprise** Support Plans, you can access **Trusted Advisor data through the AWS Support API**.
- This allows **automation** of compliance reporting and remediation workflows.

---

## 🧠 6. Key Points for AWS Exam

| Topic            | Key Detail                                                                                            |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| **Purpose**      | Assess AWS account health and best practices                                                          |
| **Free vs Paid** | Core checks (free) / Full checks (paid)                                                               |
| **Categories**   | 6 main pillars (Cost, Performance, Security, Fault Tolerance, Service Limits, Operational Excellence) |
| **API Access**   | Only for Business/Enterprise support                                                                  |
| **Exam Tip**     | Trusted Advisor = _automated account assessment tool_                                                 |

---

## 🖼️ 7. Console View (Example Screenshot)

> **AWS Console → Trusted Advisor**
>
<!-- > ![Trusted Advisor Dashboard Placeholder](images/aws-trusted-advisor-dashboard.png) -->
>
> Shows recommendations, investigations, and service limit summaries.

---

## ✅ 8. Summary

AWS Trusted Advisor helps maintain a **secure**, **optimized**, and **compliant** cloud environment.  
To unlock full functionality, upgrade to a **Business** or **Enterprise** Support Plan.

---

**Next Step:** Explore [AWS Trusted Advisor Documentation](https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html)
