---
title: 08. AWS Root User Privileges
sidebar_label: A8. AWS Root User Privileges
sidebar_position: 8
---

# 👑 08. AWS Root User Privileges

The **AWS Root User** is the **original account owner** — created when you first set up your AWS account. It has **unrestricted access** to **all AWS services and resources**.

### ⚠️ Important Security Best Practices

| Best Practice                                | Description                                                                                                                                      |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Lock Away Root Access Keys**               | Delete or securely store the root user’s access keys — they grant full account control.                                                          |
| **Avoid Daily Use**                          | Do **not** use the root account for routine or administrative tasks. Instead, create and use **IAM users** or **roles** with limited privileges. |
| **Enable MFA (Multi-Factor Authentication)** | Protect the root account with MFA to prevent unauthorized access.                                                                                |

## 🔒 Actions Only the Root User Can Perform

| Category                 | Root-Only Action                                                              |
| ------------------------ | ----------------------------------------------------------------------------- |
| **Account Management**   | Change account name, email address, root password, or access keys             |
| **Billing & Tax**        | View certain tax invoices                                                     |
| **Account Lifecycle**    | Close the AWS account                                                         |
| **Permissions Recovery** | Restore IAM user permissions                                                  |
| **Support Management**   | Change or cancel the AWS Support plan                                         |
| **Marketplace Access**   | Register as a seller in the Reserved Instance Marketplace                     |
| **S3 Management**        | Configure an S3 bucket for MFA delete                                         |
| **S3 Policy Fix**        | Edit or delete an S3 bucket policy containing invalid VPC or VPC endpoint IDs |
| **GovCloud Access**      | Sign up for an **AWS GovCloud (US)** account                                  |

## 🧭 Recommended Usage Pattern

| Task Type                             | Recommended Account                       |
| ------------------------------------- | ----------------------------------------- |
| **Daily Operations**                  | IAM Users or Roles                        |
| **Security or Billing Configuration** | Root User (only when absolutely required) |

---

**In short:**  
👑 _The AWS Root User has full control over the account — but it should be protected, rarely used, and secured with MFA to prevent accidental or malicious misuse._
