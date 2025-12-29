---
title: 01. S3 Overview
sidebar_label: A1. S3 Overview
sidebar_position: 1
---

# 01. S3 Overview

**Amazon S3 (Simple Storage Service)** is one of the **core building blocks of AWS**. It provides **infinitely scalable object storage**, used for data backup, hosting, analytics, and integrations with other AWS services.

Amazon S3 is a **managed storage service** that allows you to **store and retrieve any amount of data from anywhere**.

---
### Key Features:

- High durability and availability
- Virtually unlimited scalability
- Integration with other AWS services

---
### 🌍 Common Use Cases

| Use Case                      | Description                                                     |
| ----------------------------- | --------------------------------------------------------------- |
| 🗂️ **Backup & Storage**       | Store files and data backups reliably.                          |
| 🌀 **Disaster Recovery**      | Replicate data across regions for failover protection.          |
| 🏛️ **Archival Storage**       | Store infrequently accessed data using S3 Glacier.              |
| 🔗 **Hybrid Cloud Storage**   | Extend on-premises storage to AWS.                              |
| 🧠 **Data Lake**              | Centralized data repository for analytics and machine learning. |
| 🌐 **Static Website Hosting** | Host static sites directly from S3.                             |
| 📦 **Software Delivery**      | Distribute software updates or binaries.                        |
| 🎥 **Media Hosting**          | Store and serve images, videos, and documents.                  |

---
### 🪣 Buckets in Amazon S3

All files in Amazon S3 are stored in **buckets**, which act like **top-level directories**.

#### Key Points

- Amazon S3 allows people to store objects (files) in “buckets” (directories).
- **Bucket names must be globally unique** across all AWS accounts and regions.
- S3 looks like a global service but buckets are created in **specific AWS region**

---
### Bucket Naming Rules

| Rule                                                        | 
| ----------------------------------------------------------- |
| No uppercase letters or underscores (`_`)                   |
| 3-63 characters long                                        |
| Not an IP                                                   |
| Must start with a lowercase letter or number                |
| Allowed characters: lowercase letters, numbers, and hyphens |

---
### 📦 Objects and Keys

An **S3 Object** is the **fundamental data entity** stored in Amazon S3.

Each object consists of:

- **Key** – the unique identifier (like a file path)
- **Value** – the data/content
- **Metadata** – system or user-defined info
- **Tags** – key-value pairs for classification
- **Version ID** – unique ID for each version (if versioning is enabled)


---
### 🔑 Object Keys

- Each object in a bucket has a **unique key** (its full path):
  - s3://my-bucket/my_file.txt
  - s3://my-bucket/my_folder1/another_folder/my_file.txt
- The **key** = `prefix` + `object name`
  - Prefix: my_folder1/another_folder/
  - Object name: my_file.txt
- **No real directories** exist, S3 uses **flat storage**.
- The AWS Console **simulates folders** using `/` in object keys.

---
### 📦 Object / Values

- The **value** is the **content (object iteself)** of the file.
- **Maximum Object Size:** `5 TB (5000 GB)`
- **Single PUT upload limit:** `5 GB`
- For larger files → use **Multi-Part Upload** (uploads in parts for reliability and speed).

---
### 🚀 Summary

| Concept       | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| **Bucket**    | Container for objects                                        |
| **Key**       | Full path name of an object                                  |
| **Object**    | File content + metadata                                      |
| **Region**    | Buckets exist in a specific AWS region                       |
| **Use Cases** | Backup, data lake, static hosting, archival, analytics, etc. |

---
### 🧠 Key Takeaways

- S3 provides **scalable, durable, and flexible object storage**.
- Buckets are **regional** but names are **globally unique**.
- Objects are stored and accessed using **keys** (paths).
- Use **Multipart Upload** for files larger than 5 GB.
- S3 supports **metadata, tagging, and versioning** for efficient management.

---
