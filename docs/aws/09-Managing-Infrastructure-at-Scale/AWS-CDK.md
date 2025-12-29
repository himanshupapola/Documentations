---
title: 03. AWS CDK
sidebar_label: A3. AWS CDK
sidebar_position: 3
---

# 03. AWS CDK

The AWS Cloud Development Kit (CDK) lets you define cloud infrastructure using familiar programming languages (TypeScript, JavaScript, Python, Java, .NET).

Instead of writing raw CloudFormation YAML/JSON, you model infrastructure as code the CDK synthesizes your code into a CloudFormation template which can then be deployed.

---

### Why use CDK?

- Use a real programming language: loops, functions, modules, type checking, testing, code reuse.
- Higher-level constructs (L2/L3) simplify common patterns (VPCs, ECS services, ALBs, Lambda + DynamoDB).
- Smooth developer experience for serverless (Lambda) and containerized apps (ECS, EKS).
- Single toolchain for infra + app code (especially handy when using the same language for Lambdas).

---

### Languages supported

- TypeScript / JavaScript
- Python
- Java
- .NET (C# / F# / VB)

### ⚙️ How It Works (High Level)

---

1. **Write your CDK app** — Define Stacks and Constructs in Java to describe your AWS resources.
2. **Run `cdk synth`** — The CDK compiles your app and generates a CloudFormation template.
3. **Run `cdk deploy`** — CDK uses CloudFormation to create or update resources in your AWS account.
4. **Manage via CloudFormation** — All resources are tracked and managed as CloudFormation stacks.

### Typical CLI workflow

---

```bash
# initialize a new CDK project in Java
cdk init app --language java

# build the project (downloads dependencies, compiles sources)
mvn package

# generate the CloudFormation (CFN) template (no deploy)
cdk synth

# preview changes between deployed stack and local code
cdk diff

# deploy the stack to AWS
cdk deploy

# delete the deployed stack
cdk destroy

```

---

### 🚀 Create a Simple EC2 Instance using AWS CDK (Java)

**EC2 + VPC + Security Group**  
Creates a Virtual Private Cloud (VPC), defines a Security Group that allows SSH access, and launches an EC2 instance inside that VPC using the latest Amazon Linux image.

---

### 🧱 Minimal Java Snippet

```java
import software.amazon.awscdk.App;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.StackProps;
import software.amazon.awscdk.services.ec2.*;
import software.constructs.Construct;

public class Ec2Stack extends Stack {
    public Ec2Stack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        // Create a VPC
        Vpc vpc = Vpc.Builder.create(this, "MyVpc")
                .maxAzs(2)
                .build();

        // Create a Security Group
        SecurityGroup sg = SecurityGroup.Builder.create(this, "MySecurityGroup")
                .vpc(vpc)
                .allowAllOutbound(true)
                .description("Allow SSH access to EC2 instance")
                .build();

        // Allow SSH from anywhere
        sg.addIngressRule(Peer.anyIpv4(), Port.tcp(22), "Allow SSH access");

        // Launch EC2 Instance
        Instance instance = Instance.Builder.create(this, "MyInstance")
                .vpc(vpc)
                .instanceType(InstanceType.of(InstanceClass.T3, InstanceSize.MICRO))
                .machineImage(MachineImage.latestAmazonLinux2023())
                .securityGroup(sg)
                .keyName("my-keypair-name") // replace with your key pair
                .build();
    }

    public static void main(final String[] args) {
        App app = new App();
        new Ec2Stack(app, "MyEc2Stack", StackProps.builder().build());
        app.synth();
    }
}
```

---

## Best practices & tips

- Use constructs to encapsulate and reuse infra patterns.
- Keep Lambda code small and colocated with infra only when it makes sense.
- Use `cdk diff` before `cdk deploy` to see changes.
- Use context and environment-specific stacks for multi-environment deployments.
- Write unit tests for constructs where practical (CDK asserts).
