# Alexander Prieto

Systems engineer with 8+ years of experience building fullstack solutions in Java (Spring Boot, WebFlux, Quarkus), Python, Go, C#, and TypeScript, with frontend in Angular, React, and Vue. I specialize in microservices and REST APIs for enterprise systems in sectors such as banking, insurance, and the public sector, with experience in scalable architectures, cloud, and CI/CD — focused on code quality, high performance, and the stability of critical applications.

Below are two groups of portfolio projects, each implementing the **same business domain multiple times on purpose** — once per cloud/stack — to demonstrate the same engineering capabilities are portable across ecosystems, not tied to a single vendor or framework.

---

## Clinic Scheduling Platform — same domain, three clouds

### [aws-typescript](https://github.com/apchavez/aws-typescript)
[![CI](https://github.com/apchavez/aws-typescript/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/aws-typescript/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=clean-arch-aws-lambda-typescript&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=clean-arch-aws-lambda-typescript)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=clean-arch-aws-lambda-typescript&metric=coverage)](https://sonarcloud.io/summary/new_code?id=clean-arch-aws-lambda-typescript)

Medical appointment scheduling on AWS: create/cancel/reschedule/get-history with cursor-based pagination, a DynamoDB event store for full appointment history, SNS/SQS fan-out to per-country Lambda workers, RDS for final persistence, SES email notifications, a hand-rolled retry + circuit breaker around every external call, JWT Lambda Authorizer, Dead Letter Queues, and CloudWatch Alarms. Ships with a one-command deploy/destroy pipeline (`workflow_dispatch`) and was smoke-tested end-to-end against a real AWS account.

`TypeScript` `AWS Lambda` `DynamoDB` `SNS/SQS` `SES` `Clean Architecture` `Serverless Framework`

### [azure-python](https://github.com/apchavez/azure-python)
[![CI](https://github.com/apchavez/azure-python/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/azure-python/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=clean-arch-azure-functions-java&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=clean-arch-azure-functions-java)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=clean-arch-azure-functions-java&metric=coverage)](https://sonarcloud.io/summary/new_code?id=clean-arch-azure-functions-java)

The same platform on Azure, written in **Python** (Azure Functions v2 programming model) — identical endpoints, identical ownership-based authorization, identical hand-rolled retry/circuit-breaker numbers as its siblings, ported line-for-line. Cosmos DB for state and event-sourcing, Service Bus fan-out, Azure Communication Services email, full Bicep IaC pipeline with zero Azure cost at rest. Pytest suite with a coverage gate scoped to domain/application layers — no Azure account or environment variables required to run it.

`Python` `Azure Functions` `Cosmos DB` `Service Bus` `Clean Architecture` `Bicep`

### [gcp-go](https://github.com/apchavez/gcp-go)
[![CI](https://github.com/apchavez/gcp-go/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/gcp-go/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_gcp-go&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_gcp-go)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_gcp-go&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_gcp-go)

The same platform on GCP, written in **Go** (Cloud Run) — same endpoints, same ownership-based authorization, same hand-rolled retry/circuit-breaker numbers as its siblings. Firestore for state and event-sourcing, Pub/Sub fan-out to per-country Cloud Run workers (attribute-filtered push subscriptions), Cloud SQL for final persistence, SendGrid email notifications, Terraform IaC with a GCS remote-state backend. Ships with a one-command deploy/destroy pipeline and was smoke-tested end-to-end against a real GCP project.

`Go` `Cloud Run` `Firestore` `Pub/Sub` `Cloud SQL` `Clean Architecture` `Terraform`

---

## Product Management Platform — same domain, three fullstack stacks

### [quarkus-react](https://github.com/apchavez/quarkus-react)
[![CI](https://github.com/apchavez/quarkus-react/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/quarkus-react/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=quarkus-react-fullstack-k8s&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=quarkus-react-fullstack-k8s)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=quarkus-react-fullstack-k8s&metric=coverage)](https://sonarcloud.io/summary/new_code?id=quarkus-react-fullstack-k8s)

Fullstack product administration app: Quarkus REST backend with hexagonal architecture, MongoDB persistence with Redis caching, Kafka domain-event publishing (`product-events` topic), Redis-backed rate limiting on mutating endpoints, JWT auth, React + Material UI frontend, a Terraform-provisioned EKS cluster, and independent CI/CD pipelines per service.

`Java 21` `Quarkus` `React` `MongoDB` `Redis` `Kafka` `Kubernetes` `Terraform`

### [spring-angular](https://github.com/apchavez/spring-angular)
[![CI](https://github.com/apchavez/spring-angular/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/spring-angular/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=spring-angular-fullstack-k8s&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=spring-angular-fullstack-k8s)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=spring-angular-fullstack-k8s&metric=coverage)](https://sonarcloud.io/summary/new_code?id=spring-angular-fullstack-k8s)

The same product-management domain — same REST surface, same `product-events` Kafka topic, same rate-limiting rules as its siblings — on a reactive Spring Boot WebFlux + R2DBC backend enforcing hexagonal boundaries with ArchUnit, an Angular 21 (standalone components, Angular Material) frontend, JWT auth, a Terraform-provisioned EKS cluster, and Helm-based Kubernetes deployment with Prometheus/Grafana observability.

`Java 21` `Spring Boot WebFlux` `Angular` `PostgreSQL` `Kafka` `Hexagonal Architecture` `Kubernetes` `Terraform`

### [net-vue](https://github.com/apchavez/net-vue)
[![CI](https://github.com/apchavez/net-vue/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/net-vue/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_net-vue&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_net-vue)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_net-vue&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_net-vue)

The same product-management domain — same 7 REST endpoints, same `product-events` Kafka topic, same Redis rate-limiting rules as its siblings — on an ASP.NET Core Web API backend (Clean/Hexagonal Architecture, EF Core + PostgreSQL, JWT RS256 auth) with a Vue 3 (Composition API, Vuetify) frontend, Terraform-provisioned EKS cluster, and Helm-based Kubernetes deployment with Prometheus/Grafana observability.

`C#` `ASP.NET Core` `Vue 3` `PostgreSQL` `Kafka` `Hexagonal Architecture` `Kubernetes` `Terraform`

---

## Stack

| | |
|---|---|
| **Languages** | Java 21, TypeScript, Python, Go, C# |
| **Cloud** | AWS (Lambda, DynamoDB, SNS/SQS, SES), Azure (Functions, Cosmos DB, Service Bus, ACS), GCP (Cloud Run, Firestore, Pub/Sub, Cloud SQL) |
| **Frameworks** | Spring Boot WebFlux, Quarkus, ASP.NET Core, Azure Functions (Python v2 model) |
| **Frontend** | React, Angular, Vue |
| **Messaging** | Kafka, SNS/SQS, Azure Service Bus, GCP Pub/Sub |
| **Architecture** | Clean Architecture, Hexagonal (Ports & Adapters), Event-Driven |
| **Infrastructure** | Bicep, Terraform, Kubernetes (Helm), Docker, GitHub Actions |
| **Data** | DynamoDB, Cosmos DB, Azure SQL, Firestore, Cloud SQL, PostgreSQL, MongoDB, Redis |
