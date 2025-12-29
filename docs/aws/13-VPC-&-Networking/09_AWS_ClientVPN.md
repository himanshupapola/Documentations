---
title: 09. AWS Client VPN
sidebar_label: A9. AWS Client VPN
sidebar_position: 9
---

# AWS Client VPN

AWS **Client VPN** enables you to securely connect your local computer to your **AWS VPC** network over the internet using **OpenVPN** technology.

Once connected, your computer behaves as if it is part of the private VPC network — allowing you to access private resources such as EC2 instances via their **private IP addresses**.

## Why Use Client VPN

| Scenario                      | Benefit                                                               |
| ----------------------------- | --------------------------------------------------------------------- |
| Access private EC2 instances  | Connect using private IPs without public exposure                     |
| Secure developer/admin access | Encrypted tunnel ensures traffic privacy                              |
| Unified access                | Combine with Site-to-Site VPN for on-prem + cloud connectivity        |
| Centralized authentication    | Integrate with Active Directory or AWS IAM for secure user management |

---

## How It Works

1. **Client side:**

   - You install an **OpenVPN-compatible client** on your computer.
   - You use AWS-provided configuration files to connect.

2. **AWS side:**
   - You create a **Client VPN endpoint** in a VPC.
   - You associate it with target subnets.
   - You define **authorization rules** and **security groups**.

---
## Hybrid Access (Advanced)

If your **VPC** is connected to your **on-premises data center** using **Site-to-Site VPN** or **AWS Direct Connect**,  
then connecting via **Client VPN** also gives you secure access to **on-prem servers** through the same private network.

## Key Benefits

✅ Secure remote access to AWS private resources  
✅ Supports AD/IAM-based authentication  
✅ Integrates with AWS CloudWatch for logging  
✅ Scales automatically with user connections

## Example Use Case

- Developer needs SSH access to private EC2 instances (no public IPs).
- The company sets up **AWS Client VPN**, associates it with the private subnet,  
  and the developer connects using the `.ovpn` configuration file.

Result: The developer can SSH into the private EC2 instance securely using its **private IP address**.
