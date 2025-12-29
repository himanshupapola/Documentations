---
title: 06. Amazon CodeGuru
sidebar_label: A6. Amazon CodeGuru
sidebar_position: 6
---

# 06. Amazon CodeGuru Overview

Amazon **CodeGuru** is a **machine learning–powered developer tool** that helps improve **code quality** and **application performance**.

| Component             | Description                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **CodeGuru Reviewer** | Performs **automated code reviews** using **static code analysis** to detect issues such as bugs, resource leaks, and security vulnerabilities. |
| **CodeGuru Profiler** | Monitors **application performance at runtime** to detect inefficiencies, excessive CPU use, and cost optimization opportunities.               |

## 🧠 How It Works

### 1. CodeGuru Reviewer

- Analyzes code in repositories such as **CodeCommit**, **GitHub**, and **Bitbucket**.
- Provides **actionable recommendations** during code commits and pull requests.
- Detects:
  - Critical issues
  - Security vulnerabilities
  - Resource leaks and input validation flaws
- Learns from:
  - Thousands of open-source repositories
  - Internal **Amazon.com** repositories
- **Languages supported:** Java and Python

**Use Case Example:**

> Automatically detect a potential memory leak in your Java service before deployment.

---

### 2. CodeGuru Profiler

- Monitors your **application in production or pre-production** environments.
- Identifies **runtime inefficiencies** and **cost optimization opportunities**.
- Provides:
  - CPU and memory utilization insights
  - Heap summaries for memory-heavy objects
  - Anomaly detection for abnormal runtime behavior
- Works on both **AWS Cloud** and **on-premises** applications.
- Adds **minimal overhead** during performance monitoring.

**Use Case Example:**

> Identify a logging function that consumes excessive CPU time and optimize it.

| Benefit                  | Description                                                    |
| ------------------------ | -------------------------------------------------------------- |
| **Automated Reviews**    | Machine learning–driven detection of bugs and security issues. |
| **Performance Insights** | Real-time recommendations for CPU and memory optimization.     |
| **Cost Reduction**       | Reduce compute and performance inefficiencies.                 |
| **Integrations**         | Works with GitHub, Bitbucket, and AWS CodeCommit.              |

## 🧩 Summary

| Feature               | Purpose                                         |
| --------------------- | ----------------------------------------------- |
| **CodeGuru Reviewer** | Static code analysis for automated code reviews |
| **CodeGuru Profiler** | Runtime performance monitoring and optimization |

---

📘 **Remember:**

- Reviewer → Code Quality (Pre-deployment)
- Profiler → Performance & Cost Optimization (Post-deployment)
