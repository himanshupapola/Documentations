---
title: 04. AWS IAM Identity Center
sidebar_label: A04. AWS IAM Identity Center
sidebar_position: 4
---

# 04. AWS IAM Identity Center (Successor to AWS Single Sign-On)

AWS **IAM Identity Center** (formerly **AWS Single Sign-On**) provides a **centralized access management** solution that enables users to sign in **once** and access:

- Multiple **AWS accounts** in an AWS Organization
- **Business cloud applications** (e.g., Salesforce, Box)
- **SAML 2.0–enabled applications**
- **EC2 Windows instances**

| Feature                         | Description                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| **Single Sign-On (SSO)**        | One login provides access to multiple AWS accounts and applications.                 |
| **Centralized User Management** | Manage users and their permissions in one place instead of per account.              |
| **Access Portal**               | Users log in via a single portal URL to access their assigned AWS accounts and apps. |
| **Permission Sets**             | Define and apply permission sets to control user access levels across accounts.      |
| **Session Federation**          | Works with external identity providers to federate authentication.                   |

## 🧱 Identity Sources

| Source Type                          | Description                                                                             |
| ------------------------------------ | --------------------------------------------------------------------------------------- |
| **Built-in Identity Store**          | Store and manage users directly in IAM Identity Center.                                 |
| **External Identity Provider (IdP)** | Integrate with Microsoft Active Directory, Okta, OneLogin, or other SAML 2.0 providers. |

## 🧭 Exam Tip

Whenever a question mentions:

- **One login across multiple AWS accounts**, or
- **Centralized access for AWS accounts and business applications**,

➡️ The correct answer is **AWS IAM Identity Center**.

## 🔐 Example Scenario

1. A user logs in once to the **IAM Identity Center portal** using their credentials.
2. They see a list of AWS accounts they can access.
3. By clicking **Management Console** for any account, they are signed in automatically — no additional passwords required.

This eliminates the need to manage separate IAM users in each AWS account.

## 🧠 Summary

| Concept           | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| **Purpose**       | Centralized login and access management for multiple AWS accounts and apps. |
| **Replaces**      | AWS Single Sign-On (SSO).                                                   |
| **Supports**      | AWS Organizations, AD, SAML 2.0, and external IdPs.                         |
| **Portal Access** | One URL → all authorized resources.                                         |

📘 **In short:**  
**AWS IAM Identity Center = One login, centralized user + access management, across AWS and third-party apps.**
