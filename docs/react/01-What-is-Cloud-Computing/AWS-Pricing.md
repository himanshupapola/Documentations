---
title: 03 AWS Pricing
sidebar_label: A3. AWS Pricing
sidebar_position: 3
---


- **Pay-as-you-go:** Pay only for what you use, no upfront costs.
- **Save when you commit:** Use Reserved Instances or Savings Plans for lower rates.
- **Pay less with more use:** Volume-based discounts reduce cost as usage grows.
- **Free tier:** Try many AWS services at no cost within usage limits.
  Pricing calculator: Estimate monthly costs using the AWS Pricing Calculator.

---
## 💰 When AWS Charges You

- **Resource creation:** Billing starts when you create or run a resource (e.g., EC2 instance, S3 bucket).
- **Resource usage:** Charged for actual use — compute time, storage, data transfer, API calls, etc.
- **Idle resources:** Even if not used, you’re charged if the resource is running (e.g., stopped EC2 = no cost, running = charged).
- **Deletion:** Billing stops immediately after you delete or terminate the resource.
- **Monthly billing:** AWS bills are generated monthly, but usage is tracked hourly or per-second depending on the service.

![AWS Pricing](/img/aws/01/4.png)
