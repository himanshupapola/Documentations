---
title: 04. EC2 Instance Types
sidebar_label: A4. EC2 Instance Types
sidebar_position: 4
---

# 04. EC2 Instance Types

Amazon **EC2 (Elastic Compute Cloud)** offers a wide range of instance types optimized for different use cases. Each instance type provides a combination of **CPU**, **memory**, **storage**, and **networking** capacity.

---

### 🧩 What is an EC2 Instance Type?

An **instance type** defines the hardware configuration of our EC2 instance similar to choosing a server size in a data center.

Each instance type includes:

- **vCPUs (virtual CPUs)**
- **Memory (RAM)**
- **Storage options (EBS / Instance Store)**
- **Network performance**
- **Specialized hardware (e.g., GPUs, FPGAs)**

---

### 💡 EC2 Instance Naming Convention

Each **EC2 instance type** follows a simple naming rule:

```text
m5.2xlarge

m → Instance family
5 → Generation number
m5 → Instance class (family + generation)
2xlarge → Size

Example: **m5.large**

Sizes scale up in power:
`nano → micro → small → medium → large → xlarge → 2xlarge → ...`

```

---

### 🏷️ EC2 Instance Families

Amazon groups EC2 instance types into **families** based on their target use cases.

| **Family**                | **Category**                         | **Use Case**                 |
| ------------------------- | ------------------------------------ | ---------------------------- |
| **General Purpose**       | Balanced compute, memory, networking | Web servers, small databases |
| **Compute Optimized**     | High CPU performance                 | Gaming, batch processing     |
| **Memory Optimized**      | Large memory capacity                | In-memory databases, caching |
| **Storage Optimized**     | High disk throughput and IOPS        | Big data, data warehousing   |
| **Accelerated Computing** | GPU or FPGA acceleration             | ML, AI, 3D rendering, HPC    |

---

### ⚙️ Common EC2 Instance Families & Examples

### 1. 🧠 General Purpose

General purpose instances provide a balance of compute, memory, and networking resources, and can be used for a variety of diverse workloads.

These instances are ideal for applications that use these resources in equal proportions, such as web servers and code repositories.

- **T Series (T2, T3, T4g)** → Burstable performance
- **M Series (M5, M6i, M7i)** → Balanced performance for general workloads

**Example:**  
`T3.micro` — 2 vCPUs, 1 GiB memory _(Free Tier eligible)_

### 2. ⚡ Compute Optimized

Compute optimized instances are ideal for compute-bound applications that benefit from high-performance processors. Instances that belong to this family are well suited for batch processing workloads, media transcoding, machine learning inference, and other compute-intensive applications.

- **C Series (C5, C6g, C7i)**

**Use cases:**

- Gaming servers, Batch Processing, Scientific modeling, High-performance web apps

### 3. 🧮 Memory Optimized

Memory optimized instances are designed to deliver fast performance for workloads that process large data sets in memory.

Designed for memory-intensive(RAM) applications.

- **R Series (R5, R6i, R7i)**
- **X Series (X2idn, X2iedn)**

**Use cases:**

- In-memory caching (Redis, Memcached)
- Real-time analytics
- High-performance databases
- In-memory databases optimized for Business Intelligence (BI)
- Applications performing real-time processing of large or unstructured data

### 4. 💾 Storage Optimized

Storage optimized instances are designed for workloads that require high, sequential read and write access to very large data sets on local storage.
 
They deliver tens of thousands of low-latency, random I/O operations per second (IOPS) to applications.

High local storage performance for large data sets.

- **I Series (I3, I4i)**
- **D Series (D2, D3)**
- **H Series (H1)**

**Use cases:**

- Big Data (Hadoop, Spark)
- Data warehousing
- Log or data processing

### 5. 🧠 Accelerated Computing

Accelerated computing instances use hardware accelerators (co-processors) such as GPUs or FPGAs to perform specialized functions like floating-point calculations, graphics rendering, or data pattern matching.
These accelerators execute such operations more efficiently than traditional CPUs, offering massive performance improvements for specific workloads.

- **P Series (P3, P4)** → GPU for ML training
- **G Series (G4, G5)** → Graphics and inference
- **F Series (F1)** → FPGA for custom hardware logic

**Use cases:**

- Machine learning
- Deep learning
- 3D rendering
- Genomics

---

### 💡 Choosing the Right Instance Type

| **Requirement**         | **Best Family**                 |
| ----------------------- | ------------------------------- |
| Balanced workload       | General Purpose (T, M)          |
| High compute            | Compute Optimized (C)           |
| Large memory            | Memory Optimized (R, X)         |
| High storage throughput | Storage Optimized (I, D, H)     |
| GPU acceleration        | Accelerated Computing (P, G, F) |

---

### 🧮 Example Use Cases

| **Use Case**              | **Recommended Instance** |
| ------------------------- | ------------------------ |
| Web server (small)        | t3.micro                 |
| Machine learning training | p3.2xlarge               |
| In-memory database        | r6i.large                |
| Big data analytics        | i4i.xlarge               |
| Gaming or HPC             | c7i.large                |

---

### 📈 Scaling Instances Vertically

Unlike the instance’s AMI, the instance type can be changed after the instance is launched. Thus, we have the option to scale your instances by changing our instance type to give it more compute power. This kind of expansion is called vertical scaling.

Vertical scaling (scaling for more compute power per instance) gives you the ability to do the following:

• Scale up or down for CPU.

• Switch to any instance type in any instance family.

<div style={{ textAlign: "center" }}>
  <img
    src="/img/aws/03/image_08.png"
    alt="IAM diagram"
    width="300"
  />
</div>


---

### 🧭 Summary

- EC2 instance types are categorized by **use case** (compute, memory, storage, GPU).
- Choose an instance that balances **cost and performance** for your workload.
- You can **resize** or **change instance types** anytime to optimize usage.
