---
title: 04. AWS ASG
sidebar_label: A4. AWS ASG
sidebar_position: 4
---

# 04. AWS ASG

An **Auto Scaling Group (ASG)** in AWS automatically manages the number of EC2 instances based on application load and health.
It ensures that we always have the **right number of instances** running to handle current traffic efficiently.

---

### 🧩 Why Use Auto Scaling Groups?

Horizontal scaling = scale out / scale in

| Benefit                               | Description                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------- |
| ⚙️ **Elasticity**                     | Scale out (add instances) or scale in (remove instances) automatically to match demand.      |
| 💰 **Cost Optimization**              | Pay only for the resources you need — no overprovisioning.                                   |
| ❤️ **High Availability**              | Automatically replaces unhealthy instances with new healthy ones.                            |
| 🔄 **Integration with Load Balancer** | ASG works hand-in-hand with an Application Load Balancer (ALB) to distribute traffic evenly. |

---

## ⚙️ How Auto Scaling Works

1. **Define Group Parameters**

   - **Minimum size:** Lowest number of EC2 instances always running.
   - **Desired capacity:** The target number of instances currently running.
   - **Maximum size:** The upper limit of instances allowed in the group.

2. **Scale Out**

   - Automatically **adds** EC2 instances when load increases (e.g., more traffic during the day).

3. **Scale In**

   - Automatically **removes** EC2 instances when load decreases (e.g., less traffic at night).

4. **Health Check & Replacement**

   - ASG automatically **terminates unhealthy instances** and **launches new ones**.

---

## 🌐 Load Balancer Integration

- ASG instances are **automatically registered** and **deregistered** from the Load Balancer.
- As instances are added or removed, the Load Balancer updates its target group accordingly.
- Ensures smooth **traffic distribution** at all times.

### 🧠 Example Scenario

| Time    | Expected Load | ASG Action | Result           |
| ------- | ------------- | ---------- | ---------------- |
| Daytime | High traffic  | Scale out  | Add instances    |
| Night   | Low traffic   | Scale in   | Remove instances |

---

## ⚡ Auto Scaling Strategies

There are **four main types** of scaling strategies in AWS Auto Scaling Groups:

### 1️⃣ Manual Scaling

- User manually changes the **desired capacity** (e.g., from 1 → 2 instances).
- Useful for testing or controlled environments.

### 2️⃣ Dynamic Scaling

- Automatically adjusts capacity **based on CloudWatch alarms**.

### 🔹 Simple or Step Scaling

- Triggered by **specific CloudWatch alarms**.
- Example:

  - If CPU > 70% for 5 minutes → **Add 2 instances**.
  - If CPU < 30% for 10 minutes → **Remove 1 instance**.

- "Step" scaling allows **incremental scaling** based on thresholds.

### 🔹 Target Tracking Scaling

- Simplified approach.
- Define a **target metric value**, and ASG automatically adjusts to maintain it.
- Example:

  - Target average CPU utilization = **40%**.
  - ASG adds/removes instances automatically to maintain this value.

### 3️⃣ Scheduled Scaling

- Scaling actions are performed at **specific times**.
- Ideal for **predictable, time-based** workloads.

#### ⏰ Example:

> “Increase minimum capacity to 10 EC2 instances every Friday at 5 PM before a big event.”

### 4️⃣ Predictive Scaling (AI/ML Based)

- Uses **Machine Learning** to predict future traffic patterns.
- Automatically adjusts capacity **in advance** of expected load changes.
- Ideal for **repetitive daily or weekly traffic spikes**.

#### Example:

> If traffic spikes daily between 6–9 PM, ASG will automatically add instances at 5:50 PM.

---

### 🧭 Summary

| Scaling Type        | Trigger             | Automation | Example Use Case                |
| ------------------- | ------------------- | ---------- | ------------------------------- |
| Manual Scaling      | User input          | ❌         | Testing or fixed capacity       |
| Simple/Step Scaling | CloudWatch alarm    | ✅         | CPU spikes or drops             |
| Target Tracking     | Metric target       | ✅         | Maintain steady CPU utilization |
| Scheduled Scaling   | Time-based schedule | ✅         | Known traffic patterns          |
| Predictive Scaling  | ML-based prediction | ✅✅       | Regular, repeating patterns     |

---

### 🏁 Key Takeaways

- **ASG ensures elasticity, cost savings, and fault tolerance.**
- **Scaling strategies** give flexibility — from manual control to ML-powered automation.
- **Load Balancer + ASG** = reliable and scalable cloud application setup.
- Remember: **Elasticity** = scaling **in and out** automatically based on **demand**.
