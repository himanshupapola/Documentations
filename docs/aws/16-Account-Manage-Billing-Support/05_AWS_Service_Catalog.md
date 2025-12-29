---
title: 05. AWS Service Catalog
sidebar_label: A05. AWS Service Catalog
sidebar_position: 5
---

# 05. AWS Service Catalog

AWS Service Catalog enables organizations to **create, manage, and distribute approved AWS resources** as products to end users through a **self-service portal**.

It ensures users launch only **predefined and compliant** configurations, maintaining governance and consistency across the organization.

| Concept           | Description                                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Product**       | A CloudFormation template defining an AWS resource or application (e.g., EC2 instance, RDS database, S3 bucket). |
| **Portfolio**     | A collection of products grouped by category, department, or use case.                                           |
| **End User**      | A user who accesses the Service Catalog portal to launch approved products.                                      |
| **Administrator** | Defines and manages portfolios, products, and access permissions.                                                |

---

### How It Works

1. **Admin creates products**

   - Each product is a CloudFormation template with specific parameters and configurations.

2. **Products organized into portfolios**

   - Portfolios group related products and define **which users or roles** can access them.

3. **Users access the self-service portal**

   - They see only the products assigned to them.

4. **Product launch via CloudFormation**
   - Ensures automatic provisioning that is **secure, tagged, and compliant** with organizational standards.

### Benefits

- ✅ Enforces organizational compliance and standardization
- 🚀 Enables self-service provisioning for users
- 🧩 Simplifies resource deployment through preapproved templates
- 🔒 Controls who can access and deploy specific resources

---

### Example Use Case

| Scenario                    | Description                                                                                                                                                                                                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **RDS Database Deployment** | A user needs a database but isn’t sure how to configure it. The admin publishes an RDS CloudFormation template as a Service Catalog product. The user launches it safely, knowing it follows organizational standards. |

---

### Summary

**AWS Service Catalog** provides a **controlled, self-service environment** for deploying approved AWS resources — ensuring governance, security, and consistency across teams.
