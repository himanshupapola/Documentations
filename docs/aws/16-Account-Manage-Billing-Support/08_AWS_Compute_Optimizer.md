---
title: 08. AWS Compute Optimizer
sidebar_label: A08. AWS Compute Optimizer
sidebar_position: 8
---

# 08. AWS Compute Optimizer

**AWS Compute Optimizer** helps you **reduce costs** and **improve performance** by using **machine learning** to recommend the **optimal AWS resources** for your workloads.

It analyzes your **resource configurations** and **CloudWatch metrics** to determine whether your workloads are **over-provisioned** or **under-provisioned**.

| Benefit                     | Description                                                          |
| --------------------------- | -------------------------------------------------------------------- |
| 💰 Cost Savings             | Reduce costs by up to **25%** without manual tuning.                 |
| ⚙️ Performance Optimization | Avoid underpowered instances or bottlenecks.                         |
| 🤖 ML-Powered               | Uses machine learning models trained on AWS usage patterns.          |
| 📈 Data-Driven              | Analyzes historical **CloudWatch metrics** for utilization insights. |
| ☁️ Integration              | Recommendations can be **exported to Amazon S3**.                    |

## Supported Resources

AWS Compute Optimizer provides recommendations for:

| Resource Type           | Optimization Focus                        |
| ----------------------- | ----------------------------------------- |
| **EC2 Instances**       | Instance type, size, and family selection |
| **Auto Scaling Groups** | Desired capacity and instance type mix    |
| **EBS Volumes**         | Volume type and size adjustments          |
| **Lambda Functions**    | Memory size and timeout optimization      |

---

## How It Works

1. **Collects Data** from your workloads via **Amazon CloudWatch** metrics.
2. **Analyzes Utilization** patterns (CPU, memory, I/O, etc.).
3. **Applies ML Models** to detect inefficiencies.
4. **Generates Recommendations** to:
   - Downsize over-provisioned resources
   - Upsize under-provisioned resources
   - Switch to more cost-efficient families
5. **Exports Recommendations** (optional) to **Amazon S3** for reporting or automation.

---

## Example Use Case

You have an **EC2 instance** running at 10% CPU utilization most of the time.  
Compute Optimizer recommends:

- A **smaller instance size** (e.g., from `m5.2xlarge` → `m5.large`)
- Potential **cost reduction** up to 25%
- Same or improved performance based on workload pattern

## How to Access

1. Open the **AWS Management Console** → **Compute Optimizer**.
2. Enable **resource analysis** (if not already enabled).
3. View **recommendations** by resource type.
4. Optionally, **export results** to an **S3 bucket** for automation or reporting.

## Best Practices

✅ Regularly review Compute Optimizer recommendations.  
✅ Use it together with **AWS Cost Explorer** and **Savings Plans**.  
✅ Automate rightsizing actions via **AWS Lambda or Systems Manager**.  
✅ Tag resources properly for more accurate insights.
