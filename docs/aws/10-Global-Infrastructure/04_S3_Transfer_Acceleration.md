---
title: 04. S3 Transfer Acce
sidebar_label: A4. S3 Transfer Acce
sidebar_position: 4
---


# 04. Amazon S3 Transfer Acceleration

Amazon S3 Transfer Acceleration (TA) enables fast, easy, and secure transfers of files over long distances between your clients and an S3 bucket.

It leverages the Amazon CloudFront global edge network to accelerate uploads and downloads by routing traffic to the nearest edge location and then across AWS’s global backbone to the destination bucket.

---

### How it works

Instead of uploading directly to a bucket's regional endpoint, clients send data to the nearest CloudFront edge location.

The edge location then forwards the data to the target S3 bucket over AWS’s optimized network.

**Example flow (uploading from USA → S3 bucket in Australia):**

**Without Transfer Acceleration**
User (USA) ─────────────> S3 Bucket (Australia)

**With Transfer Acceleration**
User (USA) → Nearest Edge Location (USA) → AWS Global Backbone → S3 Bucket (Australia)

Result: Faster uploads and reduced latency for long-distance transfers.

| Feature                | Description                                  |
| ---------------------- | -------------------------------------------- |
| 🌐 Global Edge Network | Uses CloudFront’s 216+ global edge locations |
| ⚡ Faster Transfers    | Ideal for cross-continent uploads/downloads  |
| 🔒 Secure              | Data travels over Amazon’s private network   |
| 💼 Easy to Enable      | Works instantly once enabled on a bucket     |

---

### Steps to enable Transfer Acceleration

1. Open the AWS Console → S3 → select your bucket → **Properties**.
2. Scroll to **Transfer acceleration**.
3. Click **Edit → Enable**.
4. Save changes.

Once enabled, your bucket will have an accelerated endpoint.

---

### Accelerated endpoint

Use the accelerated endpoint in your SDK, CLI, or uploads:

```text
https://<your-bucket-name>.s3-accelerate.amazonaws.com
```

This replaces the standard regional endpoint:

```text
https://<your-bucket-name>.s3.<region>.amazonaws.com
```

---

### Test performance

You can test S3 Transfer Acceleration speed here:

https://s3-accelerate-speedtest.s3-accelerate.amazonaws.com/en/accelerate-speed-comparsion.html

This compares regular S3 speed vs accelerated endpoint speed from your current location.

### Pricing note

- Transfer Acceleration incurs an additional cost per GB transferred.
- It’s most beneficial for global uploads where clients are geographically distant from the bucket’s region.
- Evaluate costs vs performance benefits for your workload.



### Summary

| Feature     |                  Without TA |                        With TA |
| ----------- | --------------------------: | -----------------------------: |
| Upload path |         Direct to S3 region |      Via nearest edge location |
| Latency     |                      Higher |                          Lower |
| Endpoint    | s3.amazonaws.com (regional) |    s3-accelerate.amazonaws.com |
| Security    |                       HTTPS |                          HTTPS |
| Cost        |           Standard S3 rates | Slightly higher (TA surcharge) |

### When to use Transfer Acceleration

- You have global users or producers uploading large files to a central S3 bucket.
- You observe high latency or slow uploads across continents.
- You’re willing to pay a small premium for improved transfer performance.

### Notes

- Transfer Acceleration is not always faster for short-distance transfers — test with the speed-test link above.
- Some operations (like certain signed URLs) may require configuration changes to use the accelerated endpoint properly.

---
