---
title: Security
sidebar_label: A03. Security
sidebar_position: 3
---

# 🔒 Pillar 2: Security

**Security** is the second pillar of the **AWS Well-Architected Framework**.

It focuses on protecting **information, systems, and assets** while delivering business value through **risk assessment** and **mitigation strategies**.

Security is not just a requirement, it’s a **cost-saving strategy** that minimizes the risk of data breaches, downtime, and compliance violations.

## Design Principles of Security

- **Establish a Strong Identity Foundation:** Use **AWS Identity and Access Management (IAM)** and **AWS Organizations** to centrally manage user access and apply **least privilege** permissions.

- **Enable Traceability:** Continuously monitor and log all actions using **AWS CloudTrail**, **AWS Config**, and **Amazon CloudWatch** for visibility and auditing.

- **Apply Security at All Layers:** Protect every layer from the **edge network** (CloudFront, Shield) to **VPC**, **subnets**, **instances**, **OS**, and **applications**.

- **Automate Security Best Practices:** Use infrastructure automation and policies to enforce consistent security across environments.

- **Protect Data in Transit and at Rest:** Encrypt all data using **SSL/TLS**, **AWS KMS**, and service-level encryption options.

- **Keep People Away from Data:** Minimize direct data access; rely on automated tools and least-privilege IAM policies.

- **Prepare for Security Events:** Plan, simulate, and automate incident detection and response for faster recovery.

## Security Domains and Key AWS Services

### 1️⃣ Identity and Access Management

Establish a **secure identity foundation** to control access at all levels.

| Purpose                       | AWS Services                     | Description                                                |
| ----------------------------- | -------------------------------- | ---------------------------------------------------------- |
| **User Access & Permissions** | **IAM**                          | Define users, roles, and policies with least privilege.    |
| **Temporary Credentials**     | **STS (Security Token Service)** | Grant temporary access for limited-time operations.        |
| **Multi-Account Management**  | **AWS Organizations**            | Centrally manage permissions across multiple accounts.     |
| **MFA Enforcement**           | **MFA Devices**                  | Add an extra layer of authentication for privileged users. |

---

### 2️⃣ Detective Controls

Detect and respond to anomalies and unauthorized changes.

| Purpose                                   | AWS Services          | Description                                                          |
| ----------------------------------------- | --------------------- | -------------------------------------------------------------------- |
| **Compliance & Configuration Monitoring** | **AWS Config**        | Track configuration changes and detect non-compliance.               |
| **API Activity Tracking**                 | **AWS CloudTrail**    | Log all API calls for visibility, auditing, and security analysis.   |
| **Metrics & Alerts**                      | **Amazon CloudWatch** | Monitor performance and trigger alerts when thresholds are exceeded. |

---

### 3️⃣ Infrastructure Protection

Secure networks, applications, and infrastructure from external and internal threats.

| Purpose                      | AWS Services          | Description                                                            |
| ---------------------------- | --------------------- | ---------------------------------------------------------------------- |
| **Edge Protection & CDN**    | **Amazon CloudFront** | Defend against DDoS attacks and improve content security.              |
| **Network Segmentation**     | **Amazon VPC**        | Control traffic with subnets, security groups, and NACLs.              |
| **DDoS Protection**          | **AWS Shield**        | Automatically mitigates distributed denial-of-service attacks.         |
| **Web Application Firewall** | **AWS WAF**           | Protects web apps from common exploits (SQLi, XSS, etc.).              |
| **Vulnerability Scanning**   | **Amazon Inspector**  | Continuously assesses EC2 and container workloads for vulnerabilities. |

---

### 4️⃣ Data Protection

Ensure that all data is encrypted and access is tightly controlled.

| Purpose                           | AWS Services                          | Description                                                    |
| --------------------------------- | ------------------------------------- | -------------------------------------------------------------- |
| **Encryption Key Management**     | **AWS KMS**                           | Manage encryption keys for all AWS services.                   |
| **S3 Encryption Options**         | **SSE-S3, SSE-KMS, SSE-C**            | Encrypt S3 objects using AWS-managed or customer-managed keys. |
| **Database & Storage Encryption** | **RDS, EBS, S3**                      | Enable encryption at rest and SSL/TLS for data in transit.     |
| **Access Control Policies**       | **S3 Bucket Policies / IAM Policies** | Restrict data access to authorized users and roles only.       |

---

### 5️⃣ Incident Response

Prepare for and respond efficiently to security incidents.

| Purpose                        | AWS Services                        | Description                                                         |
| ------------------------------ | ----------------------------------- | ------------------------------------------------------------------- |
| **Access Control & Isolation** | **IAM**                             | Quickly revoke compromised credentials or restrict access.          |
| **Automated Recovery**         | **AWS CloudFormation**              | Rebuild environments quickly after a compromise or disaster.        |
| **Event Detection & Alerts**   | **CloudWatch Events / EventBridge** | Trigger automated alerts or workflows when suspicious events occur. |

## Key Takeaways

- **Security** is a shared responsibility between AWS and the customer — AWS secures the cloud, you secure your workloads **in** the cloud.
- Strong identity management, encryption, and automation are at the heart of AWS security.
- **Traceability and observability** (CloudTrail, Config, CloudWatch) are essential for detection and response.
- Managed services like **Shield**, **WAF**, and **Inspector** simplify protection across layers.
- Preparation and **incident response automation** minimize damage when threats occur.
