---
title: 01. AWS CloudFormation
sidebar_label: A1. AWS CloudFormation
sidebar_position: 1
---

# 01. AWS CloudFormation Overview

**AWS CloudFormation** is a **declarative** service used to define and provision AWS resources automatically.

Instead of creating resources manually in the AWS Console, you write a **template** (YAML or JSON) describing what you want, and CloudFormation creates those resources in the **correct order** with the **exact configuration** you specify.

### Example

In a CloudFormation template, you can declare:

- A security group
- Two EC2 instances using that security group
- An S3 bucket
- A load balancer (ELB) in front of those instances

CloudFormation will automatically build all these resources for you.

---

### Benefits of AWS CloudFormation

### 1. Infrastructure as Code

- Infrastructure is managed entirely through code — no manual creation.
- All changes can go through version control and code review.
- Ensures consistency, repeatability, and compliance.

### 2. Cost Management

- Every resource in a stack is **tagged** with stack identifiers.
- You can easily track and estimate resource costs from the template.
- Example cost-saving strategy:
  - Automatically delete dev stacks at 5 PM and recreate them at 8 AM to save compute costs.

### 3. Productivity

- Easily **destroy and recreate** full environments in minutes.
- Automatically **generate architecture diagrams** from templates.
- Declarative logic: CloudFormation figures out the **order of resource creation** (no manual orchestration needed).

### 4. Reusability and Standardization

- Use and modify existing **community templates**.
- Access official **AWS documentation and sample templates**.
- Avoid reinventing infrastructure from scratch.

---

### Supported Resources

- Supports **almost all AWS resources** (EC2, S3, IAM, RDS, VPC, etc.).
- For unsupported services, you can use **Custom Resources** to extend functionality.

---

### CloudFormation Stack Designer

- The **Stack Designer** (or **Application Composer**) provides a **visual diagram** of your infrastructure.
- Example:
  - A WordPress stack showing EC2 instances, ALB, RDS database, security groups, and their relationships.
- Helps visualize resource dependencies and architecture layout.

---

### Key Points for Exams and Real Use

- Use CloudFormation whenever you need:
  - **Infrastructure as Code (IaC)**
  - **Repeatable deployments** across regions/accounts
  - **Consistent environments** (e.g., Dev, Test, Prod)
- CloudFormation is foundational for **automating AWS deployments**.

---

## In summary:

> AWS CloudFormation is the backbone of Infrastructure as Code on AWS it lets you model, automate, and manage your entire cloud environment reliably and efficiently.
