---
title: 03. AWS CloudFront
sidebar_label: A3. AWS CloudFront
sidebar_position: 3
---

# 🌍 03. AWS CloudFront

AWS **CloudFront** is a **Content Delivery Network (CDN)** that improves content delivery performance by caching content at **edge locations** globally.

### ⚡ Key Features

- **Faster Content Delivery:** Cached at 216+ global edge locations
- **Low Latency:** Users are served from the nearest edge location
- **DDoS Protection:** Integrated with **AWS Shield** and **AWS WAF**
- **Security:** Uses **Origin Access Control (OAC)** for secure S3/backend access
- **Global Reach:** Improves user experience worldwide

---

### ☁️ CloudFront Origins

An **Origin** is the **source of your content** — the location where CloudFront fetches your files (HTML, images, videos, etc.).

When a user requests content:

- If **cached** → served instantly from the nearest edge
- If **not cached** → fetched from origin, then cached for future use

---

### 🪣 A. Amazon S3 Bucket (Static Origin)

Used for **static files** like images, CSS, JS, and HTML.

**Key Points:**

- CloudFront fetches and caches data from S3.
- Use **OAC/OAI** to restrict access (only CloudFront can read).
- Can be configured as an **ingress path** to upload via edge → S3.

---

### 🏗️ B. VPC Origin (Private Applications)

For applications hosted in VPC private subnets

**Examples:**

- **Application Load Balancer (ALB)**
- **Network Load Balancer (NLB)**
- **EC2 Instances**

**Security:**

- Connects privately via **AWS PrivateLink** or **VPC endpoints**
- Requests pass through CloudFront (WAF, Shield) before backend access

---

### 🌐 C. Custom HTTP Origin

Used for **any HTTP/HTTPS server**, inside or outside AWS.

**Examples:**

- S3 bucket with **Static Website Hosting** enabled
- **On-premises servers**
- **Other cloud providers**

**Notes:**

- Must support **HTTP/HTTPS**
- Ideal for **hybrid** or **legacy systems**
- Can still apply **WAF** and **Shield** protections

---

<div align="center">
  <img
    src="/img/aws/10/image_07.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>

> CloudFront can connect to S3, private VPCs, or any HTTP backend — maintaining high performance, global caching, and strong security.

---

## ⚖️ CloudFront vs S3 Cross-Region Replication (CRR)

| **Feature**          | **CloudFront**                    | **S3 Cross-Region Replication (CRR)** |
| -------------------- | --------------------------------- | ------------------------------------- |
| **Purpose**          | CDN for **fast content delivery** | **Replicates** data between regions   |
| **Network**          | AWS **Global Edge Network**       | Requires manual region setup          |
| **Data Behavior**    | **Cached temporarily**            | **Copied permanently**                |
| **Update Frequency** | Based on **TTL (cache duration)** | **Near real-time replication**        |
| **Access**           | Read-only cached copies           | Full replicated copies                |
| **Best For**         | Static content (images, JS, CSS)  | Dynamic or synced regional data       |
| **Example**          | Global website delivery           | Data backup / multi-region sync       |

🧠 **In short:**

> - **CloudFront** = Global caching → fast reads
> - **S3 CRR** = Data replication → regional consistency

---

## 🚀 CloudFront + S3 Demo

In this demo, we configure **CloudFront** to serve files securely from a **private S3 bucket** using **Origin Access Control (OAC)**.

### 🧩 Step 1: Create CloudFront Distribution

- Open **CloudFront → Create Distribution**
- Select your **S3 bucket** as origin (e.g., `demo-cloudfront-himanshu-v4`)
- Keep **Origin Path** index.html (files stored in root)

---

### 🔐 Step 2: Enable Origin Access Control (OAC)

- Choose **Allow, use OAC (Allow private S3 bucket access to CloudFront)**

<div align="center">
  <img
    src="/img/aws/10/image_11.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>
---

### ⚙️ Step 3: Configure Settings

- Keep default cache behavior and settings
- Disable optional **security features** (for demo/cost control)

<div align="center">
  <img
    src="/img/aws/10/image_08.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>
---

### 🏗️ Step 4: Deploy Distribution

- Click **Create Distribution**
- Wait until status = **“Deployed”**
- CloudFront is now active globally

---

### 🔍 Step 5: Verify S3 Bucket Policy

- Open **S3 → Permissions → Bucket Policy**
- Confirm CloudFront automatically added permissions  
  (only your CloudFront distribution can read from S3)

<div align="center">
  <img
    src="/img/aws/10/image_09.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>

---

### 🌐 Step 6: Test CloudFront Domain

- Copy CloudFront domain (e.g., `dxxxx.cloudfront.net`)
- Test the URLs:
  - `/coffee.jpg`
  - `/beach.jpg`
  - `/index.html`

✅ Files load successfully — served via CloudFront, not directly from S3.

### 📈 What Happened

---

- CloudFront created a **secure connection** to S3 via **OAC**
- **S3 bucket policy** was updated to block public access
- Requests flow:
  1. User → **CloudFront Edge**
  2. CloudFront → **S3 (private access)**
  3. File cached → Served globally
- Next requests load **instantly** from the nearest edge location

## 🏁 Result

✅ **S3 bucket** stays private  
✅ **CloudFront** serves files securely and globally  
✅ **Caching** boosts performance and reduces cost  
✅ Setup is **automated** and **easy to manage**
