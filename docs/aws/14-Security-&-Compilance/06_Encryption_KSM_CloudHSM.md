---
title: 06. AWS Encryption
sidebar_label: A6. AWS Encryption
sidebar_position: 6
---

# 06. AWS Encryption Overview

Encryption in AWS protects data from unauthorized access. It ensures confidentiality for data both **at rest** and **in transit**.

AWS provides multiple services and key management options for encryption.

---

## 1. Types of Encryption

| Type                      | Description                                    | Example Use Cases                                                            |
| ------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------- |
| **Encryption at Rest**    | Data stored on a physical device (not moving). | S3 objects, RDS databases, EBS volumes, EFS files.                           |
| **Encryption in Transit** | Data being transferred between locations.      | Uploading files to S3, EC2 DynamoDB communication, VPC On-premises transfer. |

✅ **Best Practice:** Always encrypt data both **at rest** and **in transit**.

---

## 2. Key Encryption Concepts

| Term                 | Meaning                                                               |
| -------------------- | --------------------------------------------------------------------- |
| **Encryption Key**   | A digital key used to lock/unlock (encrypt/decrypt) data.             |
| **Decryption**       | Process of converting encrypted data back to readable form.           |
| **Tamper Resistant** | Hardware or software that prevents unauthorized modification of keys. |

Even if attackers access encrypted data, they cannot read it without the encryption keys.

---

## 3. AWS Key Management Services

### 🔑 **KMS (Key Management Service)**

- Central AWS service for encryption and key management.
- AWS manages the encryption keys and allows you to control who can use them.
- Integrated with most AWS services: **S3, EBS, RDS, EFS, Redshift**, etc.
- Offers **Server-Side Encryption (SSE)** options.

**Examples:**

- Encrypt EBS Volumes using KMS.
- Enable S3 bucket default encryption.
- Encrypt CloudTrail logs automatically.

---

### **CloudHSM (Hardware Security Module)**

- Provides **dedicated encryption hardware** for customers.
- You manage your own keys (AWS cannot access them).
- Compliant with **FIPS 140-2 Level 3** security standard.
- Used for workloads requiring full control of encryption keys.

**Architecture Overview:**

- AWS manages the physical HSM device.
- You connect securely via CloudHSM clients.
- All operations occur within your CloudHSM cluster.

---

## Types of KMS Keys

| Type                            | Description                                                                     | Managed By | Example             |
| ------------------------------- | ------------------------------------------------------------------------------- | ---------- | ------------------- |
| **Customer-Managed Keys (CMK)** | Created and managed by the customer. Supports key rotation and access policies. | You        | `my-app-key`        |
| **AWS-Managed Keys**            | Created and managed by AWS on your behalf.                                      | AWS        | `aws/s3`, `aws/ebs` |
| **AWS-Owned Keys**              | Managed entirely by AWS, used internally across accounts.                       | AWS        | Hidden from user    |
| **CloudHSM Keys**               | Created and managed in your own CloudHSM cluster.                               | You        | Hardware-based keys |

---

## 5. Summary

| Concept                   | Description                                         |
| ------------------------- | --------------------------------------------------- |
| **Encryption at Rest**    | Protects stored data (EBS, S3, RDS).                |
| **Encryption in Transit** | Protects data while moving (TLS/SSL).               |
| **KMS**                   | AWS-managed key service for most encryption needs.  |
| **CloudHSM**              | Dedicated hardware for customer-managed encryption. |

📘 **Remember:**

- Encrypt data both **at rest** and **in transit**.
- Use **KMS** for simplicity and integration.
- Use **CloudHSM** for full control and compliance.
