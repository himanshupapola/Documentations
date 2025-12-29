---
title: 06. EBS Snapshot
sidebar_label: A6. EBS Snapshot
sidebar_position: 6
---

# 06. 💾 EBS Snapshot

An **EBS Snapshot** is a **point-in-time backup** of an EBS volume. You can create it anytime — detaching the volume is optional but recommended.

Snapshots can be **copied across Availability Zones or Regions**.

![](/img/aws/04/image_10.png)

Useful for **backup, restore, and migration** of volumes.

![](/img/aws/04/image_05.png)


---
## ⚙️ EBS Snapshot Features

### 🗄️ EBS Snapshot Archive

- Move snapshots to an **archive tier** (up to **75% cheaper**).
- **Restore time:** 24–72 hours.

### 🧺 Recycle Bin for Snapshots

- Retain deleted snapshots for **accidental recovery**.
- Configure **retention policies** (from **1 day to 1 year**).

---
## 🪄 Creating an EBS Snapshot

### 🪜 Steps

1. Go to **EC2 Dashboard → Elastic Block Store → Volumes**.

2. Select the volume you want to back up.
3. Click **Actions → Create Snapshot**.  
![](/img/aws/04/image_08.png)
4. (Optional) Add a **Description** or **Tags** for identification.
5. Click **Create Snapshot**.
![](/img/aws/04/image_09.png)

> 💡 You don’t need to detach the volume to take a snapshot but it’s **recommended** to ensure data consistency.

---
### 🔁 Copying an EBS Snapshot

### 🪜 Steps

1. Go to **EC2 Dashboard → Elastic Block Store → Snapshots**.
2. Select the snapshot you want to copy.
3. Click **Actions → Copy Snapshot**.
4. Choose the **Destination Region** or **Availability Zone**.
5. (Optional) Encrypt the copy or add tags.
![](/img/aws/04/image_10.png)
6. Click **Copy Snapshot**.


---
### 🎯 Why Copy a Snapshot?


| Reason                  | Description                                                               |
| ----------------------- | ------------------------------------------------------------------------- |
| **Cross-Region Backup** | Protect data from regional failures by keeping backups in another Region. |
| **Migration**           | Move EBS volumes or AMIs to a different Region for deployment.            |
| **Sharing**             | Copy and share snapshots with other AWS accounts.                         |
| **Compliance**          | Maintain geographically distributed backups for disaster recovery.        |

---
## 💽 Creating a Volume from a Snapshot

### 🪜 Steps

1. Go to **EC2 Dashboard → Elastic Block Store → Snapshots**.
2. Select the snapshot you want to restore.
3. Click **Actions → Create Volume from Snapshot**.
4. Choose:
   - **Volume Type** (e.g., `gp3`, `io2`)
   - **Size** (can be larger than the snapshot)
   - **Availability Zone** (where you’ll attach the instance)
5. Click **Create Volume**.
![](/img/aws/04/image_11.png)
![](/img/aws/04/image_12.png)

### 🎯 Why Create a Volume from a Snapshot?



| Use Case          | Description                                      |
| ----------------- | ------------------------------------------------ |
| **Data Recovery** | Restore data from a previous backup.             |
| **Cloning**       | Create identical volumes for testing or scaling. |
| **Migration**     | Recreate the volume in another Region or AZ.     |

---
## 🧺 Creating a Retention Rule for Recycling Snapshots, Volumes or AMI

### 🪜 Steps

1. Go to **EC2 Dashboard → Elastic Block Store → Recycle Bin**.
2. Click **Create Retention Rule**.
3. Under **Resource Type**, select **EBS Snapshots**.
4. Set:
   - **Retention Period:** e.g., `7 days`, `30 days`, or up to `1 year`.
   - **Resource Tags:** define which snapshots the rule applies to.
5. Click **Create Rule**.
![](/img/aws/04/image_13.png)
6. Now any deleted snapshot will go to recycle bin first.
