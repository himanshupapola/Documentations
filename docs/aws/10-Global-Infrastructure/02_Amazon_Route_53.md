---
title: 02. Route 53
sidebar_label: A2. Amazon Route 53
sidebar_position: 2
---

# 🌍 Amazon Route 53 Overview

Amazon **Route 53** is a **Managed DNS (Domain Name System)** service.

- DNS = "Phonebook of the Internet"
- It helps clients resolve domain names (URLs) to IP addresses.
- Route 53 supports multiple record types to map names to resources.

---

### 📘 Common DNS Record Types

| Record Type      | Description                                                 | Example                                |
| ---------------- | ----------------------------------------------------------- | -------------------------------------- |
| **A Record**     | Maps domain → IPv4 address                                  | `www.example.com → 12.34.56.78`        |
| **AAAA Record**  | Maps domain → IPv6 address                                  | `www.example.com → 2001:db8::7334`     |
| **CNAME Record** | Maps hostname → another hostname                            | `search.example.com → www.example.com` |
| **Alias Record** | Maps domain → AWS resource (ELB, CloudFront, S3, RDS, etc.) | `example.com → AWS Resource`           |

---

### 🚦 How Route 53 Works (High-Level)

1. User enters `myapp.mydomain.com` in the browser.
2. Browser sends a **DNS query** to Route 53.
3. Route 53 returns the **IP address** for that domain.
4. Browser connects to that IP → reaches the correct server → gets HTTP response.

<div align="center">
  <img
    src="/img/aws/10/image_01.png"
    alt="IAM Roles Example"
    width="800"
  />
</div>

---

### ⚙️ Route 53 Routing Policies

Used to determine **how traffic is directed** based on use case.

| Routing Policy    | Health Check | Description                                                             | Use Case                                 |
| ----------------- | ------------ | ----------------------------------------------------------------------- | ---------------------------------------- |
| **Simple**        | ❌ No        | Returns a single resource for a domain                                  | Single web server                        |
| **Weighted**      | ✅ Yes       | Distributes traffic across multiple resources based on assigned weights | Load balancing (e.g., 70%-20%-10%)       |
| **Latency-Based** | ✅ Yes       | Routes users to the region with the lowest network latency              | Global apps — minimize latency           |
| **Failover**      | ✅ Yes       | Routes traffic to a standby resource when the primary fails             | Disaster recovery (active-passive setup) |

<div align="center">
  <img
    src="/img/aws/10/image_02.png"
    alt="IAM Roles Example"
  
  />
</div>

---

### 🧩 Key Exam Tips

- Route 53 = **Managed DNS**
- **Simple** = 1 target, no health checks
- **Weighted** = distribute load
- **Latency** = choose nearest region
- **Failover** = DR / backup routing
- **Alias records** integrate with AWS resources (ELB, CloudFront, etc.)

---

## 🌐 Route 53 + EC2 — Latency-Based Routing

This guide shows how to host simple web servers in two AWS regions and route users automatically to the lowest-latency region using **Amazon Route 53**.

---

### 1. Register a Domain (Route 53)

1. AWS Console → **Route 53 → Create hosted zones**
2. Select Public hosted zone
3. Click Create hosted zone
4. This zone will store DNS records

<div align="center">
  <img
    src="/img/aws/10/image_03.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>
<div align="center">
  <img
    src="/img/aws/10/image_04.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>

---

### 2. Launch EC2 Instances (Two Regions)

- Security Group: allow **HTTP (port 80)** inbound
- Launch, then copy each instance’s **Public IPv4 Address**
- Ireland(54.155.150.72)
- Oregon(34.214.42.89)

---

### 3. Create Latency-Based Records (Route 53)

1. Hosted Zone → **Create record**
2. Record name: `www` Type: **A** Routing policy: **Latency**
3. Add first record:
   - Value: _Ireland EC2 IP_
   - Region: **EU (Ireland)** Identifier: “Ireland-Instance”
4. Add second record:
   - Value: _US EC2 IP_
   - Region: **US West (Oregon)** Identifier: “US-Instance”

<div align="center">
  <img
    src="/img/aws/10/image_05.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>

---

### 4. Test Routing

| Method                | Command / Action                                |
| --------------------- | ----------------------------------------------- |
| **Browser**           | Open `http://www.himanshupapola.tech`           |
| **DNS**               | `nslookup www.himanshupapola.tech`              |
| **Cross-region test** | Use a VPN to switch regions and reload the site |

Expected:

- From Europe → “Hello from Ireland”
- From US → “Hello from US”

<div align="center">
  <img
    src="/img/aws/10/image_06.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>

---

### 5. Cleanup

| Task               | Command / Action                                                          |
| ------------------ | ------------------------------------------------------------------------- |
| Terminate EC2      | `aws ec2 terminate-instances --instance-ids <IDs>`                        |
| Delete DNS records | Remove A records for `www`                                                |
| Delete hosted zone | `aws route53 delete-hosted-zone --id <ZONEID>`                            |
| Disable auto-renew | `aws route53domains disable-domain-auto-renew --domain-name mydomain.com` |

---

### 💰 Cost & Notes

| Resource       | Typical Cost                        |
| -------------- | ----------------------------------- |
| Domain         | ~$12/yr (not fixed)                 |
| Hosted Zone    | ~$0.50/month                        |
| EC2 (t2.micro) | Free tier eligible or per-hour cost |
| Data Transfer  | Regional rates apply                |

**Tip:** Use short TTL (e.g., 60 seconds) for faster DNS propagation while testing.
