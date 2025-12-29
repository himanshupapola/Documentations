---
title: 04. VPC Network Security
sidebar_label: A4. VPC Network Security
sidebar_position: 4
---

# 🔒 04. Network Security in a VPC

In AWS, **network security** within a **VPC (Virtual Private Cloud)** is controlled primarily by two mechanisms:

- **Network ACLs (NACLs)** — subnet-level firewalls
- **Security Groups** — instance-level firewalls

Both play different roles in protecting resources like **EC2 instances** within your VPC.

---

## 1. Network ACL (NACL)

A **Network Access Control List (NACL)** is a **firewall that operates at the subnet level**.

A network access control list (network ACL) contains a numbered list of rules and evaluates these rules in the increasing order while deciding whether to allow the traffic

It controls traffic from and to subnet. NACL is stateless i.e. return traffic must be explicitly allowed

| Property         | Description                                             |
| ---------------- | ------------------------------------------------------- |
| Level            | Subnet                                                  |
| Rules Type       | ALLOW and DENY                                          |
| Stateless        | Return traffic must be explicitly allowed               |
| Association      | One NACL per subnet (can be shared by multiple subnets) |
| Rule Scope       | Based on IP addresses                                   |
| Default Behavior | Default NACL allows all inbound and outbound traffic    |

#### 🧩 Example

When a packet enters a subnet:

1. It’s first evaluated by the **NACL rules**.
2. If allowed, it proceeds to the **EC2 instance**’s **security group**.

**Diagram (placeholder):**
Internet → NACL (Subnet-level filter) → Security Group → EC2 Instance

---

## 2. Security Group

A **Security Group** acts as a **virtual firewall for EC2 instances**, controlling **inbound and outbound traffic**. It's statefull, return traffic is auto allowed.

| Property         | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| Level            | Instance                                                                   |
| Rules Type       | ALLOW only                                                                 |
| Stateful         | Return traffic is automatically allowed                                    |
| Rule Scope       | IP addresses and other security groups                                     |
| Default Behavior | By default, all inbound traffic is denied; all outbound traffic is allowed |

---

### Comparison: NACL vs Security Group

| Feature              | Network ACL                            | Security Group                |
| -------------------- | -------------------------------------- | ----------------------------- |
| **Level**            | Subnet                                 | Instance                      |
| **Rule Types**       | ALLOW & DENY                           | ALLOW only                    |
| **Statefulness**     | Stateless                              | Stateful                      |
| **Return Traffic**   | Must be explicitly allowed             | Automatically allowed         |
| **Scope**            | Applies to all resources in the subnet | Applies to specific instances |
| **Evaluation Order** | Rules processed in numerical order     | All rules evaluated together  |

---

### Example: Default NACL Rules

| Rule # | Type | Protocol | Port Range | Source    | Action |
| ------ | ---- | -------- | ---------- | --------- | ------ |
| 100    | ALL  | ALL      | ALL        | 0.0.0.0/0 | ALLOW  |
| \*     | ALL  | ALL      | ALL        | ALL       | DENY   |

📌 **Explanation:**

- **Rule 100** allows all inbound traffic.
- The **‘\*’ rule** is the implicit DENY for all other unmatched traffic.
