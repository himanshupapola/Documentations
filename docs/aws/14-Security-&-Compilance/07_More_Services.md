---
title: 07. More Services
sidebar_label: A7. More Services
sidebar_position: 7
--- 

---

## 🛡️ 01. AWS Certificate Manager (ACM)

**AWS Certificate Manager (ACM)** provides and manages **SSL/TLS certificates** to enable **HTTPS (in-flight encryption)** for AWS resources.

| Feature               | Description                                               |
| --------------------- | --------------------------------------------------------- |
| **Purpose**           | Secure communication between users and apps using HTTPS   |
| **Free Public Certs** | Public certificates are free and auto-renewed             |
| **Private Certs**     | For internal apps via AWS Private CA                      |
| **Integration**       | Works with **ALB**, **CloudFront**, **API Gateway**, etc. |
| **Validation**        | Domain ownership verified via **DNS** or **email**        |
| **Automation**        | ACM handles provisioning, renewal, and deployment         |

### 🔧 How It Works

1. **Request a certificate** in ACM (public or private).
2. **Validate** domain ownership.
3. **Attach** to AWS resources (e.g., ALB, CloudFront, API Gateway).
4. **ACM auto-renews** certificates before expiry.

### 💡 Exam Tip

> If a question mentions **HTTPS**, **SSL/TLS** certificate, or **in-flight encryption**,  
> the answer is **AWS Certificate Manager (ACM)**.

---

# 🔐 02. AWS Secrets Manager

**AWS Secrets Manager** securely stores, retrieves, and automatically rotates **secrets** like database passwords or API keys.

- **Stores secrets** securely (DB creds, API keys, etc.)
- **Auto-rotation** using **Lambda** (e.g., every 30 or 90 days)
- **Integrates** with **Amazon RDS (MySQL, PostgreSQL, Aurora)**
- **Encrypted** using **AWS KMS**
- **Access** via SDK, CLI, or Console
- **Paid service** – $0.40 per secret/month (+ API costs)

### 💡 Notes

- Removes hardcoded credentials in apps
- For **non-sensitive configs**, use **SSM Parameter Store** instead
- Exam tip → For **RDS password rotation**, answer is **Secrets Manager**

---

# 📄 03. AWS Artifact

**AWS Artifact** is a **portal** (not an actual service) that provides **on-demand access** to AWS **compliance reports** and **agreements**.

- **Not a service**, but a **self-service compliance portal**.
- Provides access to **security and compliance documents**.
- Useful for **audits** and **regulatory compliance**.

---

### 🧩 Two Main Components

| Component               | Description                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Artifact Reports**    | Download AWS compliance and security reports (e.g., **ISO**, **PCI**, **SOC**).                              |
| **Artifact Agreements** | Review, accept, and track **AWS legal agreements** like **BAA** (Business Associate Addendum) and **HIPAA**. |

---

### 💡 Use Case

- Supports **internal audit** and **compliance reviews**.
- Demonstrates that workloads hosted on AWS meet **industry standards**.
- Accessible globally via the **AWS Console → Artifact**.

---

📘 **Remember:**  
**AWS Artifact** = Compliance **Reports + Agreements** portal (ISO, PCI, SOC, HIPAA, BAA).

---

# 🛡️ 04. Amazon GuardDuty

**Amazon GuardDuty** is a **threat detection service** that continuously monitors your AWS accounts, workloads, and data stored in S3 for **malicious activity and unauthorized behavior**.

| Feature                          | Description                                                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Intelligent Threat Detection** | Uses **machine learning**, **anomaly detection**, and **integrated threat intelligence** to identify potential security risks. |
| **No Setup Overhead**            | Enabled with **one click**, no agents or software installation required. Includes a **30-day free trial**.                     |
| **Continuous Monitoring**        | Continuously analyzes multiple AWS data sources for suspicious activity.                                                       |

---

### 📊 Data Sources Analyzed

| Category             | Examples                                                                                                                                                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Core Sources**     | - **VPC Flow Logs** → Detect unusual IPs or network traffic patterns. - **AWS CloudTrail Logs** → Identify unusual API calls or unauthorized deployments. - **DNS Logs** → Detect encoded data exfiltration via DNS queries. |
| **Optional Sources** | - **S3 Data Events** (GetObject, DeleteObject, etc.) - **EBS Volumes** (malware scanning) - **RDS/Aurora Login Events** - **EKS Audit & Runtime Logs** - **Lambda Network Activity**                                         |

---

### ⚙️ Integration & Automation

