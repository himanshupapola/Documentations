---
title: 02. AWS Cognito
sidebar_label: A02. AWS Cognito
sidebar_position: 2
---

# 👥 02. Amazon Cognito

**Amazon Cognito** provides **authentication, authorization, and user management** for your web and mobile applications.

It lets users securely **sign up, sign in, and access your app** — without needing to create IAM users for each one.

Cognito is built to support **millions of users** and integrates seamlessly with other AWS services.

## 🧭 How It Works

1. A user **signs up or signs in** through your web or mobile application.
2. The app communicates with **Amazon Cognito** for authentication.
3. Cognito returns **temporary AWS credentials** (via **AWS STS**) that the app can use to access AWS resources securely.

## 🧰 Common Use Cases

| Use Case                   | Description                                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **User Sign-Up / Sign-In** | Manage user registration, authentication, and password recovery.                                                       |
| **Social Login**           | Allow login via Google, Facebook, Apple, or Amazon accounts.                                                           |
| **Access Control**         | Provide fine-grained access to AWS resources like S3 or DynamoDB.                                                      |
| **Federated Identity**     | Combine multiple identity providers (e.g., SAML, OIDC, enterprise directories) into one unified authentication system. |

| Component                | Description                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **User Pools**           | A built-in user directory that handles sign-up, sign-in, and user profile management.                        |
| **Identity Pools**       | Provide **temporary AWS credentials** (via STS) to authenticated users for accessing AWS resources.          |
| **Federated Identities** | Enable users to authenticate through external identity providers (like Google, Facebook, or corporate SAML). |

## 🔄 Integration with AWS STS

Amazon Cognito integrates with **AWS Security Token Service (STS)** to issue **temporary, limited-privilege credentials**.  
This lets authenticated users securely interact with AWS resources without exposing long-term IAM credentials.

## 🧠 Example Scenario

You’re building a **mobile photo-sharing app**:

1. Users sign up using **email**, **Google**, or **Facebook**.
2. Cognito authenticates them and generates **temporary credentials** via STS.
3. Users can upload photos securely to an **Amazon S3 bucket** — without ever managing AWS keys.

## 🧩 Exam Tip

> If you need to manage **millions of app users**, or allow **social logins (Google, Facebook, Apple, etc.)**,  
> the right AWS service is **Amazon Cognito**, not **IAM**.

## ✅ Summary Table

| Concept                    | Description                                                    |
| -------------------------- | -------------------------------------------------------------- |
| **Service Name**           | Amazon Cognito                                                 |
| **Purpose**                | Manage authentication, authorization, and access for app users |
| **Key Components**         | User Pools, Identity Pools, Federated Identities               |
| **Supports Social Logins** | ✅ Yes — Google, Facebook, Apple, Amazon                       |
| **Integrates With**        | AWS STS for temporary credentials                              |
| **Ideal For**              | Web & mobile apps with large-scale user bases                  |

---
