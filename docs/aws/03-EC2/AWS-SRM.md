---
title: 09. EC2 SRM
sidebar_label: A9. EC2 SRM
sidebar_position: 9
---

# 09. 🖥️ Shared Responsibility Model for EC2

---

### ☁️ AWS Responsibilities

AWS is responsible for securing the **infrastructure** that runs your EC2 instances, including:

- Global network and data center security
- Isolation on physical hosts
- Replacing faulty hardware
- Compliance validation

---

### 👩‍💻 Your Responsibilities

You are responsible for securing and managing everything **inside and around** your EC2 instances, including:

- Configuring **Security Groups** and network access rules
- Applying **operating system patches and updates**
- Managing **software and utilities** installed on your EC2 instances
- Assigning appropriate **IAM Roles** to EC2 and managing IAM user access
- Ensuring **data security** on your instance (encryption, backups, access control)

> 🧠 **Tip:** Treat your EC2 instance like a physical server — you’re responsible for what runs inside it, while AWS secures the infrastructure beneath it.
