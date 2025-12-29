---
title: 08. Amazon Kendra
sidebar_label: A8. Amazon Kendra
sidebar_position: 8
---

# 🔍 08. Amazon Kendra Overview

**Amazon Kendra** is a **fully managed, AI-powered enterprise search service** that uses **machine learning** to help organizations easily search through large collections of documents and extract precise answers.

<div align="center">
  <img
    src="/img/aws/15/image_02.png"
    alt="IAM Roles Example"
    width="600"
  />
</div>

### 02. Key Features

| Feature                     | Description                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------- |
| **Fully Managed**           | No need to build or manage your own search infrastructure.                                      |
| **Intelligent Search**      | Uses ML to extract **answers** from documents — not just keyword matches.                       |
| **Multi-Format Support**    | Works with text, PDF, HTML, PowerPoint, MS Word, FAQs, and more.                                |
| **Natural Language Search** | Understands queries like “What is the company leave policy?” instead of just keywords.          |
| **Incremental Learning**    | Learns from user interactions and feedback to improve search relevance over time.               |
| **Manual Fine-Tuning**      | Allows admins to prioritize results based on **data freshness, custom ranking, or importance**. |

---

### 03. How It Works

1. **Connect Data Sources** → Import files from S3, SharePoint, or internal repositories.
2. **Index and Analyze** → Kendra reads and indexes the content using ML.
3. **Search Naturally** → Users type questions in plain English.
4. **Retrieve Answers** → Kendra returns **the most relevant passages** instead of full documents.
5. **Improve Over Time** → Learns from usage patterns to refine results.

---

### 04. Example Use Case

**Company Knowledge Search**

| Step  | Action                                                                |
| ----- | --------------------------------------------------------------------- |
| **1** | Upload internal documents — policies, FAQs, reports.                  |
| **2** | Employees ask natural questions like “How many paid leaves do I get?” |
| **3** | Kendra extracts the exact answer from the HR policy document.         |
| **4** | Feedback from users helps it improve future results.                  |

---

### 05. Benefits

- Accurate, context-aware search results
- Saves time finding information in large document sets
- Continuously improves via ML and feedback
- Integrates with AWS services and business apps

---

📘 **In summary:**  
**Amazon Kendra** turns unstructured company data into a **smart, searchable knowledge base**, allowing users to get **direct, accurate answers** using natural language.
