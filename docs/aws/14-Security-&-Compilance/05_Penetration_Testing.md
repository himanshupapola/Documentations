---
title: 05. AWS Penetration Testing
sidebar_label: A5. AWS Penetration Testing
sidebar_position: 5
---

# 05. AWS Penetration Testing Overview

Understand what **penetration testing (pen testing)** activities are **allowed** on AWS and which are **prohibited**.

### 🧩 1. What is Penetration Testing?

Penetration testing means **intentionally attacking your own AWS resources** to evaluate your security posture.

AWS allows customers to perform **self-initiated security assessments** **without prior approval** — but **only for certain services**.

---

### ✅ 2. Allowed Without Approval

You **can perform pen testing** on the following **8 AWS services**:

| Service                          | Examples                              |
| -------------------------------- | ------------------------------------- |
| **Amazon EC2**                   | Instances & Elastic IPs               |
| **NAT Gateways**                 | Network Address Translation resources |
| **Elastic Load Balancers (ELB)** | ALB / NLB                             |
| **Amazon RDS & Aurora**          | Database instances                    |
| **Amazon CloudFront**            | Edge distributions                    |
| **AWS Lambda / Lambda@Edge**     | Serverless functions                  |
| **Amazon API Gateway**           | API endpoints                         |
| **Amazon Lightsail**             | Simplified compute & app hosting      |
| **Elastic Beanstalk**            | Managed app environments              |

> 🧠 **Exam Tip:** Remember – **no prior AWS approval needed** for these eight.

---

### ❌ 3. Prohibited Activities

The following activities are **not allowed**:

| Category                         | Examples                               |
| -------------------------------- | -------------------------------------- |
| **Denial of Service (DoS/DDoS)** | Real or simulated DDoS attacks         |
| **Flooding Attacks**             | Port, protocol, or request flooding    |
| **DNS Zone Walking**             | Enumeration via Route 53 Hosted Zones  |
| **Any Unapproved Testing**       | Tests outside the allowed service list |

For **any other testing**, you must **contact AWS Security** for explicit approval.

---

### 🧠 4. Exam Tips

- ✅ Allowed on **EC2, RDS, CloudFront, API Gateway, Lambda, Aurora, Lightsail, Beanstalk**
- ❌ **Never allowed**: DDoS, flooding, or DNS zone walking
- 📨 For others → **Get AWS Security approval first**

---

### ✅ Summary

| Allowed                                | Not Allowed                                 |
| -------------------------------------- | ------------------------------------------- |
| Self-initiated tests on 8 AWS services | Any DoS, DDoS, flooding, or DNS attacks     |
| No AWS approval required               | Must contact AWS Security for others        |
| Purpose: test your own infrastructure  | Not to simulate or cause service disruption |
