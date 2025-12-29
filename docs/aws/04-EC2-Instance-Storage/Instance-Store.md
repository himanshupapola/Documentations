---
title: 03. EC2 Instance Store
sidebar_label: A3. EC2 Instance Store
sidebar_position: 3
---

# 03. 💾 EC2 Instance Store

The network attached drive EBS have a latency issue, it's goood but limited in perfomance.

The **EC2 Instance Store** provides **temporary block-level storage** that is **physically attached** to the host server running your EC2 instance. It delivers **very high I/O performance** and **low latency**, making it ideal for workloads that require fast, transient data access.

---

| Feature | Description |
|----------|-------------|
| **Type** | Ephemeral (temporary) block storage |
| **Attached To** | Physical host server hardware |
| **Performance** | Extremely high I/O throughput |
| **Persistence** | Lost when instance stops, terminates, or host fails |
| **Use Cases** | Caching, buffers, temporary data, scratch space |

--- 

### ⚙️ How It Works

When you launch a specific EC2 instance type (like the **I3**, **I4i**, or **D2** families),  
AWS attaches **Instance Store volumes** that reside **on disks physically connected** to the host computer.

Unlike **EBS (Elastic Block Store)**, which is **network-attached** and **persistent**,  
the **Instance Store** is **local to the machine** — providing much faster disk performance.

> ⚠️ **Important:** Data on Instance Store is *lost* if:
> - The instance stops or terminates  
> - The underlying hardware fails

---

### 🚀 Performance

| Storage Type | Example Instance | Read IOPS | Write IOPS |
|---------------|------------------|------------|-------------|
| **Instance Store (I3)** | i3.16xlarge | 3.3 million | 1.4 million |
| **EBS (gp2)** | General Purpose SSD | ~32,000 | ~32,000 |

As seen above, **Instance Store** provides **magnitudes higher performance** than EBS volumes.

---

### 🧠 Use Cases

| Scenario | Why Instance Store Works Best |
|-----------|------------------------------|
| **Cache / Buffer storage** | High-speed, temporary data access |
| **Scratch / Temp space** | Short-lived data used during processing |
| **High-performance DB caching** | Fast reads/writes without persistence need |
| **Big data / analytics workloads** | Fast local read/write operations |

---

## ⚠️ Limitations

- ❌ Data is **not persistent** (lost on stop/termination)  
- ❌ Cannot be **detached or reattached** to another instance  
- ⚠️ You are **responsible** for backups and data replication if needed  
- 📦 Not available on all instance types

---

## 🧾 Summary

| Feature | Instance Store | EBS Volume |
|----------|----------------|------------|
| **Storage Type** | Local physical disks | Network-attached disks |
| **Performance** | Extremely high | High (depends on type) |
| **Persistence** | Ephemeral | Persistent |
| **Backup Responsibility** | User-managed | AWS-managed (snapshots) |
| **Typical Use Case** | Cache, temp data, scratch space | Long-term data storage |

---

## 🧠 Key Exam Tip

Whenever you see:
> "High-performance, low-latency storage" or "ephemeral storage attached to EC2"

➡️ Think **EC2 Instance Store** — not EBS.

