---
title: 05. VPC Flow Logs & Peering
sidebar_label: A5. VPC Flow Logs & Peering
sidebar_position: 5
---

# 🌐 05. VPC Flow Logs & VPC Peering (AWS)

In this lecture, we cover two important VPC features:

- **VPC Flow Logs** — for monitoring and troubleshooting network traffic.
- **VPC Peering** — for private connectivity between VPCs.

---
## 1. VPC Flow Logs

**VPC Flow Logs** capture information about the **IP traffic going to and from network interfaces** within your VPC.

They help you:

- Diagnose connectivity issues.
- Analyze traffic patterns.
- Audit and monitor network access.

### ⚙️ Scope Levels

---

You can create flow logs at multiple levels:

| Level                       | Description                                               |
| --------------------------- | --------------------------------------------------------- |
| **VPC**                     | Captures all traffic within the VPC.                      |
| **Subnet**                  | Captures traffic to and from specific subnets.            |
| **Network Interface (ENI)** | Captures traffic specific to an EC2 instance or resource. |

---

### 🧩 Use Cases

- Troubleshoot connectivity failures (e.g., instance can’t reach the internet).
- Identify rejected connections (due to NACL or Security Group rules).
- Audit access for services like **EC2**, **RDS**, **ELB**, **ElastiCache**, and **Aurora**.

---

### 🪣 Log Destinations

You can send VPC Flow Logs to any of the following:

| Destination                      | Purpose                                                           |
| -------------------------------- | ----------------------------------------------------------------- |
| **Amazon CloudWatch Logs**       | Real-time monitoring and dashboards.                              |
| **Amazon S3**                    | Long-term archival and analytics.                                 |
| **Amazon Kinesis Data Firehose** | Stream logs for processing or analysis (cross-account supported). |

---

### 🧾 Log Record Format

Each flow log record contains key traffic data fields such as:

| Field                | Description                             |
| -------------------- | --------------------------------------- |
| `version`            | Log version number                      |
| `account-id`         | AWS account ID                          |
| `interface-id`       | ENI ID                                  |
| `srcaddr`, `dstaddr` | Source and destination IP addresses     |
| `srcport`, `dstport` | Source and destination ports            |
| `protocol`           | Protocol number (e.g., TCP=6, UDP=17)   |
| `packets`, `bytes`   | Number of packets and bytes transferred |
| `start`, `end`       | Timestamp of the capture window         |
| `action`             | ACCEPT or REJECT                        |
| `log-status`         | SUCCESS or FAILURE of logging           |

---

## 2. VPC Peering

**VPC Peering** allows two VPCs to connect **privately** using AWS’s internal network.  
It makes the VPCs behave **as if they are part of the same network**.

| Property                    | Description                                                |
| --------------------------- | ---------------------------------------------------------- |
| **Connection Type**         | Private connection between two VPCs                        |
| **Traffic Flow**            | Uses AWS backbone (no public internet exposure)            |
| **CIDR Range Requirement**  | VPCs must have **non-overlapping** CIDR blocks             |
| **Transitive Connectivity** | ❌ Not supported (connections are **non-transitive**)      |
| **Region Support**          | Can be **intra-region** or **inter-region**                |
| **Ownership**               | Can connect VPCs **in the same or different AWS accounts** |

---

### 🧩 Example Scenario

- **VPC A ↔ VPC B** — Direct peering connection established.
- If **VPC C** is introduced:
  - A↔B ✅
  - A↔C ✅
  - B↔C ❌ (Requires a separate peering connection)

📌 **Non-transitive rule:** Peering connections must be explicitly created for every pair of VPCs that need to communicate.

---

### 🧭 Console Navigation

**To create a Peering Connection:**

1. Go to **VPC Console → Peering Connections**.
2. Click **Create Peering Connection**.
3. Specify:
   - **Requester VPC** (local VPC)
   - **Accepter VPC** (same or different account/region)
4. Review and create the connection.
5. The accepter must **accept** the peering request.

---

## ✅ Summary

| Concept          | VPC Flow Logs            | VPC Peering            |
| ---------------- | ------------------------ | ---------------------- |
| **Purpose**      | Monitor network traffic  | Privately connect VPCs |
| **Level**        | VPC/Subnet/ENI           | VPC-to-VPC             |
| **Destination**  | S3, CloudWatch, Firehose | Private AWS network    |
| **CIDR Overlap** | N/A                      | Must not overlap       |
| **Transitivity** | N/A                      | ❌ Non-transitive      |
