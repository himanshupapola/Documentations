---
title: 03. S3 Bucket Policy Create
sidebar_label: A3. S3 Bucket Policy Create
sidebar_position: 3
---

# 🌐 03. S3 Bucket Policy Hands On

In this hands-on, we’ll make an **S3 bucket publicly accessible** so that files (e.g., `coffee.jpg`) can be viewed via a **public URL**.

---

### 🧩 01. Allow Public Access

1. Go to your **S3 bucket → Permissions tab**.
2. Under **Block Public Access**, click **Edit**.
3. **Untick** all options that block public access.
4. Confirm by clicking **Save changes**.

> ⚠️ Only disable this if you intentionally want a **public bucket** (e.g., for static website hosting).

---

### 🧱 02. Create a Bucket Policy

1. Scroll to **Bucket Policy** and click **Edit Policy**.
2. Use the **AWS Policy Generator**:

   - **Select Type:** S3 Bucket Policy
   - **Effect:** Allow
   - **Principal:** `*`
   - **Action:** `s3:GetObject`
   - **ARN:** `arn:aws:s3:::your-bucket-name/*`

3. Generate and copy the JSON.

---

### 🧾 03. Example Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadAccess",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

4. Paste this JSON into the **Bucket Policy Editor** and **Save changes**.
5. Ensure there are **no extra spaces or syntax errors**.

<div align="center">
  <img
    src="/img/aws/06/image_01.png"
    alt="IAM Roles Example"
  />
</div>
<div align="center">
  <img
    src="/img/aws/06/image_02.png"
    alt="IAM Roles Example"
  />
</div>

---
### 🌍 04. Verify Public Access

1. Go to **Objects** → select your file (e.g., `coffee.jpg`).
2. Copy the **Object URL**.
3. Open it in a browser.  
   ✅ If configured correctly, the image should display publicly.

<div align="center">
  <img
    src="/img/aws/06/image_03.png"
    alt="IAM Roles Example"
    width= "400px"
  />
</div>

---
### 🧠 Summary

| **Step** | **Action**                        | **Purpose**                   |
| -------- | --------------------------------- | ----------------------------- |
| 1        | Disable Block Public Access       | Allow public policies to work |
| 2        | Create Policy with `Principal: *` | Grant global read access      |
| 3        | Apply Policy                      | Make bucket objects public    |
| 4        | Test URL                          | Confirm accessibility         |

📌 **Result:** Your `coffee.jpg` file (and other objects) are now publicly viewable via a direct S3 URL.