| Component              | Purpose                                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Amazon EventBridge** | Receives GuardDuty **findings as events**.                                                                      |
| **Automation**         | Create EventBridge rules to trigger: - **Lambda functions** (auto-remediation) - **SNS notifications** (alerts) |
| **Use Cases**          | - Auto-isolate compromised EC2 instances - Notify SecOps teams of suspicious actions                            |

<div align="center">
  <img
    src="/img/aws/14/image_03.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>
---

### 💰 Common GuardDuty Findings

| Type                         | Example                                                |
| ---------------------------- | ------------------------------------------------------ |
| **Credential Compromise**    | Unusual API activity in CloudTrail                     |
| **Network Threats**          | Port scanning, brute-force attempts                    |
| **Malware / Crypto Attacks** | GuardDuty detects **cryptocurrency mining** indicators |
| **Data Exfiltration**        | DNS tunneling, unauthorized S3 data access             |

---

### 🧠 Summary

- **Amazon GuardDuty** provides **intelligent, continuous threat detection** using multiple AWS log sources.
- **Findings** are sent to **EventBridge** → can trigger **Lambda or SNS** for response automation.
- Helps protect against **unauthorized activity**, **data theft**, and **crypto-mining attacks**.

---

# 🧩 05. Amazon Inspector

**Amazon Inspector** is an **automated vulnerability management service** that continuously scans AWS workloads for **software vulnerabilities** and **unintended network exposure**.

| Capability                       | Description                                                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Automated Scanning**           | Continuously assesses resources without manual intervention.                                                    |
| **Agent-Based for EC2**          | Uses **AWS Systems Manager (SSM) Agent** on EC2 instances to evaluate vulnerabilities and network reachability. |
| **Integrated with ECR & Lambda** | Automatically scans **container images** in **Amazon ECR** and **Lambda functions** during deployment.          |
| **Continuous Updates**           | Automatically rescans when the **CVE database** is updated.                                                     |

---

## ⚙️ Components & Scope

| Resource Type            | What It Scans                         | Assessment Criteria                                    |
| ------------------------ | ------------------------------------- | ------------------------------------------------------ |
| **EC2 Instances**        | OS packages and network configuration | Known vulnerabilities (CVE), unintended network access |
| **ECR Container Images** | Pushed Docker images                  | Software vulnerabilities (CVE database)                |
| **Lambda Functions**     | Function code and dependencies        | Software/package vulnerabilities                       |

---

### 🧠 How It Works

1. **Enable Inspector** in the AWS Management Console.
2. It automatically discovers eligible **EC2, ECR, and Lambda** resources.
3. Scans them continuously against:
   - **Known CVEs (Common Vulnerabilities and Exposures)**
   - **Network Reachability (for EC2 only)**
4. Generates **findings** with **risk scores** for prioritization.

<div align="center">
  <img
    src="/img/aws/14/image_04.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>
---

### 📊 Findings & Integrations

| Integration            | Purpose                                                                         |
| ---------------------- | ------------------------------------------------------------------------------- |
| **AWS Security Hub**   | Centralized view of all vulnerability findings.                                 |
| **Amazon EventBridge** | Event-driven automation on new findings (e.g., notify via SNS, trigger Lambda). |
| **Risk Scoring**       | Assigns severity levels to vulnerabilities for remediation prioritization.      |

---

### 💡 Example Use Cases

- Identify outdated OS packages or open ports on EC2 instances.
- Detect vulnerabilities in container base images before deployment.
- Scan Lambda functions for insecure dependencies.
- Automate remediation through EventBridge → Lambda workflows.

---

### 🧩 Summary

- **Amazon Inspector** continuously evaluates **EC2, ECR, and Lambda** for **vulnerabilities and exposure**.
- Uses **CVE databases** and **network reachability** analysis.
- Findings flow into **Security Hub** and **EventBridge** for visibility and automation.
- Helps maintain a **proactive security posture** across AWS workloads.

---

## 🧩 06. AWS Config

**AWS Config** is a service that helps you **audit, record, and evaluate** the configurations of your AWS resources over time.

### 🧭 What AWS Config Does

| Feature                     | Description                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| **Configuration Recording** | Tracks configuration changes of AWS resources (e.g., EC2, S3, IAM).                      |
| **Compliance Auditing**     | Checks if resources comply with internal or regulatory standards.                        |
| **Change History**          | Maintains a timeline of configuration changes for each resource.                         |
| **Data Storage**            | Stores configuration snapshots in **Amazon S3**, which can be analyzed using **Athena**. |
| **Notifications**           | Sends **SNS alerts** when resource configurations change.                                |
| **Integration**             | Works with **AWS CloudTrail** to show who made API calls.                                |

