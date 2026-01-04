---
title: 02 Types of Cloud Computing Services
sidebar_label: A2. Cloud Computing Services
sidebar_position: 2
---


## Cloud Service Models

Cloud computing services are commonly categorized into three major models:

- **Infrastructure as a Service (IaaS)**,
- **Platform as a Service (PaaS)**,
- **Software as a Service (SaaS)**.

Each model offers a different level of abstraction, control, and management responsibility.

---

### 01. Infrastructure as a Service (IaaS)

IaaS provides the foundational building blocks of cloud IT. It offers networking, compute, and storage resources with the **highest level of flexibility and control** for the customer.

**Characteristics**

- Customers manage the OS, runtime, and applications.
- Cloud provider manages physical hardware and virtualization.
- Closest parallel to traditional on-premises infrastructure.

**Examples**

- **Amazon EC2** – Virtual servers
- **Amazon VPC** – Networking environment
- **Amazon EBS** – Block storage
- **Amazon S3** – Object storage (when used as raw storage)

---

### 02. Platform as a Service (PaaS)

PaaS abstracts away infrastructure management so teams can focus on **application development, deployment, and lifecycle management**. It removes the need of organization to manage the underlying infrastructure.

**Characteristics**

- No need to manage servers or operating systems.
- Ideal for rapid development and automated scaling.
- Cloud provider manages the platform layer.

**Examples**

- **AWS Elastic Beanstalk** – Application deployment
- **AWS Lambda** – Serverless compute
- **Amazon API Gateway** – Managed API service
- **AWS Fargate** – Serverless containers

---

### 03. Software as a Service (SaaS)

SaaS delivers fully managed, ready-to-use applications run and managed entirely by the cloud provider.

**Characteristics**

- No infrastructure or platform concerns.
- Users simply access the application.
- Updates, maintenance, and scaling are handled by the provider.

**Examples**

- **Amazon WorkMail** – Managed email service
- **Amazon Chime** – Communications and meetings
- **Amazon QuickSight** – Business intelligence as SaaS

![Multi-Cloud Diagram](/img/aws/01/2.png)

---

## Summary Table

| Layer | Customer Manages  | Provider Manages         | Example AWS Services           |
| ----- | ----------------- | ------------------------ | ------------------------------ |
| IaaS  | OS, runtime, apps | Hardware, virtualization | EC2, VPC, EBS                  |
| PaaS  | Applications      | OS, platform, scaling    | Lambda, Beanstalk, API Gateway |
| SaaS  | Only usage        | Everything else          | WorkMail, Chime, QuickSight    |

![Multi-Cloud Diagram](/img/aws/01/3.png)
