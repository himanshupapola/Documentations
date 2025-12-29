---
title: 02. IP Address
sidebar_label: A2. IP Address
sidebar_position: 2
---

# 02. IP Addresses in AWS

AWS uses both **IPv4** and **IPv6** addressing schemes. These addresses determine whether your resources are reachable from the internet or stay private within your VPC.

---

## 1️⃣ IPv4 in AWS

| Type             | Description                        | Behavior                                                                       | Example       | Cost |
| ---------------- | ---------------------------------- | ------------------------------------------------------------------------------ | ------------- | ---- |
| **Public IPv4**  | Used to connect to the internet.   | Assigned automatically to EC2 instances. Released on stop, new one on restart. | `3.120.45.22` | Free |
| **Private IPv4** | Used within a private VPC network. | Persistent for the lifetime of the instance. Not reachable from the internet.  | `192.168.1.1` | Free |

📝 **Note:**  
If you stop and start your EC2 instance, the **public IPv4** changes, but the **private IPv4** remains the same.

---

## 2️⃣ Elastic IP (EIP)

| Feature         | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| **Purpose**     | Provides a fixed public IPv4 address.                                    |
| **Persistence** | Remains the same even if the instance is stopped and started.            |
| **Use Case**    | Needed when a static IP is required (e.g., DNS mapping, firewall rules). |
| **Pricing**     | Charged if not actively associated with a running instance.              |

---

## 3️⃣ IPv6 in AWS

| Property           | Details                                           |
| ------------------ | ------------------------------------------------- |
| **Protocol**       | IPv6 (Internet Protocol version 6)                |
| **Address Space**  | 3.4 × 10³⁸ addresses (virtually unlimited)        |
| **Format Example** | `2600:1f18:abcd:1234::1`                          |
| **Accessibility**  | All IPv6 addresses are public (no private ranges) |
| **Cost**           | Free in AWS                                       |

💡 **Tip:**  
Use **IPv6** to expose your applications publicly without incurring IPv4 costs.

---

## 🧩 Summary

| Concept          | IPv4                         | IPv6                        |
| ---------------- | ---------------------------- | --------------------------- |
| **Address Type** | Public & Private             | Public only                 |
| **Cost**         | $0.005/hour(Elastic)         | Free                        |
| **Persistence**  | Public IP changes on restart | Permanent                   |
| **Use Case**     | Legacy & compatibility       | Modern, scalable networking |
