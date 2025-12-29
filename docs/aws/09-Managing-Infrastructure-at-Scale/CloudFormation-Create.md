---
title: 02. CloudFormation Create
sidebar_label: A2. CloudFormation Create
sidebar_position: 2
---

# 02. CloudFormation Create

This guide walks through creating and updating an AWS CloudFormation stack that launches an EC2 instance, adds security groups, and attaches an Elastic IP (EIP).

---
## Step-by-Step Walkthrough

### Step 1: Set Region

1. Sign in to the AWS Management Console.
2. Switch region to **US East (N. Virginia) — us-east-1**.

### Step 2: Open CloudFormation

1. Search for **CloudFormation** in the console.
2. Open the service.

### Step 3: Create Stack

1. Click **Create stack → With new resources (standard)**.
2. Choose **Upload a template file** and select `0-just-EC2.yaml`.
3. Click **View in Application Composer** to visualize the template.

<div align="center">
  <img
    src="/img/aws/09/image_01.png"
    alt="IAM Roles Example"
    width="500"
  />
</div>

### Step 4: Configure Stack

1. Enter **Stack name:** `demoCloudFormation`.
2. No parameters required for this template.

### Step 5: Add Tags

1. Add a tag, for example: `Name = CFDemo`.
2. Leave all other options as default.

### Step 6: Review and Create

1. Review the configuration.
2. Click **Create stack**.
3. Monitor progress in the **Events** tab.

<div align="center">
  <img
    src="/img/aws/09/image_02.png"
    alt="IAM Roles Example"
    width="500"
  />
</div>
### Step 7: Verify EC2 Instance

1. Open the **EC2 console**.
2. Confirm:
   - Instance Type: `t2.micro`
   - Correct AMI ID
   - Tags: CloudFormation + `CFDemo`

<div align="center">
  <img
    src="/img/aws/09/image_01.png"
    alt="IAM Roles Example"
    width="500"
  />
</div>

### Step 8: Update Stack

1. In CloudFormation, select the existing stack → **Update**.
2. Choose **Replace current template** and upload `1-ec2-with-sg-eip.yaml`.
3. Provide parameters (e.g., `SecurityGroupDescription = demo description`).

### Step 9: Preview Change Set

1. Review proposed changes:
   - New resources: Security Groups, Elastic IP
   - EC2 instance replacement (`Replacement: true`)
2. Note: The original instance will be terminated and replaced.

### Step 10: Execute Update

1. Submit the update and monitor **Events**.
2. Verify:
   - Two instances briefly (old and new).
   - New instance has attached security groups.
   - Elastic IP is allocated and associated.

<div align="center">
  <img
    src="/img/aws/09/image_04.png"
    alt="IAM Roles Example"
    width="500"
  />
</div>
### Step 11: Inspect Resources

1. In the CloudFormation stack:
   - Go to **Resources** tab to view all created items.
   - Go to **Template → View in Application Composer** for a visual architecture.

<div align="center">
  <img
    src="/img/aws/09/image_05.png"
    alt="IAM Roles Example"
    width="500"
  />
</div>
### Step 12: Cleanup

1. To remove all resources:
   - Delete the CloudFormation stack.
   - CloudFormation will delete resources in the correct order.

You have successfully created and updated a CloudFormation stack with EC2, Security Groups, and Elastic IP.
