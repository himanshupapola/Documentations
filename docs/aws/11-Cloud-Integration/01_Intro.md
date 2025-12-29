---
title: 01. Cloud Integration
sidebar_label: A1. Cloud Integration
sidebar_position: 1
---


# 01. Cloud Integration Introduction

When deploying **multiple applications**, they often need to **communicate** with each other. AWS provides several **integration services** that enable this communication in a **scalable, decoupled**, and **reliable** way.

---
### 🔄 Communication Patterns

| Type | Description | Example | Problem |
|------|--------------|----------|----------|
| **Synchronous (App → App)** | Direct, real-time communication between services (e.g., HTTP/REST API calls). | A web app calls a microservice API directly. | Fails or slows down during traffic spikes. |
| **Asynchronous (Event-based)** | Indirect communication through an intermediary (queue, topic, or stream). | One app sends messages/events to another via a broker. | More resilient and scalable. |


---
### ⚙️ Why Decouple Applications?

When traffic spikes (e.g., encoding **1000 videos** instead of **10**), synchronous calls can overwhelm the backend.  
By **decoupling** applications, each component can **scale independently**, improving reliability and performance.

---

### 🧩 AWS Integration Services

| Service | Model | Description |
|----------|--------|-------------|
| **SQS (Simple Queue Service)** | **Queue Model** | Enables asynchronous **message queuing** between producers and consumers. Ideal for decoupling workloads. |
| **SNS (Simple Notification Service)** | **Pub/Sub Model** | Sends **notifications** to multiple subscribers (e.g., email, Lambda, SQS). Ideal for **fan-out messaging**. |
| **Kinesis** | **Streaming Model** | Handles **real-time data streams** for analytics and processing. *(Out of scope for the exam)* |


---
### SQS vs SNS

Both **Amazon SQS** and **Amazon SNS** enable **asynchronous communication** between applications, but they serve different purposes depending on the communication pattern.


### ⚖️ Comparison Table

| Feature | SQS (Queue) | SNS (Topic) |
|----------|--------------|-------------|
| **Model** | Point-to-Point | Publish/Subscribe |
| **Message Delivery** | Message goes to **one consumer** | Message is sent to **many subscribers** |
| **Persistence** | Messages are **stored until processed** | Messages are **pushed immediately** (not stored long) |
| **Use Case** | **Decouple producer and consumer** | **Broadcast events** to multiple receivers |
| **Example** | **Order Processing Queue** | Send **“OrderPlaced”** event to **Email**, **SMS**, and **Billing** services |


### 🧠 Key Takeaway

> **Decouple your applications** using SQS or SNS for better scalability, fault tolerance, and asynchronous processing.

