---
title: 02. Amazon S3 Security
sidebar_label: A2. Amazon S3 Security
sidebar_position: 2
---

# 02. Amazon S3 Security

Amazon S3 (Simple Storage Service) provides multiple layers of **security and access control** to protect your data.  
Security in S3 can be broadly classified into:

1. **User-Based Security (IAM Policies)**
2. **Resource-Based Security (Bucket Policies, ACLs)**
3. **Encryption**
4. **Public Access Settings**

---

## 👤 01. User-Based Security

| **Component**    | **Description**                                                                  |
| ---------------- | -------------------------------------------------------------------------------- |
| **IAM Policies** | Define **which API calls** are allowed for specific IAM users, groups, or roles. |
| **Attached To**  | IAM users, groups, or roles.                                                     |
| **Use Case**     | Allow/deny users within the same AWS account to access S3.                       |

Example:

- Grant an IAM user permission to `s3:ListBucket` and `s3:GetObject`.

---
## 🧱 02. Resource-Based Security

### 🔹 a. Bucket Policies

- JSON-based policies applied **directly to S3 buckets**.
- Allow **cross-account access**.
- Define permissions at the **bucket or object** level.

| **Element**   | **Description**                                      |
| ------------- | ---------------------------------------------------- |
| **Effect**    | Allow / Deny                                         |
| **Principal** | The AWS account, user, or role the policy applies to |
| **Action**    | API actions (`s3:GetObject`, `s3:PutObject`, etc.)   |
| **Resource**  | ARN of bucket or objects                             |

#### 🧾 Example: Public Read Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::examplebucket/*"]
    }
  ]
}
```

✅ **Use Cases:**

- Grant **public access** to bucket.
- **Force encryption** on uploaded objects.
- Allow **cross-account access**.

---

### 🔹 b. Access Control Lists (ACLs)

| **Type**       | **Purpose**                               | **Notes**                       |
| -------------- | ----------------------------------------- | ------------------------------- |
| **Object ACL** | Fine-grained access to individual objects | Can be disabled                 |
| **Bucket ACL** | Access control at the bucket level        | Less common and can be disabled |

---
### 🔐 Access Evaluation Logic

An IAM principal can access an S3 object **if:**

```
(IAM permissions allow it) OR (Resource policy allows it)
AND
(No explicit DENY exists)
```

---
### 🗝️ Encryption

Encrypt data stored in S3 using **encryption keys**.

| **Type**                   | **Description**                                    |
| -------------------------- | -------------------------------------------------- |
| **SSE-S3**                 | Server-side encryption with S3-managed keys        |
| **SSE-KMS**                | Server-side encryption with AWS KMS-managed keys   |
| **SSE-C**                  | Server-side encryption with customer-provided keys |
| **Client-Side Encryption** | Data encrypted by client before upload             |

---

## 🚫 Block Public Access Settings

AWS provides **Block Public Access** at:

- **Bucket level**
- **Account level**

✅ **Purpose:**

- Prevent accidental data exposure.
- Overrides public Bucket Policies or ACLs.

> Even if a bucket policy allows public access,  
> **if Block Public Access is enabled — bucket stays private.**

---
## 🔄 Access Scenarios

| **Scenario**             | **Mechanism Used** | **Description**                               |
| ------------------------ | ------------------ | --------------------------------------------- |
| IAM user in same account | IAM Policy         | User granted permissions via IAM console      |
| EC2 instance access      | IAM Role           | Role with S3 permissions attached to instance |
| Public website           | Bucket Policy      | Allow `Principal: *` with `s3:GetObject`      |
| Cross-account user       | Bucket Policy      | Allow another AWS account’s IAM principal     |

---

## 🧠 Summary

| **Security Type**   | **Control Location** | **Common Use Case**            |
| ------------------- | -------------------- | ------------------------------ |
| IAM Policy          | User / Role          | Internal account access        |
| Bucket Policy       | S3 Bucket            | Cross-account or public access |
| ACL                 | Object / Bucket      | Legacy, fine-grained control   |
| Encryption          | S3 or Client         | Data protection at rest        |
| Block Public Access | Account / Bucket     | Prevent data leaks             |

📍**Key Takeaways:**

- Prefer **Bucket Policies** over ACLs.
- Use **Block Public Access** for safety.
- Combine **IAM policies** + **resource policies** for flexible access control.
- Enable **encryption** for sensitive data.
