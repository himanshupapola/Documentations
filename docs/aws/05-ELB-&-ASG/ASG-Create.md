---
title: 05. Creating ASG
sidebar_label: A5. Creating ASG
sidebar_position: 5
---

# 05. Create an ASG

In this project, we will:

- Create an **Application Load Balancer (ALB)** and a **Target Group**.
- Create a **Launch Template** to define EC2 instance settings.
- Create an **Auto Scaling Group (ASG)** that automatically manages EC2 instances behind the ALB.
- Test automatic scaling and self-healing behavior.

---
## 🌐 01. Create a Target Group

1. Navigate to **EC2 Console → Target Groups → Create Target Group**.
2. **Target type:** `Instances`
3. **Name:** `demo-tg-alb`
4. **Protocol:** `HTTP`
5. **Port:** `80`
6. **VPC:** Select your default VPC.
7. Click **Next**.
8. Skip registering targets for now.
9. Click **Create target group**.

<div align="center">
  <img
    src="/img/aws/05/ASG/image_01.png"
    alt="IAM Roles Example"
  />
</div>

---
## 🌍 02. Create an Application Load Balancer (ALB)

1. Navigate to **EC2 Console → Load Balancers → Create Load Balancer**.
2. Choose **Application Load Balancer**.
3. **Name:** `demo-alb`
4. **Scheme:** `Internet-facing`
5. **IP address type:** `IPv4`
6. **Listeners:** Protocol `HTTP`, Port `80`
7. **VPC:** Select your default VPC.
8. **Availability Zones:** Select at least two subnets.
9. Under **Security Groups**, select or create one that allows HTTP (port 80).
10. **Target Groups:** Select existing target group `demo-tg-alb`.
11. Click **Create Load Balancer**.
<div align="center">
  <img
    src="/img/aws/05/ASG/image_02.png"
    alt="IAM Roles Example"
  />
</div>

---
## 🚀 03. Create a Launch Template

1. Navigate to **Launch Templates → Create launch template**.
2. Enter:
   - **Name:** `DemoLaunchTemplates`
   - **Version description:** `v1`
3. Under **Amazon Machine Image (AMI):**
   - Choose **Amazon Linux 2**.
4. Under **Instance type:**
   - Select **t3.micro**.
5. **Key pair:** Select _No key pair_.
6. **Network settings:**
   - Skip subnets.
   - Choose existing **Security Group:** `asg-sg` (allows HTTP).
7. Scroll to **Advanced details → User data:**
   - Paste this sample user data script:
     ```bash
     #!/bin/bash
     yum update -y
     yum install -y httpd
     systemctl start httpd
     systemctl enable httpd
     echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
     ```
8. Click **Create launch template**.

<div align="center">
  <img
    src="/img/aws/05/ASG/image_03.png"
    alt="IAM Roles Example"
  />
</div>

---
## 🧱 04. Create an Auto Scaling Group (ASG)

1. Navigate to **Auto Scaling Groups → Create Auto Scaling Group**.
2. **Name:** `DemoASG`
3. **Launch Template:** Select `DemoLaunchTemplate`.
4. Click **Next**.

<div align="center">
  <img
    src="/img/aws/05/ASG/image_04.png"
    alt="IAM Roles Example"
  />
</div>

---
## 🌐 05. Configure Network

1. **VPC:** Select your existing VPC.
2. **Subnets:** Choose at least **two Availability Zones**.
3. Leave **AZ Distribution:** `Balanced best effort`.
4. Click **Next**.

---
## ⚖️ 06. Attach Load Balancer

1. Under **Load balancing options:**
   - Choose **Attach to an existing load balancer**.
   - Select **Target Group:** `demo-tg-alb`.
2. Enable **ELB Health Checks**.
3. Click **Next**.

<div align="center">
  <img
    src="/img/aws/05/ASG/image_05.png"
    alt="IAM Roles Example"
  />
</div>
<div align="center">
  <img
    src="/img/aws/05/ASG/image_06.png"
    alt="IAM Roles Example"
  />
</div>

---
## 📊 07. Configure Group Size

1. **Desired capacity:** `2`
2. **Minimum capacity:** `1`
3. **Maximum capacity:** `4`
4. Leave **Automatic scaling policies** disabled.
5. **Instance maintenance policy:** `No policy`
6. Skip:
   - **Additional capacity settings**
   - **Notifications**
   - **Tags**
7. Click **Next → Create Auto Scaling Group**.

<div align="center">
  <img
    src="/img/aws/05/ASG/image_07.png"
    alt="IAM Roles Example"
  />
</div>

---
## 🔄 08. Verify Instance Creation

1. Go to **ASG → Activity tab**.
   - Observe creation of two EC2 instances.
2. Go to **Instance Management tab:**
   - Instances transition from **Pending → InService**.

<div align="center">
  <img
    src="/img/aws/05/ASG/image_08.png"
    alt="IAM Roles Example"
  />
</div>
<div align="center">
  <img
    src="/img/aws/05/ASG/image_09.png"
    alt="IAM Roles Example"
  />
</div>

---
## 🌍 09. Test Load Balancer

1. Go to **Load Balancers → demo-alb**.
2. Copy the **DNS name**.
3. Open it in a browser.
4. You’ll see:
   Hello World from ip-xx-xx-xx-xx

<div align="center">
  <img
    src="/img/aws/05/ASG/image_10.png"
    alt="IAM Roles Example"
  />
</div>

---
## 🧠 10. Test Auto-Healing

1. Go to **EC2 → Select one instance → Terminate**.
2. Open **ASG → Activity History**:

- One instance terminated.
- New instance automatically launched.

3. Observe replacement in **Pending → InService** state.

<div align="center">
  <img
    src="/img/aws/05/ASG/image_11.png"
    alt="IAM Roles Example"
  />
</div>

---
## 📈 11. Experiment with Scaling

1. Edit ASG **Desired Capacity**:

- Set to `1` → ASG terminates one instance.
- Set to `4` → ASG launches two more instances.

2. Refresh **Target Group** to confirm all instances are registered.

This manual apporach is kind of limited if we see.

---
## ✅ Summary

| Component                     | Description                                    |
| ----------------------------- | ---------------------------------------------- |
| **Target Group**              | Registers EC2 instances for load balancing     |
| **Application Load Balancer** | Distributes incoming traffic                   |
| **Launch Template**           | Defines EC2 configuration and startup script   |
| **Auto Scaling Group**        | Automatically maintains desired instance count |
| **Health Checks**             | Detect and replace unhealthy instances         |
