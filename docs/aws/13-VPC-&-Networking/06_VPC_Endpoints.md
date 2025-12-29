---
title: 06. VPC Endpoints
sidebar_label: A6. VPC Endpoints
sidebar_position: 6
---

# 🔒 06. VPC Endpoints

By default, when you access AWS services (like S3, DynamoDB, or CloudWatch) from your VPC,  
the traffic goes **over the public internet** — even if you’re inside AWS.

**VPC Endpoints** allow you to connect **privately** to AWS services using the **AWS internal network**,  
**without using the public internet**.

| Benefit                   | Description                                                                  |
| ------------------------- | ---------------------------------------------------------------------------- |
| **Enhanced Security**     | Traffic never leaves AWS’s private backbone. No exposure to public internet. |
| **Lower Latency**         | Fewer network hops, faster communication.                                    |
| **Simpler Configuration** | No need for Internet Gateways, NAT Gateways, or public IPs.                  |
| **Cost Optimization**     | Reduces NAT Gateway data processing costs for private traffic.               |

| Type                   | Used For                   | Description                                                                                    |
| ---------------------- | -------------------------- | ---------------------------------------------------------------------------------------------- |
| **Gateway Endpoint**   | 🪣 S3, 🔢 DynamoDB         | A route added to your route table that directs traffic privately.                              |
| **Interface Endpoint** | 💬 Most other AWS services | Uses **Elastic Network Interfaces (ENIs)** in your subnet to connect privately to the service. |

---

### 🧩 Gateway Endpoint

- Used **only** for **Amazon S3** and **DynamoDB**.
- Adds an **entry in the route table** of your VPC.
- Traffic to these services stays **within AWS’s private network**.

**Example:**
Private Subnet → Gateway Endpoint → S3/DynamoDB (Private)

<div align="center">
  <img
    src="/img/aws/13/image_04.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>
---

### 🧩 Interface Endpoint

- Used for **all other AWS services** (e.g., CloudWatch, EC2 API, KMS, SNS, etc.).
- Creates a **private Elastic Network Interface (ENI)** in your subnet.
- The ENI connects to the service **via AWS PrivateLink**.

### 📗 Example: Interface Endpoint for CloudWatch

- EC2 in private subnet sends metrics to CloudWatch privately.
- A private ENI is created in the subnet.
- Traffic never leaves AWS’s internal network.

---
### Exam Tips

| Topic                           | Key Point                                                   |
| ------------------------------- | ----------------------------------------------------------- |
| **Gateway Endpoint Services**   | Only **S3** and **DynamoDB**                                |
| **Interface Endpoint Services** | Almost every other AWS service                              |
| **Underlying Tech**             | Interface endpoints use **AWS PrivateLink**                 |
| **Region Support**              | Works within the same region (no transitive routing)        |
| **Internet Required?**          | ❌ No — stays inside AWS network                            |
| **Security Groups**             | Required for Interface Endpoints (because they create ENIs) |

---
### ✅ Summary

| Concept             | Gateway Endpoint   | Interface Endpoint              |
| ------------------- | ------------------ | ------------------------------- |
| **Used For**        | S3, DynamoDB       | Most other services             |
| **Mechanism**       | Route table entry  | Elastic Network Interface (ENI) |
| **Technology**      | Native VPC routing | AWS PrivateLink                 |
| **Requires SG?**    | ❌ No              | ✅ Yes                          |
| **Transitive?**     | ❌ No              | ❌ No                           |
| **Example Service** | S3, DynamoDB       | CloudWatch, EC2, SNS, SSM       |
