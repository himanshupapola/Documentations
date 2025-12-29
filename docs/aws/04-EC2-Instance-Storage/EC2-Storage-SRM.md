---
title: 09. EC2 SRM
sidebar_label: A9. EC2 SRM
sidebar_position: 9
---


# 9. SRM for EC2 Storage


---
## ☁️ AWS Responsibilities

AWS is responsible for securing and maintaining the **storage infrastructure** that supports your EC2 instances, including:

- Managing the **underlying infrastructure** for EBS volumes, EFS drives, and Instance Store
- Handling **data replication** for durability across Availability Zones (for EBS/EFS)
- **Replacing faulty hardware** and maintaining physical security of storage devices
- Ensuring **AWS employees cannot access your data**
- Maintaining **compliance and resilience** of the storage environment

---

## 👩‍💻 Your Responsibilities

You are responsible for how data is **stored, protected, and managed** on your EC2 storage, including:

- Setting up **backup and snapshot** procedures for your EBS volumes and EFS drives  
- Enabling and managing **data encryption** (at rest and in transit)
- Implementing proper **access control** and permissions for stored data
- Taking responsibility for the **data stored** on your drives — including integrity, privacy, and recovery
- Understanding and mitigating the **risks of using EC2 Instance Store**, such as data loss when the instance stops or terminates

> 🧠 **Tip:** AWS secures the storage infrastructure — you secure the **data** itself. Always plan for backups, encryption, and access control.
