---
title: 02. AWS ELB
sidebar_label: A2. AWS ELB
sidebar_position: 2
---

# 02. AWS ELB

**Elastic Load Balancing (ELB)** automatically distributes **incoming traffic** across multiple **EC2 instances (targets)**. It improves **elasticity**, **availability**, and **fault tolerance**.

---

### **Load Balancer**

- Acts as a **single entry point (DNS hostname)**.
- Distributes requests across **backend EC2 instances**.
- Performs **health checks** and removes unhealthy targets.
- Supports **SSL termination (HTTPS)**.
- Enables **multi-AZ high availability**.

---

### 🏗️ Architecture

**Request Flow**

User → Load Balancer → EC2 Instances (Targets)

- Traffic is routed only to **healthy instances**.
- Instances are spread across **multiple AZs**.
- Scaling is automatic when used with **Auto Scaling Groups**.

---

### ☯️ AWS-Managed vs Self-Managed Load Balancer

| Type                         | Description           | Managed By | Maintenance Effort           | Cost            |
| ---------------------------- | --------------------- | ---------- | ---------------------------- | --------------- |
| **AWS Managed ELB**          | Fully managed service | AWS        | Low                          | Moderate        |
| **Self-Managed LB (on EC2)** | Custom setup on EC2   | You        | High (OS, patching, scaling) | Lower initially |

---

## 🧱 OSI Model (7 Layers)

- **Layer 7 – Application:** HTTP, HTTPS, DNS
- **Layer 6 – Presentation:** SSL/TLS, Encryption
- **Layer 5 – Session:** Session control
- **Layer 4 – Transport:** TCP, UDP
- **Layer 3 – Network:** IP, Routing
- **Layer 2 – Data Link:** MAC, Ethernet
- **Layer 1 – Physical:** Cables, Signals

> **Mnemonic:** All People Seem To Need Data Processing

---

## 🌐 Types of Load Balancers in AWS

AWS provides **four** load balancer types:

| Load Balancer                                  | Layer       | Protocols         | Key Features                      | Use Case                    |
| ---------------------------------------------- | ----------- | ----------------- | --------------------------------- | --------------------------- |
| **Application Load Balancer (ALB)**            | Layer 7     | HTTP, HTTPS, gRPC | Path/host-based routing           | Web apps, APIs              |
| **Network Load Balancer (NLB)**                | Layer 4     | TCP, UDP          | Ultra-high performance, static IP | Gaming, IoT, real-time apps |
| **Gateway Load Balancer (GWLB)**               | Layer 3     | IP (GENEVE)       | Traffic inspection & firewalling  | Security appliances         |
| **Classic Load Balancer (CLB)** _(deprecated)_ | Layer 4 & 7 | TCP, HTTP         | Legacy                            | —                           |

---

### 01. Application Load Balancer (ALB)

- Operates at **Layer 7 (HTTP/HTTPS)**.
- Supports **advanced routing** (host, path, headers, query).
- Static DNS 
- Uses **target groups**.
- Supports **WebSockets** and **gRPC**.
- Provides a **static DNS name** (not static IP).

### 🧩 Architecture (ALB)

<div align="center">
  <img
    src="/img/aws/05/load_balancer/image_S1.png"
    alt="Application Load Balancer architecture"
    width="520"
  />
</div>

#### 🛠️ Use Cases

- Web applications
- REST APIs
- Microservices (ECS, EKS)

---

## 02. Network Load Balancer (NLB)

- Operates at **Layer 4 (TCP/UDP)**.
- Handles **millions of requests per second**.
- Supports **static IPs** using **Elastic IPs**.
- Optimized for **low latency**.

#### 🧩 Architecture (NLB)

<div align="center">
  <img
    src="/img/aws/05/load_balancer/image_S2.png"
    alt="Network Load Balancer architecture"
    width="520"
  />
</div>

#### 🛠️ Use Cases

- Real-time systems
- Gaming backends
- Financial or IoT workloads

---

## 03. Gateway Load Balancer (GWLB)

- Operates at **Layer 3 (IP)**.
- Uses **GENEVE (UDP port 6081)**.
- Routes traffic through **security appliances/firewall** on EC2.
- Enables **centralized traffic inspection, intrusion detection or deep packet inspeciton**.

#### 🧩 Architecture (GWLB)

<div align="center">
  <img
    src="/img/aws/05/load_balancer/image_S3.png"
    alt="Network Load Balancer architecture"
    width="520"
  />
</div>

#### 🛠️ Use Cases

- Firewalls
- IDS / IPS systems
- Deep packet inspection

---

## 04. Classic Load Balancer (CLB)

> ⚠️ **Deprecated (do not use for new workloads)**

- Supports **Layer 4 & 7**.
- Superseded by **ALB** and **NLB**.
- Appears only in **legacy architectures**.


#### 🧩 Comparison Summary

| Feature             | ALB             | NLB              | GWLB              |
| ------------------- | --------------- | ---------------- | ----------------- |
| **Layer**           | 7               | 4                | 3                 |
| **Protocol**        | HTTP/HTTPS/gRPC | TCP/UDP          | IP (GENEVE)       |
| **Routing Logic**   | Advanced        | Connection-based | Packet forwarding |
| **Static IP**       | ❌              | ✅               | ✅                |
| **SSL Termination** | ✅              | ✅               | ❌                |
| **Health Checks**   | HTTP            | TCP              | IP-based          |

---

### 🧾 Exam Tips (CLF-C02)

| Scenario                                | Choose |
| --------------------------------------- | ------ |
| HTTP / HTTPS routing                    | ALB    |
| Millions of requests, ultra-low latency | NLB    |
| Firewall or packet inspection           | GWLB   |
| Static IP required                      | NLB    |
| Legacy architecture                     | CLB    |
