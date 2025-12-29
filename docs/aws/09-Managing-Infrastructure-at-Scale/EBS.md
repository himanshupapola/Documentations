---
title: 04. AWS Elastic Beanstalk
sidebar_label: A4. AWS Elastic Beanstalk
sidebar_position: 4
---

# 04. AWS Elastic Beanstalk

Elastic Beanstalk (EB) is a developer-centric Platform as a Service (PaaS) on AWS that simplifies application deployment.
It provisions and manages the underlying resources (EC2, Auto Scaling Groups, Load Balancers, RDS, etc.) so developers can focus on application code, not infrastructure plumbing.

---

## Why use Elastic Beanstalk?

- Developer-friendly: deploy app code without managing every infra detail.
- Managed platform: OS, provisioning, scaling and deployments are handled by EB.
- Familiar web app patterns (3-tier) are easily reproduced with minimal configuration.
- Supports many runtimes and container options out of the box.

---

### Typical 3-tier web architecture

Users -> Load Balancer (ALB) across AZs -> EC2 instances (Auto Scaling Group) -> RDS (Relational DB)
Optional: ElastiCache for in-memory caching/session storage.

<div align="center">
  <img
    src="/img/aws/09/image_05.png"
    alt="IAM Roles Example"
    width="400"
  />
</div>
## Developer problems EB solves

- Managing infrastructure
- Deploying code consistently across environments
- Configuring load balancers, scaling, and basic health monitoring
- Ensuring apps scale with minimal ops involvement

---
## What Elastic Beanstalk provides

- Free to use (you pay for the underlying AWS resources)
- Managed EC2 instance configuration and OS
- Deployment orchestration (configurable strategies)
- Capacity provisioning with Auto Scaling
- Load balancing (ALB/ELB) management
- Application health monitoring (built-in health agent + CloudWatch)
- Easy environment lifecycle management via console, CLI, or API

---
## Developer responsibility

- Supply the application code and configuration
- Optionally tune environment settings (instance types, scaling policies, environment variables, extension files)
- For advanced needs: use custom platforms or ebextensions

---
## EB environment types / architecture models

- Single-instance: one EC2 instance — suitable for development or simple apps.
- Load Balancer + ASG: production-ready, supports high availability across AZs.
- Worker (ASG only): background job processing, queue-based workers (no public load balancer).

---
## Supported platforms (examples)

- Java SE / Java with Tomcat
- .NET on Windows Server / IIS
- Node.js
- PHP
- Python
- Ruby
- Go
- Single-container Docker
- Multi-container Docker (via ECS)
- Preconfigured Docker images
- Packer builder or custom platforms if needed

---
## Health monitoring

- EB installs a health agent on each EC2 instance.
- The agent pushes metrics and health reports to CloudWatch and the Beanstalk console.
- Beanstalk monitors application responsiveness and publishes environment health events.

---
## Elastic Beanstalk vs CloudFormation (high level)

- Purpose:
  - CloudFormation: Infrastructure as Code (fine-grained control).
  - Elastic Beanstalk: PaaS for application deployment and lifecycle management.
- Control:
  - CloudFormation: full control over individual resources.
  - Beanstalk: abstracted management with prescriptive configuration; still configurable via .ebextensions or custom resources.
- Use case:
  - CloudFormation: complex, multi-service infra, precise control.
  - Beanstalk: web app deployment, quick developer workflows, consistent environments.

---
## Common EB CLI workflow

```bash
# install EB CLI (if not installed)
pip install awsebcli --upgrade

# initialize a new Elastic Beanstalk application/environment
eb init               # choose region, platform, app name

# create an environment (single-instance or load-balanced)
eb create my-env      # prompts for environment type and settings

# deploy application code
eb deploy

# check environment status or open console
eb status
eb health
eb open

# terminate environment
eb terminate my-env
```

---
## When to choose Elastic Beanstalk

- You want fast, opinionated deployment for web applications.
- You want to reduce day-to-day infra management overhead.
- You prefer a PaaS experience but still need the ability to tune underlying components.
- You are deploying standard web stacks or containerized apps and want a simple workflow.

---
## When not to use Elastic Beanstalk

- You need very fine-grained, multi-service orchestration across many AWS services (CloudFormation / CDK / Terraform may be better).
- You require custom infra that EB cannot express without heavy customization.
- You need full control over resource provisioning and IAM boundaries from the start.
