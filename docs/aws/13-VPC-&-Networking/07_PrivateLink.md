---
title: 07. AWS PrivateLink
sidebar_label: A7. AWS PrivateLink
sidebar_position: 7
---

# 07. AWS PrivateLink

**AWS PrivateLink** enables **private connectivity between VPCs and AWS services**
without exposing traffic to the public internet.

It is part of the **VPC Endpoint Services** family and is designed for
**secure, scalable, one-way access** to services across AWS accounts.

> **Note:** On-premises networks can access PrivateLink services **only via a VPC**
> that is already connected using **VPN or AWS Direct Connect**.

---

## Why Use PrivateLink?

| Problem                            | Traditional Solution | Issues                            | PrivateLink Advantage            |
| ---------------------------------- | -------------------- | --------------------------------- | -------------------------------- |
| Connect to services in another VPC | VPC Peering          | Doesn’t scale, CIDR complexity    | Scalable, no CIDR dependency     |
| Access vendor SaaS securely        | Public endpoint      | Internet exposure, higher latency | Private access over AWS backbone |

---

## How It Works

### 🔹 Scenario

- **Service Provider (Vendor)** hosts a service in their **own VPC**
  (e.g., AWS Marketplace SaaS provider).
- **Service Consumer (Customer)** wants to access the service **privately**
  from their own VPC.

Instead of VPC Peering or public endpoints, a **PrivateLink connection** is used.

<div align="center">
  <img
    src="/img/aws/13/image_05.png"
    alt="AWS PrivateLink Architecture"
    width="600"
  />
</div>

---

### 🔹 Architecture

| Component                       | Description                                                     |
| ------------------------------- | --------------------------------------------------------------- |
| **Service Provider (Vendor)**   | Exposes the service using a **Network Load Balancer (NLB)**     |
| **Service Consumer (Customer)** | Creates an **Interface VPC Endpoint (ENI)** in their VPC        |
| **PrivateLink Connection**      | Private, one-way connectivity from consumer ENI to provider NLB |

---

### Key Benefits

✅ No need for:

- Internet Gateway _(for service access)_
- NAT Gateway _(for service access)_
- VPC Peering
- CIDR route propagation

✅ Traffic remains **on the AWS private backbone**  
✅ **Highly scalable** — supports many consumers without network complexity  
✅ **Secure** — service is not exposed to the public internet

---

### Important Characteristics (Exam & Real-World)

- Works **only with Network Load Balancers**
- **One-way access**: consumer → provider
- Does **not** replace VPN or Direct Connect
- Route tables still exist, but **no inter-VPC routing is required**

---

### Summary

| Feature            | Description                     |
| ------------------ | ------------------------------- |
| Service Type       | VPC Endpoint Service            |
| Endpoint Type      | Interface Endpoint              |
| Connection Type    | AWS PrivateLink                 |
| Provider Component | Network Load Balancer (NLB)     |
| Consumer Component | Elastic Network Interface (ENI) |
| Internet Usage     | None (uses AWS private network) |
