---
title: 10. AWS Transit Gateway
sidebar_label: A10. AWS Transit Gateway
sidebar_position: 10
---

# 🧭 Connect Multiple VPCs and On-Premises Networks using AWS Transit Gateway

**AWS Transit Gateway (TGW)** is a central hub that simplifies network connectivity between multiple **VPCs**, **on-premises networks**, and **AWS accounts**.  
It uses a **hub-and-spoke (star)** topology to eliminate the need for complex VPC peering meshes.

## 🧩 Architecture Diagram

<div align="center">
  <img
    src="/img/aws/13/image.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>

<div align="center">
  <img
    src="/img/aws/13/image0.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>

| Feature                    | Description                                 |
| -------------------------- | ------------------------------------------- |
| **Scalability**            | Connect thousands of VPCs                   |
| **Centralized Management** | Manage all connectivity in one place        |
| **Multi-Account Sharing**  | Share via AWS Resource Access Manager (RAM) |
| **Routing Control**        | Custom route tables for segmentation        |
| **Inter-Region Peering**   | Connect TGWs across regions                 |
| **High Bandwidth**         | Up to 50 Gbps per attachment (aggregate)    |

## 🧮 Comparison Table

| Use Case                    | Recommended Service                   |
| --------------------------- | ------------------------------------- |
| Connect 2 VPCs              | **VPC Peering**                       |
| Connect On-Prem to AWS      | **Site-to-Site VPN / Direct Connect** |
| Connect Many VPCs + On-Prem | ✅ **Transit Gateway**                |

## 🧠 Exam Tip

> If a question says:  
> “You need to connect hundreds of VPCs and on-premises data centers efficiently.”  
> → The correct answer is **AWS Transit Gateway**.

## ✅ Summary

- **Transit Gateway** = Centralized hub for network interconnectivity.
- Replaces **VPC Peering Meshes**.
- Works with **VPCs**, **VPNs**, and **Direct Connect Gateways**.
- Supports **multi-account**, **multi-region**, and **segmented routing**.
