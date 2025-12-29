---
title: 01. EC2 Storage Options
sidebar_label: A1. EC2 Storage Options
sidebar_position: 1
---

# 01. EC2 Storage Options

Amazon EC2 supports several **storage options**, each designed for different performance, durability, and cost requirements. These storage types can be combined to meet application-specific needs from high-performance computing to large-scale data storage.

---
| 🗂️ **Type** | 📝 **Description** | 🧱 **Durability** | ⚡ **Performance** | 💡 **Example** |
|----------------------|--------------------|-------------------|--------------------|--------------------------|
| **EBS (Elastic Block Store)** | Network-attached storage that persists independently of the EC2 instance. | Persistent | High (depends on volume type) | Databases, file systems, application data |
| **Instance Store** | Physically attached storage providing **very high I/O performance** (local to the host). | Ephemeral (lost when instance stops or terminates) | Extremely High | Cache, temporary files, buffer, scratch data |
| **EFS (Elastic File System)** | Managed **shared file system** for Linux instances. Scales automatically as files are added or removed. | Persistent | Moderate | Shared storage, web content, containerized workloads |
| **S3 (Simple Storage Service)** | Object storage with **11 nines durability**, infinite scalability, and low cost. | Persistent | Variable | Backups, static websites, data lakes, logs |
| **FSx (Amazon FSx)** | Fully managed **file system service** providing native **Windows File Server** and **Lustre** for HPC workloads. | Persistent | Very High (optimized for workload type) | Windows apps, HPC, machine learning, data analytics |
---
## ☁️ Amazon EC2 Storage Architecture

EC2 instances can attach to or interact with multiple storage types depending on requirements:

- **EBS Volumes** → Persistent block storage over the network.  
- **Instance Store** → Local disks with ultra-fast I/O performance.  
- **EFS** → Elastic file system for Linux shared workloads.  
- **FSx** → Fully managed Windows or high-performance Lustre file system.  
- **S3** → Object storage for backups, archives, and static data.

