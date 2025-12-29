---
title: 01. AWS DB Intro
sidebar_label: A1. AWS DB Intro
sidebar_position: 1
---

# 01. Introduction to Databases in AWS

A **database** is a structured way to store, organize, and retrieve data efficiently. Unlike file storage (EBS, EFS, S3), databases allow for:

- **Indexing** and **querying**
- **Relationships** between datasets
- **Efficient searching and transactions**

---
### **✌️ Types of Databases**

### 🧩 01. Relational Databases (SQL)

Structured data stored in **tables** (like Excel sheets) with **relations** between them.

#### Features:

- Predefined schema (columns, rows)
- Relationships (foreign keys)
- Query using **SQL (Structured Query Language)**
- Linked with another table:
a
#### Student Table:

| StudentID | DeptID | Name     | Email           |
| --------- | ------ | -------- | --------------- |
| 101       | 10     | John Doe | john@school.edu |
| 102       | 20     | Jane Roe | jane@school.edu |

#### Examples:

- **MySQL**, **PostgreSQL**, **Oracle**, **SQL Server**, **MariaDB**

#### Use Cases:

- Transactional applications
- Financial systems
- Enterprise data storage

---

### 🚀 02. NoSQL Databases (Non-Relational)

Flexible schema designed for fast, scalable, and distributed data storage.

#### Key Benefits:

| Benefit              | Description                        |
| -------------------- | ---------------------------------- |
| **Flexibility**      | Schema can evolve easily           |
| **Scalability**      | Scales horizontally across servers |
| **High Performance** | Optimized for specific data models |
| **Functionality**    | Built for modern app requirements  |

#### Types:

- Key-Value (e.g., DynamoDB), Document (e.g., MongoDB, DocumentDB), Graph, In-memory, Search databases

#### Example Data (JSON):

```json
{
  "name": "Abc",
  "age": 30,
  "cars": ["Ford", "BMW", "Fiat"],
  "address": {
    "type": "house",
    "number": 23,
    "street": "Abc Road"
  }
}
```

---
### 🧰 Use Cases:
- Real-time applications
- IoT and mobile systems
- Social, recommendation, and analytics platforms


---
### Benefits of Managed Databases on AWS

- ⚙️ **Quick provisioning**
- 💾 **Built-in high availability**
- 📈 **Vertical & horizontal scaling**
- 🔁 **Automated backup & restore**
- 🧩 **No OS patching required**
- 📊 **Integrated monitoring & alerting**


---
### ✅ Summary

| **Database Type** | **Structure** | **Schema** | **Scalability** | **Use Case** |
|--------------------|----------------|-------------|------------------|--------------|
| **SQL** | Relational | Fixed | Vertical | Traditional, Transactional Apps |
| **NoSQL** | Non-Relational | Flexible | Horizontal | Modern, Real-Time, Scalable Apps |
```
