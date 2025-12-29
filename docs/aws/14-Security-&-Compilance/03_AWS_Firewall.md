---
title: 03. AWS Network Firewall
sidebar_label: A3. AWS Network Firewall
sidebar_position: 3
---

# 03. AWS Network Firewall

**AWS Network Firewall** is a **managed firewall service** that protects your **entire VPC** (Virtual Private Cloud) — not just subnets — by inspecting and filtering network traffic at multiple layers (L3–L7).

| Feature               | Description                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| **Scope**             | Operates at the **VPC level** (unlike NACLs, which work at subnet level).                      |
| **Layer Coverage**    | Provides **Layer 3 to Layer 7** protection.                                                    |
| **Traffic Direction** | Inspects traffic in **all directions** — inbound, outbound, and VPC-to-VPC.                    |
| **Integration**       | Works with **VPC routing**, **Transit Gateway**, **Direct Connect**, and **Site-to-Site VPN**. |

✅ **Protects all routes and traffic flows** within and across your AWS environments.

## 🧠 Exam Tip

> If you see a question asking how to **protect your entire VPC (not just subnets)** —  
> ✅ **Answer: AWS Network Firewall**

## ✅ Summary

- **AWS Network Firewall** provides **VPC-wide**, **multi-layer** (L3–L7) protection.
- Monitors **inbound, outbound, and inter-VPC** traffic.
- Integrates with **Transit Gateway**, **Direct Connect**, and **Firewall Manager**.
- Preferred choice for **comprehensive network security** — better than NACLs for full VPC coverage.

---
