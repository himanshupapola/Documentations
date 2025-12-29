---
title: 10. AWS Cost Anomaly Detection
sidebar_label: A10. AWS Cost Anomaly Detection
sidebar_position: 10
---

# 10. AWS Cost Anomaly Detection

**AWS Cost Anomaly Detection** uses **Machine Learning (ML)** to continuously monitor your **AWS cost and usage data** and detect **unusual spending patterns**.

<div align="center">
  <img
    src="/img/aws/16/image.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

## ⚙️ How It Works

| Feature                   | Description                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------ |
| **ML-Based Detection**    | Learns your historical spending patterns automatically.                                                |
| **No Manual Thresholds**  | You don’t need to define any static limits — ML determines what’s “abnormal.”                          |
| **Continuous Monitoring** | Detects both **one-time spikes** and **ongoing cost increases**.                                       |
| **Scope of Monitoring**   | Works across **AWS services**, **member accounts**, **cost allocation tags**, and **cost categories**. |

## 📊 Notifications & Reporting

| Method                        | Description                                                              |
| ----------------------------- | ------------------------------------------------------------------------ |
| **Anomaly Detection Reports** | Provides insights with **root cause analysis** of cost anomalies.        |
| **Alerting Options**          | You can get **individual alerts** or **daily/weekly summaries**.         |
| **Delivery Method**           | Notifications are sent via **Amazon SNS (Simple Notification Service)**. |

## 🧠 Key Benefit

> Automatically detect and analyze unusual spending using ML — **no configuration**, **no manual thresholds**, **just insights**.

## ✅ Summary

- ML-powered, automated cost anomaly detection
- Learns your spending patterns
- Detects spikes or abnormal trends
- Alerts via SNS (individual or summary)
- Helps you act quickly to control unexpected costs

---

📍**Exam Tip:** Remember — this service is **proactive**, **machine-learning-based**, and **requires no manual setup of thresholds**.
