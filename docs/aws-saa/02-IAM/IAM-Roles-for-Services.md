---
title: 05. IAM Roles For Services
sidebar_label: A5. IAM Roles For Services
sidebar_position: 5
---

# 🧑‍💻 05. IAM Roles for Services

Some AWS services need to **perform actions on your behalf**. To grant these permissions securely, AWS uses **IAM Roles**.

---

### 🔹 What is an IAM Role?

- An **IAM Role** is similar to a user, but **it does not have long-term credentials**.
- Services or applications **assume the role** to get temporary permissions.
- Roles allow AWS services to **perform actions securely without sharing your credentials**.

<img
  src="/img/aws/02/image_16.png"
  alt="IAM Role diagram"
  width="300"
  style={{ display: "block", margin: "0 auto" }}
/>

### 🔑 Common Service Roles

| Service            | Role Example                  | Purpose                                                                  |
| ------------------ | ----------------------------- | ------------------------------------------------------------------------ |
| **EC2**            | EC2 Instance Role             | Allows EC2 instances to access S3, DynamoDB, or services or even aws read access           |
| **Lambda**         | Lambda Function Role          | Grants Lambda functions permissions to interact with other AWS resources |
| **CloudFormation** | CloudFormation Execution Role | Allows CloudFormation to create and manage resources on your behalf      |

---

### ⚙️ How Roles Work

1. Create an IAM Role with the **required permissions**.
2. Assign the role to the **AWS service** (EC2 instance, Lambda function, etc.).
![](/img/aws/02/image_17.png)
![](/img/aws/02/image_18.png)
![](/img/aws/02/image_19.png)

3. The service **assumes the role** and receives temporary credentials.
4. Actions performed by the service are **logged and controlled** by the role’s policies.