### 🧠 Example Questions AWS Config Can Answer

- ❓ Is there **unrestricted SSH access** in my security groups?
- ❓ Are any of my **S3 buckets publicly accessible**?
- ❓ How has my **Application Load Balancer configuration** changed over time?

### 🌍 Key Points

- AWS Config is a **per-region service**.
- You can **aggregate** configuration data **across multiple regions and accounts**.
- You can **view resource compliance** and **configuration history** at any time.

### 📊 Use Case Example

| Task                              | AWS Config Feature Used |
| --------------------------------- | ----------------------- |
| Track changes to EC2 instances    | Configuration Recorder  |
| Identify non-compliant resources  | Config Rules            |
| Notify when changes occur         | SNS Integration         |
| Analyze historical configurations | S3 + Athena             |

---

**In short:**  
🧩 _AWS Config continuously records resource configurations, checks for compliance, and alerts you about changes — helping maintain visibility and governance across your AWS environment._

---

# 🔍 07. Amazon Macie

**Amazon Macie** is a **fully managed data security and privacy service** that uses **machine learning (ML)** and **pattern matching** to automatically **discover, classify, and protect sensitive data** stored in AWS.

<div align="center">
  <img
    src="/img/aws/14/image_05.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

### 🧠 What Macie Does

| Feature                                 | Description                                                                                           |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Data Discovery**                      | Scans and identifies sensitive data (e.g., PII, financial data) in your **Amazon S3** buckets.        |
| **Machine Learning & Pattern Matching** | Uses ML models to detect patterns such as credit card numbers, API keys, and personal data.           |
| **Automated Classification**            | Classifies and labels S3 objects containing sensitive data.                                           |
| **Security Alerts**                     | Generates findings and sends alerts for any exposure or risk detected.                                |
| **Data Visibility**                     | Provides a centralized dashboard to view where sensitive data is located and how it’s being accessed. |

### 🧩 Common Use Cases

- 🔐 Identify **PII (Personally Identifiable Information)** across S3 buckets.
- ⚠️ Detect **unintended data exposure** or **publicly accessible sensitive data**.
- 🧾 Support **compliance** with standards like GDPR, HIPAA, or PCI-DSS.
- 📊 Monitor **data security posture** over time.

### 🌍 Key Points

- **Fully managed service** — no need to maintain infrastructure.
- **Analyzes only S3** data at present.
- **Integrates** with **Amazon EventBridge**, **AWS Security Hub**, and **SNS** for alerting and automation.
- Helps maintain **data privacy and compliance** across your AWS environment.

**In short:**  
🔍 _Amazon Macie uses AI-powered scanning to automatically find, classify, and protect sensitive data like PII in your S3 buckets — keeping your AWS environment secure and compliant._

---

# 🛡️ 08. AWS Security Hub

**AWS Security Hub** is a **centralized security and compliance service** that helps you **analyze, manage, and automate security checks** across multiple AWS accounts and regions.

<div align="center">
  <img
    src="/img/aws/14/image_06.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

### 🧭 What Security Hub Does

| Feature                       | Description                                                                                                          |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Centralized Dashboard**     | Provides a unified view of your AWS security posture and compliance status.                                          |
| **Automated Security Checks** | Continuously evaluates your AWS environment against security standards like **CIS AWS Foundations** and **PCI DSS**. |
| **Findings Aggregation**      | Collects and normalizes alerts (called _findings_) from multiple AWS services and partner tools.                     |
| **Multi-Account Management**  | Supports **AWS Organizations** for centralized security visibility across all accounts.                              |
| **Integration & Automation**  | Integrates with AWS services and third-party tools for alerting, remediation, and workflow automation.               |

### 🧩 Integrated AWS Services

Security Hub aggregates findings from:

| Source Service           | Purpose                                                         |
| ------------------------ | --------------------------------------------------------------- |
| **AWS Config**           | Compliance and configuration tracking _(must be enabled first)_ |
| **Amazon GuardDuty**     | Threat detection and anomaly analysis                           |
| **Amazon Inspector**     | Vulnerability assessment                                        |
| **Amazon Macie**         | Sensitive data discovery                                        |
| **IAM Access Analyzer**  | Identifies risky permissions                                    |
| **AWS Systems Manager**  | Operational insights                                            |
| **AWS Firewall Manager** | Network and firewall compliance                                 |
| **AWS Health**           | AWS account and resource health events                          |
| **AWS Partner Tools**    | Security and compliance integrations                            |

### ⚙️ Example Capabilities

