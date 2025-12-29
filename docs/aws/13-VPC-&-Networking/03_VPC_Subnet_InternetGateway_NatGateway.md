---
title: 03. VPC, Subnet, IG, NAT
sidebar_label: A3. VPC,Subnet,IG,NAT
sidebar_position: 3
---

---

## 🛜 Amazon VPC Overview

A **VPC (Virtual Private Cloud)** is your **own private network inside AWS** — an isolated section of the AWS Cloud where you can launch resources such as EC2 instances.

- It’s **region-specific** — each AWS Region can have its own VPCs.
- It provides full control over your **networking environment**, including:
  - IP address range (CIDR block)
  - Subnets
  - Route tables
  - Internet connectivity
  - Security (Security Groups & Network ACLs)

---

## 🌐 Subnets

A **Subnet** is a **segment within your VPC** — it partitions your network into smaller sections.

Each subnet is:

- Associated with **one Availability Zone (AZ)**.
- Used to organize resources based on accessibility.

| Subnet Type        | Description                      | Typical Usage                  |
| ------------------ | -------------------------------- | ------------------------------ |
| **Public Subnet**  | Connected to an Internet Gateway | Web servers, Load balancers    |
| **Private Subnet** | No direct internet access        | Databases, Application servers |

<div align="center">
  <img
    src="/img/aws/13/image_01.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>

---

## 🚦 Route Tables

To define access to the internet and between subnets, we use Route tables.

**Route Tables** define **how traffic flows** within the VPC and outside of it.

- Every subnet is associated with a route table.
- Routes determine whether a subnet is public or private.

Example:

| Destination | Target  | Meaning                               |
| ----------- | ------- | ------------------------------------- |
| 10.0.0.0/16 | local   | Internal traffic within VPC           |
| 0.0.0.0/0   | igw-123 | Route to the Internet (public subnet) |

<div align="center">
  <img
    src="/img/aws/13/image_02.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

---

## 🌍 Internet Gateway (IGW)

An **Internet Gateway** allows **resources in public subnets** to:

- Send traffic to the internet.
- Receive traffic from the internet.

**Key Points:**

- Must be **attached** to a VPC.
- **Public subnets** have a route to the IGW.
- **Private subnets** do _not_.

**Example Route Table (Public Subnet):**
| Destination | Target |
|--------------|---------|
| 0.0.0.0/0 | igw-12345 |

---

## 🔁 NAT Gateway (Network Address Translation Gateway)

A **NAT Gateway** allows **instances in private subnets** to:

- Access the internet **outbound only** (e.g., OS updates, package downloads).
- Remain **inaccessible from the internet inbound**.

**Setup:**

1. Create a NAT Gateway in a **public subnet**.
2. Add a route in the **private subnet’s route table** that points to the NAT Gateway.
3. The NAT Gateway then forwards traffic through the **Internet Gateway**.

**Example Route Table (Private Subnet):**
| Destination | Target |
|--------------|---------|
| 0.0.0.0/0 | nat-67890 |

## 🧠 Example Architecture

<div align="center">
  <img
    src="/img/aws/13/image_03.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>

**Traffic Flow:**

1. Internet → IGW → Public Subnet → Web Server.
2. Web Server → Private Subnet → Database.
3. Private Subnet → NAT Gateway → IGW → Internet (for updates).

---

## 📊 Summary Table

| Component            | Description                                        | Internet Access       | Typical Placement |
| -------------------- | -------------------------------------------------- | --------------------- | ----------------- |
| **VPC**              | Virtual private network in AWS                     | Controlled by design  | Region-wide       |
| **Subnet**           | Logical partition inside a VPC                     | Depends on routing    | Per AZ            |
| **Internet Gateway** | Enables internet access for public subnets         | ✅ Inbound + Outbound | Public Subnet     |
| **NAT Gateway**      | Allows private subnets to access internet outbound | ✅ Outbound only      | Public Subnet     |

---

✅ **In short:**

- **VPC** = your private cloud network.
- **Subnets** = logical divisions (public or private).
- **Internet Gateway** = entry/exit to the internet.
- **NAT Gateway** = outbound-only access for private subnets.
