---
title: 01. AWS STS
sidebar_label: A01. AWS STS
sidebar_position: 1
---

# 🛡️ AWS Security Token Service (STS)

**AWS Security Token Service (STS)** enables you to create **temporary, limited-privilege credentials** to access AWS resources.

These credentials are short-lived and are used instead of long-term access keys for enhanced security.

Temporary credentials include:

- **Access Key ID**
- **Secret Access Key**
- **Session Token**

---

## 🧭 How It Works

1. A user or service **requests temporary credentials** (e.g., using `AssumeRole`).
2. **STS validates** the request and issues **temporary credentials**.
3. These credentials are used to **access AWS resources**.
4. Once expired, new credentials must be generated.

---

## 🧰 Common Use Cases

| Use Case                | Description                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| **IAM Role Assumption** | Allows a user, service, or application to assume a role and gain temporary access (same or cross-account).    |
| **Identity Federation** | Enables external identities (e.g., from Active Directory, Google, or SAML providers) to access AWS resources. |
| **EC2 Instance Roles**  | Automatically provides temporary credentials to EC2 instances through STS, refreshed in the background.       |

| Feature                  | Description                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------- |
| **Temporary Duration**   | Credentials are valid for a limited time (from minutes to hours).                  |
| **Automatic Rotation**   | For EC2, Lambda, and other services, STS handles credential refresh automatically. |
| **Fine-Grained Access**  | Temporary credentials inherit permissions from the IAM role assumed.               |
| **Cross-Account Access** | Simplifies granting access between AWS accounts.                                   |

---

## 🧩 Important STS API Calls

| API Call                    | Description                                                                |
| --------------------------- | -------------------------------------------------------------------------- |
| `AssumeRole`                | Grants temporary credentials to assume a specified IAM role.               |
| `GetSessionToken`           | Provides temporary credentials for an IAM user.                            |
| `AssumeRoleWithSAML`        | Used with SAML 2.0 for identity federation.                                |
| `AssumeRoleWithWebIdentity` | Used with web identity providers like Google, Facebook, or Amazon Cognito. |

---

## 🧠 Example Scenario

A user in Account A needs access to an S3 bucket in Account B:

1. The user calls **STS `AssumeRole`** for a role defined in Account B.
2. STS returns **temporary credentials**.
3. The user uses these credentials to access the S3 bucket within the allowed time window.

## 🧩 Exam Tip

> Any question mentioning **temporary, limited-privilege credentials** or **cross-account access** points to **AWS STS**.

## ✅ Summary Table

| Concept                   | Description                                      |
| ------------------------- | ------------------------------------------------ |
| **Service Name**          | AWS Security Token Service (STS)                 |
| **Purpose**               | Generate temporary credentials for secure access |
| **Credential Components** | Access Key ID, Secret Access Key, Session Token  |
| **Used With**             | IAM roles, Federation, EC2 Instance Roles        |
| **Security Benefit**      | No need to use or store long-term credentials    |

---
