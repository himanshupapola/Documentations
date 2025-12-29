---
title: 01. CloudWatch – Metrics & Alarms
sidebar_label: A1. CloudWatch – Metrics & Alarms
sidebar_position: 1
---

# 01. CloudWatch – Metrics & Alarms

**Amazon CloudWatch** is a monitoring and observability service for AWS resources and applications. It provides real-time visibility into performance, utilization, and operational health.

---

### 🔹 CloudWatch Metrics

**Metrics** are variables to monitor (e.g., `CPUUtilization`, `NetworkIn`, `Billing`).  
They represent data points collected over time, each with a timestamp.

---

### 🧠 Key Concepts

| Metric Source                | Example Metrics                                               | Default Frequency | Notes                                         |
| ---------------------------- | ------------------------------------------------------------- | ----------------- | --------------------------------------------- |
| **EC2 Instances**            | `CPUUtilization`, `NetworkIn`, `StatusCheckFailed`            | 5 min             | 1 min with _Detailed Monitoring_ (extra cost) |
| **EBS Volumes**              | `VolumeReadOps`, `VolumeWriteOps`                             | 5 min             | Disk I/O metrics                              |
| **S3 Buckets**               | `NumberOfObjects`, `AllRequests`, `BucketSizeBytes`           | Daily             | Request & storage metrics                     |
| **RDS Databases**            | `CPUUtilization`, `FreeStorageSpace`, `ReadIOPS`, `WriteIOPS` | 1 min             | DB performance metrics                        |
| **Lambda Functions**         | `Invocations`, `Errors`, `Duration`                           | 1 min             | Function-level metrics                        |
| **Billing (us-east-1 only)** | `EstimatedCharges`                                            | 6 hr              | Account-wide billing cost                     |
| **Service Limits**           | API usage metrics                                             | varies            | Helps track service quotas                    |
| **Custom Metrics**           | User-defined metrics                                          | custom            | Push via API or SDK                           |

💡 **Dashboards:**  
You can create CloudWatch Dashboards to visualize multiple metrics in a single view.

---

### 🔹 CloudWatch Alarms

**Alarms** are used to trigger actions or notifications based on metric thresholds.

### ⚙️ Alarm Actions

| Action Type           | Description                                      |
| --------------------- | ------------------------------------------------ |
| **Auto Scaling**      | Scale EC2 instances in/out automatically.        |
| **EC2 Actions**       | Stop, terminate, reboot, or recover an instance. |
| **SNS Notifications** | Send alerts via email/SMS through an SNS topic.  |

### 🔔 Example Use Cases

- Trigger alert if EC2 `CPUUtilization > 90%`
- Send SNS notification if `EstimatedCharges > $20`
- Automatically add EC2 instances when average CPU load is high

---

### 🧩 Alarm Configuration

| Setting                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| **Statistic**          | Average, Minimum, Maximum, Sum, Percentile          |
| **Period**             | Time frame for each evaluation (1 min, 5 min, etc.) |
| **Threshold**          | Value that triggers alarm                           |
| **Evaluation Periods** | Number of consecutive periods before alarm triggers |
| **Comparison**         | GreaterThanThreshold, LessThanThreshold, etc.       |

### Alarm States

| State                 | Meaning                           |
| --------------------- | --------------------------------- |
| **OK**                | Metric within normal threshold    |
| **ALARM**             | Metric has crossed threshold      |
| **INSUFFICIENT_DATA** | Not enough data to evaluate state |

---

### 🧾 Example: Billing Alarm

1. Go to **CloudWatch → Alarms → Create alarm**
2. Choose metric: **Billing → Total Estimated Charge**
3. Set threshold: e.g., `>$10`
4. Add **SNS notification** to receive alert
5. Review and create alarm

---

### ✅ Summary

- **CloudWatch Metrics**: Monitor key performance indicators across AWS.
- **CloudWatch Alarms**: Automate notifications and actions.
- **Dashboards**: Centralize monitoring.
- **Custom Metrics**: Track your own application data.

- To create billing alram go to us-east-1