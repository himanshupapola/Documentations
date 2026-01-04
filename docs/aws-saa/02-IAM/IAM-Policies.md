---
title: 03. IAM Policies
sidebar_label: A3. IAM Policies
sidebar_position: 3
---

# 🧑‍💻 03. IAM Policies

**IAM Policies** define **permissions** for users, groups, and roles in AWS. They determine **what actions** are allowed or denied on **which resources**, under **what conditions**. Policies are written in **JSON** format and are the backbone of AWS security management.

---

### 🧱 IAM Policy Structure

An IAM Policy document is made up of one or more **statements**, each describing a specific permission rule.

#### 🧩 Structure Components

| Field         | Description                                                     | Example                          |
| :------------ | :-------------------------------------------------------------- | :------------------------------- |
| **Version**   | Defines the policy language version (always use `"2012-10-17"`) | `"Version": "2012-10-17"`        |
| **Id**        | Optional unique identifier for the policy                       | `"Id": "S3ReadOnlyAccessPolicy"` |
| **Statement** | Contains one or more permission rules                           | —                                |

Each **Statement** block includes:

| Field         | Purpose                                                  | Example                                                          |
| :------------ | :------------------------------------------------------- | :--------------------------------------------------------------- |
| **Sid**       | Optional statement ID                                    | `"Sid": "AllowS3List"`                                           |
| **Effect**    | Either `Allow` or `Deny`                                 | `"Effect": "Allow"`                                              |
| **Principal** | Entity (user, role, account) to which the policy applies | `"Principal": {"AWS": "arn:aws:iam::123456789012:user/Alice"}`   |
| **Action**    | AWS actions permitted or denied                          | `"Action": "s3:ListBucket"`                                      |
| **Resource**  | The AWS resources affected                               | `"Resource": "arn:aws:s3:::my-bucket"`                           |
| **Condition** | Optional filters when policy is in effect                | `"Condition": {"IpAddress": {"aws:SourceIp": "203.0.113.0/24"}}` |

---

### 📜 Example IAM Policy JSON

```json
{
  "Version": "2012-10-17",
  "Id": "S3ReadOnlyAccessPolicy",
  "Statement": [
    {
      "Sid": "S3ListAccess",
      "Effect": "Allow",
      "Principal": { "AWS": "arn:aws:iam::123456789012:user/Alice" },
      "Action": ["s3:ListBucket", "s3:GetObject"],
      "Resource": [
        "arn:aws:s3:::my-example-bucket",
        "arn:aws:s3:::my-example-bucket/*"
      ]
    }
  ]
}
```

---

### 🧩 IAM Policy Inheritance

In AWS IAM, permissions can be inherited through multiple levels:

| Entity            | Receives Permissions From                              | Example                                            |
| :---------------- | :----------------------------------------------------- | :------------------------------------------------- |
| **User**          | Directly attached policies and group memberships       | `Alice` gets EC2 access via the `Developers` group |
| **Group**         | Policies attached to the group                         | `Developers`, `Operations`, `Audit Team`           |
| **Role**          | Policies attached to the role                          | Used for EC2, Lambda, or cross-account access      |
| **Inline Policy** | Policy directly embedded within a user, group, or role | `Fred` has a custom inline policy                  |

---

### ✍️ Attaching Policies To User

![](/img/aws/02/image_11.png)

---

### ✒️ Attaching Policies To Group

![](/img/aws/02/image_10.png)

---

### 👷‍♂️ Creating Custom Policies

![](/img/aws/02/image_12.png)
![](/img/aws/02/image_13.png)

---

### 👷‍♂️ Attaching Custom Policies

![](/img/aws/02/image_14.png)
