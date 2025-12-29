---
title: 03. AWS Directory Service
sidebar_label: A03. AWS Directory Service
sidebar_position: 3
---

# 🧑‍💼 03. Microsoft Active Directory & AWS Directory Service

**Microsoft Active Directory (AD)** is a **centralized directory service** used in Windows environments to manage **users, computers, printers, file shares, and security groups**.

It provides **centralized authentication and authorization**, allowing users to sign in once and access multiple systems and resources across an organization.

## 🧭 How It Works (On-Premises)

1. **Active Directory Domain Services (AD DS)** runs on a Windows Server acting as a **Domain Controller (DC)**.
2. User accounts, passwords, and permissions are stored centrally in the **AD database**.
3. When a user logs into a computer joined to the domain, the **Domain Controller** authenticates the credentials.
4. This allows **single sign-on (SSO)** across corporate systems.

🖥️ Example:  
If John logs into his company laptop connected to the corporate network, AD verifies his username and password.  
He can then access company printers, file shares, and other devices — all managed via AD.

## ☁️ Extending AD to AWS

AWS provides **Directory Service** to integrate or host Active Directory within the AWS Cloud.  
This helps organizations extend their existing identity systems into AWS.

## 🧩 AWS Directory Service Options

| Service                      | Description                                                                                   | Key Features                                                                                                            |
| ---------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **AWS Managed Microsoft AD** | A **fully managed Active Directory** hosted on AWS.                                           | - Create your own AD domain in AWS- Supports MFA- Can **establish trust** with on-premises AD for hybrid setups |
| **AD Connector**             | A **proxy** that connects AWS services to your existing **on-premises AD**.                   | - No data stored in AWS- Requests are **redirected** to on-prem AD- Supports MFA                                |
| **Simple AD**                | A **standalone, AWS-managed directory** compatible with Microsoft AD (but not full-featured). | - Basic AD functionality- **Cannot** join with on-prem AD- Ideal for small-scale or isolated environments       |

## 🔒 Use Cases

| Use Case                                                        | Recommended Option           |
| --------------------------------------------------------------- | ---------------------------- |
| You want to run a managed Active Directory entirely in AWS      | **AWS Managed Microsoft AD** |
| You have on-premises AD and want to use it for AWS resources    | **AD Connector**             |
| You need lightweight directory capabilities without integration | **Simple AD**                |

## 🧠 Example Scenario

A company has an on-premises Active Directory for employee logins.  
They deploy applications in AWS and want employees to use the same credentials.  
➡️ They set up an **AD Connector** to link AWS resources to their existing on-prem AD.  
Employees can now sign in to AWS-based applications using their usual corporate login.

## 🧩 Exam Tip

> When you see “Active Directory,” “Windows authentication,” or “corporate logins” in an AWS question,  
> the correct AWS service is **AWS Directory Service**.

## ✅ Summary Table

| Concept              | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| **Base Technology**  | Microsoft Active Directory                                          |
| **AWS Service Name** | AWS Directory Service                                               |
| **Purpose**          | Extend or host Active Directory in AWS                              |
| **Key Options**      | Managed Microsoft AD, AD Connector, Simple AD                       |
| **Integration**      | Works with on-premises AD for hybrid identity                       |
| **Exam Focus**       | Know that “Directory Service” relates to Microsoft Active Directory |

---
