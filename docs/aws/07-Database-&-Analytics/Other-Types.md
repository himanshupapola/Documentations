---
title: 08. Other Types
sidebar_label: A8. Other Types
sidebar_position: 8
---

---

## 01. Amazon Redshift

**Amazon Redshift** is a **fully managed, petabyte-scale data warehouse** for **Online Analytical Processing (OLAP)**.  
It’s **PostgreSQL-based**, optimized for analytics and reporting.
  
#### ⚙️ OLTP vs OLAP

| **Type** | **Full Form**                 | **Used For**                  | **Example AWS Service** |
| -------- | ----------------------------- | ----------------------------- | ----------------------- |
| **OLTP** | Online Transaction Processing | Day-to-day transactions       | Amazon RDS              |
| **OLAP** | Online Analytical Processing  | Analytics and complex queries | Amazon Redshift         |

#### 🧩 Key Features

- Based on PostgreSQL, but it's not used for OLTP instead OLAP
- Load data once every hour, not every second
- 10x better performance then other data warehouse, scale to PBs of data
- Columnar storage for faster queries
- Massively Parallel Processing (MPP), higly available
- Pay-as-you-go pricing
- Has a SQL interface for performing the query
- Integrated with **QuickSight** and **Tableau**

---

## 02. Amazon Redshift Serverless

Run analytics **without managing clusters**, Redshift automatically provisions and scales compute.

#### ⚡ How It Works

1. Enable Redshift Serverless
2. Connect via Query Editor or BI tools
3. Run queries — auto-scaling handled by AWS
4. Pay only for compute and storage used

#### 💡 Benefits

- No infrastructure management
- Auto-scaling and cost-efficient
- Ideal for ad-hoc queries, dashboards, analytics

---

## 03. Amazon EMR (Elastic MapReduce)

**Amazon EMR** is a **managed big data processing service** using **Apache Hadoop, Spark, Hive**, etc.

#### ⚙️ Key Features

- It helps creating Hadoop cluster to analyze and process vast amount of data.
- The cluster is made up of hundreds of EC2 instances.
- Managed big data frameworks
- Auto provisioning and scaling
- Integrates with **S3**, **DynamoDB**, and **Redshift**
- Pay per EC2 instance-hour

#### 🧩 Components

| **Component**   | **Description**                 |
| --------------- | ------------------------------- |
| **Master Node** | Coordinates and manages jobs    |
| **Core Nodes**  | Run tasks and store data (HDFS) |
| **Task Nodes**  | Perform compute-only operations |

#### 🧠 Use Cases

- ETL processing
- Big data analytics
- Machine learning at scale

---

## 04. Amazon Athena

**Amazon Athena** is a **serverless SQL query service** for data in **Amazon S3**.

#### ⚙️ Key Features

- Serverless, no setup required
- Query data in S3 using SQL (Presto engine)
- Supports CSV, JSON, Parquet, ORC, Avro
- ~$5 per TB scanned
- Integrated with **QuickSight**

#### 🧠 Use Cases

- Log and audit analysis
- Ad-hoc queries on S3 data
- Business Intelligence

#### 🧠 Exam Tips

- **Athena = Serverless SQL on S3**
- Use **Parquet/ORC** for cost reduction

---

## 05. Amazon QuickSight

**Amazon QuickSight** is a **serverless BI service** for **interactive dashboards and analytics**.

### ⚙️ Key Features

- Serverless and scalable
- ML-powered insights
- Pay-per-session pricing
- Integrates with **RDS**, **Redshift**, **Athena**, **S3**

### 🧠 Use Cases

- Business dashboards
- Visual analytics
- Ad-hoc reporting

---

## 06. Amazon DocumentDB

**Amazon DocumentDB** is a **MongoDB-compatible NoSQL document database** for **JSON-based data**.

### ⚙️ Key Features

- Fully managed, highly available (3 AZs)
- Auto-scaling storage (10 GB increments)
- Integrated with IAM and KMS

### 🧠 Use Cases

- Content management
- User profiles
- Catalog and metadata storage

---

## 07. Amazon Neptune

**Amazon Neptune** is a **graph database** for **highly connected data** like social networks and recommendations.

### ⚙️ Key Features

- Fully managed, replicated across 3 AZs
- Supports **Gremlin** (Property Graph) and **SPARQL** (RDF)
- Up to 15 read replicas

### 🧠 Use Cases

- Social networks
- Recommendation engines
- Fraud detection
- Knowledge graphs

---

## 08. Amazon Timestream

**Amazon Timestream** is a **serverless time series database** for metrics and events. It's data for evolving over time.

### ⚙️ Key Features

- Optimized for time-stamped data
- Auto-scaling and fully managed
- 1,000× faster, 1/10th the cost of RDBMS

### 🧠 Use Cases

- IoT sensor data
- Application performance metrics
- DevOps monitoring

---

## 09. Amazon Managed Blockchain

**Amazon Managed Blockchain** helps build and manage **blockchain networks** using **Hyperledger Fabric** and **Ethereum**.

#### ⚙️ Key Features

- Decentralized network creation
- Fully managed setup and scaling
- Integrated with IAM for security

#### 🧠 Use Cases

- Supply chain tracking
- Financial transactions
- Digital identity verification

---

## 10. AWS Glue

**AWS Glue** is a **serverless ETL (Extract, Transform, Load)** service for data preparation and integration.

### ⚙️ Key Features

- Serverless ETL with Python/Spark
- Automatic schema discovery (Crawlers)
- Glue Data Catalog for metadata
- Integrates with **S3**, **RDS**, **Redshift**, **Athena**, **EMR**

### 🧠 Use Cases

- Data cleaning and transformation
- ETL pipelines for analytics
- Building data catalogs

---

## 11. AWS Database Migration Service (DMS)

**AWS DMS** migrates databases to AWS **with minimal downtime**.

### ⚙️ Key Features

- Fully managed replication
- Continuous sync during migration
- Works with on-premises and cloud databases

### 🔁 Migration Types

| **Type**          | **Example**         | **Description**   |
| ----------------- | ------------------- | ----------------- |
| **Homogeneous**   | Oracle → Oracle     | Same engine       |
| **Heterogeneous** | SQL Server → Aurora | Different engines |

### 🧠 Use Cases

- Migrate on-premises DBs to AWS
- Cross-region replication
- Continuous data replication

### 🧠 Exam Tips

- **DMS = Minimal downtime migration**
- **Replication instance** runs on EC2
- Supports **RDS, Aurora, S3**, and on-prem sources
