---
title: 09. Snow Family & HCS
sidebar_label: A9. Snow Family & HCS
sidebar_position: 9
---

# 09. AWS Snow Family & Hybrid Cloud Storage

The **AWS Snow Family** consists of **highly secure, portable, and rugged devices** that help you **collect, process, and migrate data** into and out of AWS — especially when internet transfer is slow, expensive, or unreliable.

It also enables **edge computing**, allowing data processing at remote or disconnected locations (ships, trucks, mines, etc.).

---
### 🧩 AWS Snow Family Overview

| Device                                | Use Case                             | Capacity         | Transfer Mode    | Key Features                                         |
| :------------------------------------ | :----------------------------------- | :--------------- | :--------------- | :--------------------------------------------------- |
| **Snowcone**                          | Small edge computing & data transfer | 8 TB usable      | Offline / Online | Lightweight (2.1 kg), rugged, supports battery power |
| **Snowball Edge (Storage Optimized)** | Data migration, storage              | 80 TB usable     | Offline          | High-capacity HDD, S3-compatible storage             |
| **Snowball Edge (Compute Optimized)** | Edge computing                       | 42 TB usable     | Offline          | 52 vCPUs, 208 GiB RAM, optional GPU                  |
| **Snowmobile**                        | Massive data migration               | 100 PB per truck | Offline          | Exabyte-scale transfer, extreme security             |

---
## 🚚 Data Migration Use Cases

If transferring large datasets (TBs or PBs) over the internet takes too long, **Snowball devices** provide a **physical transport alternative**.

### ⚙️ How Snowball Data Migration Works

1. **Request Device** – Order from AWS Console.
2. **Receive Device** – AWS ships Snowball to your site.
3. **Connect & Load Data** – Use **Snowball Client** or **AWS OpsHub** to transfer data.
4. **Return Device** – Ship back to AWS; shipping is free.
5. **AWS Imports Data** – Data is moved into your S3 bucket.
6. **Device Sanitized** – Data wiped securely per NIST standards.


---
## 🧠 Edge Computing with Snow Family

**Edge computing** allows data to be processed **where it’s created**, minimizing latency and bandwidth use.

### 🏗️ Example Scenarios

- Ship at sea with no internet
- Truck generating telemetry data
- Remote mining operation

### 💡 Benefits

- Preprocess data before uploading
- Run **machine learning inference** locally
- Transcode media or compress files offline

### 💻 Compute Capabilities

| Device                              | vCPUs | Memory  | Storage | Notes                     |
| :---------------------------------- | :---: | :-----: | :-----: | :------------------------ |
| **Snowcone**                        |   2   |  4 GiB  |  8 TB   | Wired/wireless access     |
| **Snowball Edge Compute Optimized** |  52   | 208 GiB |  42 TB  | Optional GPU              |
| **Snowball Edge Storage Optimized** |  40   | 80 GiB  |  80 TB  | Object storage clustering |

🧩 Both can **run EC2 instances & AWS Lambda functions** via **AWS IoT Greengrass**.


---
## 🧰 AWS OpsHub

**AWS OpsHub** is a GUI application used to manage Snow Family devices (replaces CLI-only setup).

### 🔧 Features

- Unlock & configure devices
- Transfer files
- Launch/manage EC2 instances or Lambda functions
- Monitor storage & performance
- Access compatible services (e.g., **AWS DataSync**, **NFS**)

## 💰 Snowball Edge Pricing

| Component                   | Description                                                                  |
| :-------------------------- | :--------------------------------------------------------------------------- |
| **Service Fee (On-demand)** | One-time fee per job (includes 10–15 days of use)                            |
| **Extra Day Charges**       | Charged per day beyond included usage                                        |
| **Shipping**                | Free (to/from AWS)                                                           |
| **Data Import to S3**       | **$0 per GB** (free)                                                         |
| **Data Export from S3**     | Charged per GB transferred out                                               |
| **Long-Term Commitment**    | Monthly, 1-year, or 3-year plans for edge computing (up to **62% discount**) |

---
## 🧱 Hybrid Cloud Storage

AWS promotes **hybrid cloud** setups where part of infrastructure is on-premises and part in the AWS Cloud.

#### 🏢 Why Hybrid?

- Long-term migration strategy
- Security or compliance needs
- Data sovereignty
- Gradual cloud adoption


---
### 🔗 AWS Storage Gateway

**AWS Storage Gateway** bridges **on-premises storage systems** and **AWS Cloud** storage.

| Type               | Description                                         | Backend AWS Storage               |
| :----------------- | :-------------------------------------------------- | :-------------------------------- |
| **File Gateway**   | Store and access files as objects in S3             | S3                                |
| **Volume Gateway** | Block-level storage volumes (cached or stored mode) | EBS + S3                          |
| **Tape Gateway**   | Virtual tape library for backup software            | Glacier & S3 Glacier Deep Archive |

### 🧩 Use Cases

- Backup & restore
- Disaster recovery
- Cloud tiering
- Extending on-premises storage seamlessly

## 🧾 AWS Storage Categories Summary

| Category                   | AWS Service         | Description                              |
| :------------------------- | :------------------ | :--------------------------------------- |
| **Block Storage**          | EBS, Instance Store | Low-latency volumes for EC2              |
| **File Storage**           | EFS                 | Shared, scalable file system (NFS)       |
| **Object Storage**         | S3, Glacier         | Store data as objects (key/value pairs)  |
| **Hybrid Storage**         | Storage Gateway     | Bridge on-premises & AWS Cloud           |
| **Physical Data Transfer** | Snow Family         | Offline data migration or edge computing |

---

## 🧭 Exam Tips (AWS Certified Cloud Practitioner)

✅ Use **Snow Family** for **large data transfers** (TB–PB scale) or **edge processing**.  
✅ Use **Snowmobile** for **exabyte-scale migrations**.  
✅ Use **Storage Gateway** for **hybrid storage integration**.  
✅ **Data import into S3 is always free.**
