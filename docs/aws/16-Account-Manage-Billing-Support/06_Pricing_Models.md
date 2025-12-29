---
title: 06. AWS Pricing Models
sidebar_label: A06. AWS Pricing Models
sidebar_position: 6
---

# AWS Pricing Models

AWS offers multiple flexible pricing models that help you optimize cost, remain agile, and align cloud usage with business needs.

### AWS Pricing Models

| **Pricing Model**          | **Description**                                                       | **Use Case Examples**                           |
| -------------------------- | --------------------------------------------------------------------- | ----------------------------------------------- |
| **Pay as You Go**          | Pay only for the resources you use. Start, stop, and scale on demand. | EC2 on-demand instances, Lambda functions       |
| **Save When You Reserve**  | Commit to 1 or 3 years for a predictable budget and cost savings.     | EC2 Reserved Instances, RDS, DynamoDB, Redshift |
| **Pay Less by Using More** | Volume-based discounts as usage increases.                            | S3 storage tiers, data transfer                 |
| **AWS Cost Reductions**    | AWS regularly passes on infrastructure cost savings to customers.     | Continuous price drops over time                |

---

## 1. AWS Free Tier

When you create a new AWS account, you receive **$200 in credits** and access to free services.

| **Plan Type**            | **Duration / Limits**                   | **Details**                                  |
| ------------------------ | --------------------------------------- | -------------------------------------------- |
| **Free Plan**            | 6 months or until $200 credits are used | No charges, account deleted after expiration |
| **Paid Plan**            | Charged after $200 credits are consumed | Account remains active after credits end     |
| **Always Free Services** | Ongoing free limits each month          | Example: Lambda, DynamoDB, S3                |

### Examples of Always Free Services

| **Service**  | **Free Tier Benefits**                        |
| ------------ | --------------------------------------------- |
| **Lambda**   | 1M requests/month, 400,000 GB-seconds compute |
| **DynamoDB** | 25 GB storage, 200M requests/month            |

---

## 2. Compute Service Pricing

### **01. Amazon EC2**

- Only charged for what you use.
- Number of instances, configuration,elb runing time and data processed.
- Detialed monitoring via Cloudwatch

| **Model**              | **Description**                        | **Billing**                | **Discount** | **Other**                        |
| ---------------------- | -------------------------------------- | -------------------------- | ------------ | -------------------------------- |
| **On-Demand**          | Pay for compute capacity by the second | Per second (Linux/Windows) | —            | Min 60 sec                       |
| **Reserved Instances** | Commit 1–3 years                       | Hourly                     | Up to 75%    | All, partial, no upfront charges |
| **Spot Instances**     | Bid on unused capacity                 | Hourly                     | Up to 90%    | Can loose anytime                |
| **Dedicated Hosts**    | Physical servers dedicated to your use | On-Demand / Reserved       | —            |
| **Savings Plans**      | Flexible pricing alternative to RIs    | 1 or 3 years               | Up to 72%    |

💡 **Tip:** Use private IPs between instances to save on networking costs.

### **02. AWS Lambda**

- Pay per **request** and **duration × memory allocated**.

#### **Amazon ECS / Fargate**

| **Launch Type**         | **Pricing Basis**                      |
| ----------------------- | -------------------------------------- |
| **EC2 Launch Type**     | Pay for EC2 instances used             |
| **Fargate Launch Type** | Pay per container CPU and memory usage |

---

## 03. Storage Service Pricing

### **1. Amazon S3**

| **Factor**                | **Pricing Basis**                                                             |
| ------------------------- | ----------------------------------------------------------------------------- |
| **Storage Class**         | Standard, IA, One-Zone IA, Intelligent Tiering, Glacier, Glacier Deep Archive |
| **Storage Volume**        | Tiered pricing — pay less as you store more                                   |
| **Requests**              | Charges for PUT, GET, COPY, etc.                                              |
| **Data Transfer**         | Free inbound, pay for outbound                                                |
| **Lifecycle Transitions** | Charged per transition between storage classes                                |
| **Transfer Acceleration** | Additional cost                                                               |

### **2. Amazon EBS**

- Based on volume type and size.
- IOPS

| **Factor**             | **Pricing Basis**             |
| ---------------------- | ----------------------------- |
| **Volume Type & Size** | Provisioned GBs per month     |
| **IOPS**               | Charged if provisioned IOPS   |
| **Snapshots**          | Per GB stored per month       |
| **Data Transfer**      | Free inbound, outbound tiered |

### **Amazon EFS**

- Pay per GB-month of storage used.
- Supports **Infrequent Access Tier** and **Lifecycle Management**.

---

## 04. Database Pricing

### **01. Amazon RDS**

- Per hour billing
- Database characteristics: Engine, Size, Memory class
- Purchase Types: On Demand, Reserved(1-3 years)

| **Component**             | **Pricing Basis**                     |
| ------------------------- | ------------------------------------- |
| **Compute (DB Instance)** | On-Demand or Reserved (1–3 years)     |
| **Storage**               | Provisioned EBS volume (per GB-month) |
| **Backups**               | Free up to total DB storage size      |
| **I/O Requests**          | Charged per million requests          |
| **Deployment Type**       | Single-AZ or Multi-AZ (double cost)   |
| **Data Transfer**         | Free inbound, outbound tiered         |

---

## 05. Content Delivery Pricing

### **Amazon CloudFront**

| **Cost Component**       | **Details**                                     |
| ------------------------ | ----------------------------------------------- |
| **Data Transfer Out**    | Varies by region (e.g., Americas, Europe, Asia) |
| **Requests**             | Pay per 10,000 or 1 million requests            |
| **Data Transfer In**     | Free(out is chraged)                            |
| **Aggregated Discounts** | Volume discounts across all edge locations      |

---

## 06. Networking Costs

| **Scenario**                                     | **Cost per GB** | **Notes**          |
| ------------------------------------------------ | --------------- | ------------------ |
| **Inbound traffic to EC2**                       | Free            | —                  |
| **Between EC2 (same AZ, private IP)**            | Free            | Use private IPs    |
| **Between EC2 (different AZ, private IP)**       | $0.01           | Within same region |
| **Between EC2 (different / same AZ, public IP)** | $0.02           | Avoid public IPs   |
| **Between regions (Inter-Region)**               | $0.02           | Per GB transfer    |

💡 **Tip:**

- Prefer **private IPs** over public IPs for cost savings.
- Using a **single AZ** reduces cost but impacts high availability.

---

## 9. Summary

| **Category**   | **Key Principle**                                               |
| -------------- | --------------------------------------------------------------- |
| **Compute**    | Choose between On-Demand, Reserved, Spot, or Savings Plans      |
| **Storage**    | Pay for provisioned size and data transfer out                  |
| **Database**   | Combine On-Demand or Reserved pricing with backup/storage tiers |
| **Networking** | Optimize data transfer using private IPs and same AZ            |
| **Free Tier**  | Utilize Always Free and credit-based offers for testing         |
