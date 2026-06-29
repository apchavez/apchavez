# Alexander Prieto

Backend engineer focused on distributed systems, event-driven architecture, and cloud-native development. I build production-grade services in Java and TypeScript across AWS and Azure.

---

## Projects

### [clean-arch-azure-functions-java](https://github.com/apchavez/clean-arch-azure-functions-java)
[![CI](https://github.com/apchavez/clean-arch-azure-functions-java/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/clean-arch-azure-functions-java/actions/workflows/ci.yml)

Azure migration of the medical appointment platform originally built on AWS. Same domain logic and Clean Architecture — only the infrastructure adapters change. Implements event sourcing, Resilience4j circuit breaker + exponential retry, cursor-based pagination, ACS email notifications, and a full Bicep IaC pipeline with zero Azure cost at rest. In-memory JUnit 5 test suite with JaCoCo 80% gate — no Azure account or environment variables required.

`Java 21` `Azure Functions` `Cosmos DB` `Service Bus` `Clean Architecture` `Resilience4j` `Bicep`

### [clean-arch-aws-lambda-typescript](https://github.com/apchavez/clean-arch-aws-lambda-typescript)
[![CI](https://github.com/apchavez/clean-arch-aws-lambda-typescript/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/clean-arch-aws-lambda-typescript/actions/workflows/ci.yml)

The original AWS version of the same platform. SNS/SQS fan-out with per-country Lambda workers, DynamoDB state store, RDS for final persistence, JWT Lambda Authorizer, Dead Letter Queues, and CloudWatch Alarms.

`TypeScript` `AWS Lambda` `DynamoDB` `SNS/SQS` `Clean Architecture` `Serverless Framework`

### [spring-webflux-hexagonal-arch](https://github.com/apchavez/spring-webflux-hexagonal-arch)
[![CI](https://github.com/apchavez/spring-webflux-hexagonal-arch/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/spring-webflux-hexagonal-arch/actions/workflows/ci.yml)

Fully reactive REST API with Spring Boot WebFlux and R2DBC. Enforces hexagonal boundaries with ArchUnit, includes property-based tests with jqwik, per-IP rate limiting, and a full Kubernetes deployment published to GHCR.

`Java 21` `Spring Boot WebFlux` `PostgreSQL` `Hexagonal Architecture` `Kubernetes`

### [quarkus-react-fullstack-k8s](https://github.com/apchavez/quarkus-react-fullstack-k8s)
[![CI](https://github.com/apchavez/quarkus-react-fullstack-k8s/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/quarkus-react-fullstack-k8s/actions/workflows/ci.yml)

Fullstack product administration app: Quarkus REST backend with hexagonal architecture and Redis caching, React + Material UI frontend, MongoDB persistence, and a complete Kubernetes deployment with independent CI/CD pipelines per service. Independent test suites for backend and frontend, both runnable locally without Docker.

`Java 21` `Quarkus` `React` `MongoDB` `Redis` `Kubernetes`

### [serverless-api-integration-aws](https://github.com/apchavez/serverless-api-integration-aws)
[![CI](https://github.com/apchavez/serverless-api-integration-aws/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/serverless-api-integration-aws/actions/workflows/ci.yml)

Serverless integration service built on a clean layered architecture (handler → controller → service → repository). Consumes external APIs, transforms and translates data, and persists to DynamoDB via a swappable repository adapter. 100% test coverage across all layers — no AWS credentials or network required.

`TypeScript` `AWS Lambda` `DynamoDB` `Serverless Framework`

---

## Stack

| | |
|---|---|
| **Languages** | Java 21, TypeScript |
| **Cloud** | Azure (Functions, Cosmos DB, Service Bus, ACS), AWS (Lambda, DynamoDB, SNS/SQS) |
| **Frameworks** | Spring Boot WebFlux, Quarkus, Azure Functions v4 |
| **Architecture** | Clean Architecture, Hexagonal (Ports & Adapters), Event-Driven |
| **Infrastructure** | Bicep, Kubernetes, Docker, GitHub Actions |
| **Data** | Cosmos DB, PostgreSQL, Azure SQL, DynamoDB, MongoDB, Redis |