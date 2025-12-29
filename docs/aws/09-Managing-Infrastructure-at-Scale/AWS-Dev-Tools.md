---
title: 06. AWS Infra
sidebar_label: A6. AWS Infra
sidebar_position: 6
---

## 01. AWS CodeCommit

**What it is:** Fully managed **private Git repository** service in AWS.

**Key Points**

- Git-based source control
- IAM-based authentication (SSH / HTTPS)
- Integrates with CodeBuild, CodeDeploy, CodePipeline
- Secure, scalable, fully managed

**Use Case:** Store and version application source code

**Exam Tip**

> CodeCommit = Private GitHub inside AWS

---

## 02. AWS Cloud9

**What it is:** Browser-based **cloud IDE**.

**Key Points**

- No local setup required
- Runs entirely in the browser
- Real-time collaboration
- Integrated with AWS services

**Use Case:** Write, test, and debug code in the cloud

**Exam Tip**

> Cloud9 = Web-based IDE

---

## 03. AWS CodeBuild

**What it is:** Fully managed **build and test service**.

**Key Points**

- Serverless (no build servers)
- Automatically scales
- Pay only for build time
- IAM-based security

**Workflow**
Source → Build → Test → Artifact

**Use Case:** Compile code, run tests, generate deployable artifacts

**Exam Tip**

> CodeBuild = Build + Test (serverless)

---

## 04. AWS CodeArtifact

**What it is:** Managed **artifact and dependency repository**.

**Key Points**

- Stores application dependencies
- Secure and scalable
- No self-managed artifact servers
- Integrates with CodeBuild

**Supported Tools**

- Maven
- Gradle
- npm
- pip
- NuGet
- yarn

**Exam Tip**

> CodeArtifact = Private Maven / npm / pip repository

---

## 05. AWS CodePipeline

**What it is:** Fully managed **CI/CD orchestration service**.

**Pipeline Flow**

Code → Build → Test → Deploy

**Example**

CodeCommit → CodeBuild → CodeDeploy

**Key Points**

- Automates release workflows
- Integrates with AWS & third-party tools
- Core CI/CD service in AWS

**Exam Tip**

> CodePipeline = CI/CD Orchestrator

---

## 06. AWS CodeDeploy

**What it is:** Automated **deployment service**.

**Deploy Targets**

- EC2 instances
- On-premises servers
- Lambda functions

**Key Concepts**

- Requires CodeDeploy Agent (EC2 / on-prem)
- Uses `appspec.yml`
- In-place & Blue/Green deployments
- Hybrid (AWS + on-prem)

**Exam Tip**

> CodeDeploy = Deployment automation (Hybrid)

---

## 07. AWS CodeStar

**What it is:** Unified **DevOps project dashboard**.

**Key Points**

- Quick project setup
- Central UI for AWS Dev tools
- Uses Cloud9 for code editing

**Use Case:** Rapid DevOps project bootstrap

**Exam Tip**

> CodeStar = All-in-one DevOps dashboard

---

## Quick Exam Mapping

| Service      | Primary Purpose       |
| ------------ | --------------------- |
| CodeCommit   | Source control        |
| Cloud9       | Cloud IDE             |
| CodeBuild    | Build & test          |
| CodeArtifact | Dependency storage    |
| CodePipeline | CI/CD orchestration   |
| CodeDeploy   | Deployment automation |
| CodeStar     | DevOps project setup  |
