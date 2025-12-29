---
title: 08. EC2 Image Builder
sidebar_label: A8. EC2 Image Builder
sidebar_position: 8
---

# 08. EC2 Image Builder

Amazon **EC2 Image Builder** is a fully managed AWS service used to **automate the creation, maintenance, validation, and testing** of **Amazon Machine Images (AMIs)** or **container images**. It helps keep your EC2 images **secure, consistent, and up to date** without manual effort.

This service ensures all images are built consistently and patched with the latest updates improving both **security** and **efficiency**.

---

## ⚙️ How It Works

![](/img/aws/04/image_19.png)

### 🧩 Step 1: Builder EC2 Instance

When an image build pipeline runs:

- EC2 Image Builder automatically launches a **temporary EC2 instance** (called the **Builder instance**).
- This instance:
  - Installs and updates software (e.g., Java, AWS CLI, firewalls)
  - Applies system updates and patches
  - Installs your custom application or dependencies
- Once complete, **an AMI is created** automatically from that instance.

---

### 🧩 Step 2: Testing Phase

After the AMI is created:

- EC2 Image Builder can **test** the AMI by launching a **Test EC2 instance**.
- The test instance runs predefined checks to verify:
  - ✅ Functionality (AMI boots and runs correctly)
  - 🔒 Security (patches and firewall rules applied)
  - ⚙️ Application Health (your app runs as expected)

You can **skip testing** if you don’t need validation.

---

### 🧩 Step 3: Distribution Phase

Once testing is successful:

- The final AMI can be **distributed across multiple AWS Regions**.
- This enables **global availability** and consistent deployment environments.

---

## ⏰ Scheduling Options

You can define when the image build pipeline runs:

| Mode               | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| 🕐 **Scheduled**   | Run automatically on a recurring schedule (e.g., weekly).   |
| ⚙️ **Manual**      | Trigger builds manually when needed.                        |
| 🔔 **Event-based** | Run automatically when packages or base images are updated. |

---

## 💵 Pricing

EC2 Image Builder is **free** to use.  
You only pay for the **underlying AWS resources** that the service uses during the build and test process.

| Resource                 | Billed For                                      |
| ------------------------ | ----------------------------------------------- |
| EC2 Instances            | Builder and test instances (running time only). |
| AMI Storage              | Storage cost for AMIs and snapshots.            |
| Cross-Region Replication | Standard inter-region data transfer charges.    |
