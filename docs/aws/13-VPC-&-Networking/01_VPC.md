---
title: 01. Amazon VPC
sidebar_label: A1. Amazon VPC
sidebar_position: 1
---

# 01. Introduction to Amazon VPC

**VPC (Virtual Private Cloud)** allows you to define and control a virtual network environment in AWS — similar to your own private data center in the cloud.

This section provides a **crash course** on key networking concepts used in AWS.  While VPC is a large and complex topic, this module focuses on **high-level understanding**, sufficient for the **AWS Certified Cloud Practitioner (CCP)** exam.

---
### 🔍 Key Concepts Covered

| Concept                    | Description                                                                       |
| -------------------------- | --------------------------------------------------------------------------------- |
| **VPC**                    | Your own isolated network in AWS.                                                 |
| **Subnets**                | Logical divisions within a VPC (public/private).                                  |
| **Internet Gateway (IGW)** | Enables internet access for resources in a public subnet.                         |
| **NAT Gateway**            | Allows private subnet resources to access the internet securely.                  |
| **Security Groups**        | Virtual firewalls for controlling inbound/outbound traffic at the instance level. |
| **Network ACL (NACL)**     | Network-level firewall controlling traffic in/out of subnets.                     |
| **VPC Flow Logs**          | Capture network traffic logs for analysis.                                        |
| **VPC Peering**            | Connects two VPCs privately.                                                      |
| **VPC Endpoints**          | Connect to AWS services without using the public internet.                        |
| **Site-to-Site VPN**       | Secure connection between on-premises network and VPC.                            |
| **Direct Connect**         | Dedicated, high-speed private connection to AWS.                                  |
| **Transit Gateway**        | Central hub for connecting multiple VPCs and on-prem networks.                    |

---

### 🧠 Exam Tip

- Only **1–2 questions** on VPC appear in the **AWS Certified Cloud Practitioner** exam.
- Focus on **what each component does** rather than configuration details.
- Deep understanding of VPCs is essential for **Solutions Architect** or **SysOps** certifications.

---

### 🧩 Hands-On

- You will explore the **default VPC** that AWS creates automatically.
- No need to build a custom VPC from scratch at this level.

---

### ✅ Summary

By the end of this section, you will:

- Understand core VPC networking concepts.
- Know how AWS connects resources privately or publicly.
- Be ready for high-level VPC questions in the CCP exam.
