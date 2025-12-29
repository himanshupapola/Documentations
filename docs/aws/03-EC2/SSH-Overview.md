---
title: 06. SSH Overview
sidebar_label: A6. SSH Overview
sidebar_position: 6
---

# ⚙️ 06. SSH Overview and Connecting to EC2


**SSH (Secure Shell)** is a protocol used to securely connect to and manage remote servers such as **Amazon EC2 instances**. It provides encrypted communication between your local computer and the remote instance.

In AWS, SSH is primarily used to connect to **Linux-based EC2 instances**. For Windows instances, you typically use **RDP (Remote Desktop Protocol)** instead.

---
### 🔑 How SSH Works

- SSH uses a **key pair** (Public + Private key) for authentication instead of passwords.  
- When you launch an EC2 instance, you can:
  - **Create a new key pair**, or  
  - **Use an existing one**.  
- The **private key (`.pem` file)** is downloaded once — it must be kept safe.  
- AWS stores the **public key** inside the EC2 instance to allow access.  

When you connect, AWS verifies that your private key matches the public key on the instance.

---

### 🧰 Common SSH Commands (and SCP File Transfer)

#### 🔹 Connect to EC2 Using SSH

```bash
# Basic SSH connection to EC2
ssh -i "my-key.pem" ec2-user@<Public-IP-Address>

# Example
ssh -i "aws-key.pem" ec2-user@13.233.25.10

```
---
### ⚙️ SFTP (SSH File Transfer Protocol)

**SFTP (SSH File Transfer Protocol)** is a secure method for transferring files between your **local computer** and a **remote EC2 instance** over an **encrypted SSH connection**. It provides more control than `scp` — allowing you to browse directories, upload, download, rename, and delete files interactively.

Unlike traditional FTP (which uses port 21), **SFTP runs over port 22** (the same as SSH), ensuring both **data encryption** and **authentication**.

---
### 🔑 How SFTP Works

- Uses the **same SSH protocol** for secure communication.
- Authentication is done using your **EC2 key pair (.pem file)**.
- You can connect via the command line or GUI tools (like **FileZilla**, **WinSCP**, or **Cyberduck**).
- Ideal for **large file transfers**, **resumable uploads**, and **interactive directory navigation**.

---


### 🧰 Common SFTP Commands

```bash
# Connect to EC2 using your private key
sftp -i "my-key.pem" ec2-user@<Public-IP-Address>

# Upload a file to EC2
put localfile.txt /home/ec2-user/

# Download a file from EC2
get /home/ec2-user/output.log

# Change local and remote directories
lcd /Users/himanshu/Documents
cd /var/www/html

