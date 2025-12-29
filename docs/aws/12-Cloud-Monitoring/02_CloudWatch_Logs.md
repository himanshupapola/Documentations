---
title: 02. Amazon CloudWatch Logs
sidebar_label: A2. Amazon CloudWatch Logs
sidebar_position: 2
---

# 02. Amazon CloudWatch Logs

**Amazon CloudWatch Logs** provides **centralized logging** for AWS services and custom applications.  

It enables **real-time monitoring**, **search**, and **retention management** of logs from various sources.

| Feature | Description |
|----------|-------------|
| **Centralized Logging** | Collects and stores logs from AWS services, EC2 instances, and on-premises servers. |
| **Real-Time Monitoring** | View logs as they stream for troubleshooting and analysis. |
| **Retention Control** | Adjustable log retention periods for cost and compliance management. |

---

### 🔹 Log Sources

| Source | Description |
|---------|-------------|
| **Elastic Beanstalk** | Collects application logs automatically. |
| **Amazon ECS** | Gathers container logs. |
| **AWS Lambda** | Captures function execution logs. |
| **AWS CloudTrail** | Streams logs based on defined filters. |
| **Route 53** | Records DNS query logs. |
| **CloudWatch Agent** | Installed on EC2 or on-premises servers to push log files. |

---
### 🔹 CloudWatch Logs for EC2

1. **By default**, EC2 instances do **not** send logs to CloudWatch.
2. Install and configure the **CloudWatch Logs Agent** on EC2.
3. Ensure **IAM permissions** allow the instance to publish logs.
4. This Agent can also be deployed **on-premises** to centralize external server logs.


---
### 🧩 Example Use Cases

- Centralized log collection from microservices.
- Monitoring Lambda or ECS application behavior.
- Auditing CloudTrail activity patterns.
- Analyzing DNS query logs from Route 53.
