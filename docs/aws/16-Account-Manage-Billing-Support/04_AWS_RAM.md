---
title: 04. AWS RAM
sidebar_label: A04. AWS RAM
sidebar_position: 4
---

# 04. AWS Resource Access Manager (AWS RAM)

**AWS Resource Access Manager (RAM)** allows you to securely share your AWS resources with other AWS accounts or with accounts within your **AWS Organization**, without the need to duplicate resources.

| Benefit                            | Description                                                     |
| ---------------------------------- | --------------------------------------------------------------- |
| **Avoid Duplication**              | Share existing resources instead of creating multiple copies.   |
| **Simplify Management**            | Centralize shared infrastructure such as VPCs and subnets.      |
| **Seamless Connectivity**          | Enables inter-account communication within the same network.    |
| **Integration with Organizations** | Simplifies sharing across accounts under the same organization. |

---

### Supported Resources

Some of the commonly shared resources include:

- **VPC Subnets**
- **Transit Gateway**
- **Aurora Databases**
- **License Manager configurations**
- **Route53 Resolver rules**
- **RAM resource shares** (custom-defined)

---

### Example Use Case

**Scenario:**

- You have a **main cloud account** containing a **VPC** with private subnets.
- You share this VPC with **Account 1** and **Account 2** using AWS RAM.

**Result:**

- Account 1 and Account 2 can:
  - Launch **EC2 instances** inside the shared VPC.
  - Access shared resources like **RDS Databases** or **Application Load Balancers**.
- All instances communicate **directly over the same network**, simplifying architecture and deployments.

---

## Summary

| Concept            | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| **Purpose**        | Share AWS resources securely between accounts.              |
| **Sharing Scope**  | Individual accounts or accounts within an AWS Organization. |
| **Main Advantage** | Network and resource sharing without duplication.           |

---

📘 **Key takeaway:**  
AWS RAM enables **resource sharing across accounts**, promoting **efficiency, cost savings, and simplified architecture** — especially useful for multi-account setups within AWS Organizations.