- 📊 View **compliance status** in a single dashboard.
- ⚠️ Detect **misconfigurations** or **vulnerabilities** across accounts.
- 🔄 Automate **response actions** via EventBridge or Lambda.
- 🧾 Generate **consolidated reports** for audits and compliance reviews.

### 🌍 Key Points

- Requires **AWS Config** to be enabled.
- **Aggregates data across multiple accounts and regions**.
- Supports **custom insights and automated workflows** for remediation.

**In short:**  
🛡️ _AWS Security Hub acts as the command center for your cloud security — unifying findings from AWS and partner services to give you complete visibility, compliance insights, and automated threat response._

---

# 🕵️‍♂️ 09. Amazon Detective

**Amazon Detective** is a **security analysis and investigation service** that helps you **analyze, visualize, and identify the root cause** of security issues or suspicious activities across your AWS environment.

---

### 🧠 What Amazon Detective Does

| Feature                       | Description                                                                                                                |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Deeper Investigation**      | Helps you investigate findings from **GuardDuty**, **Macie**, and **Security Hub** to determine the true cause and impact. |
| **Automated Data Collection** | Continuously ingests and processes data from **VPC Flow Logs**, **AWS CloudTrail**, and **Amazon GuardDuty**.              |
| **Graph-Based Analysis**      | Uses **machine learning (ML)** and **graph models** to connect and analyze related events and entities.                    |
| **Unified View**              | Combines events, activities, and relationships across AWS accounts into a single interactive interface.                    |
| **Visual Context**            | Generates visualizations to understand the “who, what, when, and where” behind each incident.                              |

---

### 🧩 Example Use Cases

- 🔎 Investigate suspicious **API calls** or **unusual user behavior**.
- 🧾 Trace the **source of an attack** or **data exfiltration attempt**.
- 🧠 Identify **affected resources** and **related activities** during a breach.
- ⚙️ Speed up **incident response** by providing contextual insights.

---

### 🌍 How It Works

1. **Findings Identified:** GuardDuty, Macie, or Security Hub detect a potential issue.
2. **Data Collected:** Detective automatically pulls in related logs and metrics.
3. **Graph Analysis:** It builds an entity graph linking users, IPs, resources, and actions.
4. **Root Cause Visualization:** You can explore interactive visual reports to pinpoint the cause.

---

### ⚙️ Key Integrations

| Integrated Source    | Data Type                               |
| -------------------- | --------------------------------------- |
| **VPC Flow Logs**    | Network traffic patterns                |
| **AWS CloudTrail**   | API call and user activity history      |
| **Amazon GuardDuty** | Security findings and threat indicators |

---

**In short:**  
🕵️‍♂️ _Amazon Detective helps you quickly investigate and visualize security incidents — turning raw logs into meaningful insights that reveal the root cause and context behind suspicious activity._
`

---

# 🚨 10. AWS Abuse

**AWS Abuse** is the official channel for reporting **abusive, malicious, or illegal activities** originating from **AWS resources or IP addresses**.

---

### 🧠 Purpose

AWS provides the **Abuse Reporting Service** to help individuals or organizations report cases where AWS infrastructure is being **misused** — whether intentionally or unintentionally — to perform **harmful or prohibited actions**.

---

### 🚫 Common Types of Abuse

| Type                                       | Description                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **Spam**                                   | Receiving unwanted or unsolicited emails from AWS-owned IPs, or websites hosted on AWS sending spam messages. |
| **Port Scanning**                          | AWS resources sending packets to discover open or unsecured network ports.                                    |
| **DoS / DDoS Attacks**                     | AWS IPs attempting to flood, crash, or overwhelm your applications or servers.                                |
| **Intrusion Attempts**                     | Unauthorized login or hacking attempts on your systems.                                                       |
| **Hosting Illegal or Copyrighted Content** | Distribution of pirated, copyrighted, or objectionable material without consent.                              |
| **Malware Distribution**                   | AWS resources being used to spread malicious software designed to harm computers or networks.                 |

---

### 🧩 How to Report Abuse

If you suspect AWS infrastructure is being used abusively:

| Reporting Method   | Description                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AWS Abuse Form** | Submit an online report through the official AWS Abuse portal.                                                                                              |
| **Email**          | Send details to **📧 abuse@amazonaws.com** including: - Source IP address - Time and date (with timezone) - Nature of the abuse - Relevant logs or evidence |

---

**In short:**  
🚨 _AWS Abuse is your go-to channel for reporting any malicious, abusive, or illegal behavior originating from AWS infrastructure — helping maintain a secure and trustworthy cloud ecosystem._
