---
title: 08. Direct Connect & Site To Site
sidebar_label: A8. Direct Connect & Site To Site
sidebar_position: 8
---

# 🌩️ 08. Connect On-Premises Data Center to AWS (Hybrid Cloud)

Hybrid Cloud = **On-Premises Data Center** + **AWS Cloud (VPC)**  
Used when you want secure communication between your local data center and AWS resources.

You have **two main options** to establish this connection:

---
## 1. Site-to-Site VPN

A **Site-to-Site VPN** connects your on-premises data center to your AWS VPC **over the public internet**, using **encrypted IPsec tunnels**.

| Component                         | Location    | Description                                                   |
| --------------------------------- | ----------- | ------------------------------------------------------------- |
| **Customer Gateway (CGW)**        | On-premises | Your VPN device or software that initiates the VPN connection |
| **Virtual Private Gateway (VGW)** | AWS         | AWS-side VPN endpoint attached to your VPC                    |

### 🧩 Characteristics

- Encrypted traffic (IPsec)
- Uses **public internet**
- Quick setup (~5 minutes)
- **Low cost**
- Bandwidth limited by the internet connection
- May have slightly higher latency

### 🧠 Example

<div align="center">
  <img
    src="/img/aws/13/image_06.png"
    alt="IAM Roles Example"
    width="800"
  />
</div>

---
## 2. AWS Direct Connect (DX)

**AWS Direct Connect (DX)** establishes a **dedicated physical connection** between your on-premises data center and AWS.

### 🧩 Characteristics

- **Private** and **dedicated** network connection
- High bandwidth, low latency
- **More secure and reliable**
- **Costly**
- **Longer setup time** (~1 month)
- Requires Direct Connect partner

## ⚖️ Comparison Table

| Feature             | Site-to-Site VPN                        | AWS Direct Connect                 |
| ------------------- | --------------------------------------- | ---------------------------------- |
| **Connection Type** | Over public internet (encrypted)        | Dedicated private line             |
| **Speed**           | Dependent on internet                   | High bandwidth                     |
| **Setup Time**      | Few minutes                             | Few weeks (~1 month)               |
| **Cost**            | Low                                     | High                               |
| **Reliability**     | Medium                                  | Very high                          |
| **Security**        | Encrypted over public internet          | Private physical link              |
| **Ideal For**       | Quick, cost-effective hybrid connection | Stable, enterprise-grade workloads |

<div align="center">
  <img
    src="/img/aws/13/image_07.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>

## 🧠 Exam Tip

- **If you need quick setup → choose Site-to-Site VPN.**
- **If you need private, high-speed, reliable connection → choose Direct Connect.**
- Remember the components for VPN:  
  👉 **Customer Gateway (CGW)** + **Virtual Private Gateway (VGW)** = **Site-to-Site VPN**

---

## 🏗️ Visual Summary
